import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Header from "@/components/layout/Header";
import DashboardLayout from "@/components/layout/DashboardLayout";

// Pages
import Landing from "@/pages/Landing";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import NotFound from "./pages/NotFound";

// Dashboard Pages
import Overview from "@/pages/dashboard/Overview";
import Campaigns from "@/pages/dashboard/Campaigns";
import Leads from "@/pages/dashboard/Leads";
import Templates from "@/pages/dashboard/Templates";
import Scheduling from "@/pages/dashboard/Scheduling";
import Analytics from "@/pages/dashboard/Analytics";
import Integrations from "@/pages/dashboard/Integrations";
import Billing from "@/pages/dashboard/Billing";
import Profile from "@/pages/dashboard/Profile";
import Settings from "@/pages/dashboard/Settings";

// Admin Pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import UserManagement from "@/pages/admin/UserManagement";
import AdminBilling from "@/pages/admin/AdminBilling";
import ContentModeration from "@/pages/admin/ContentModeration";
import TemplateManagement from "@/pages/admin/TemplateManagement";
import IntegrationManagement from "@/pages/admin/IntegrationManagement";
import AdminAnalytics from "@/pages/admin/AdminAnalytics";
import Support from "@/pages/admin/Support";
import AuditLogs from "@/pages/admin/AuditLogs";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <>{children}</>;
};

// Public Route Component (redirect if logged in)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={
        <>
          <Header />
          <Landing />
        </>
      } />
      
      <Route path="/auth/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      
      <Route path="/auth/signup" element={
        <PublicRoute>
          <Signup />
        </PublicRoute>
      } />

      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Overview />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="leads" element={<Leads />} />
        <Route path="templates" element={<TemplateManagement />} />
        <Route path="scheduling" element={<Scheduling />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="integrations" element={<IntegrationManagement />} />
        <Route path="billing" element={<Billing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Protected Admin Routes */}
      <Route path="/admin" element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="billing" element={<AdminBilling />} />
        <Route path="moderation" element={<ContentModeration />} />
        <Route path="templates" element={<TemplateManagement />} />
        <Route path="integrations" element={<IntegrationManagement />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="support" element={<Support />} />
        <Route path="audit" element={<AuditLogs />} />
      </Route>

      {/* Catch all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;