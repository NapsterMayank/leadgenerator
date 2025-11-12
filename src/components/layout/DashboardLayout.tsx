"use client";

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="flex">
        <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Sidebar />
        </aside>
        <main className="flex-1 lg:ml-64">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
