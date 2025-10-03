'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockApi } from '@/lib/mock-api';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  UserPlus,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Shield
} from 'lucide-react';
import Link from 'next/link';

interface AdminData {
  userMetrics: {
    totalUsers: number;
    activeUsers: number;
    newSignups: number;
    churnRate: number;
  };
  revenue: {
    mrr: number;
    growth: number;
    totalRevenue: number;
  };
  systemHealth: {
    uptime: number;
    apiLatency: number;
    errorRate: number;
  };
  recentUsers: Array<{
    id: string;
    name: string;
    email: string;
    plan: string;
    joinedAt: string;
  }>;
}

const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<AdminData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminData = await mockApi.getAdminDashboard();
        setData(adminData);
      } catch (error) {
        console.error('Failed to fetch admin data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return <div>Failed to load admin data</div>;
  }

  const metricCards = [
    {
      title: 'Total Users',
      value: data.userMetrics.totalUsers.toLocaleString(),
      icon: Users,
      description: `+${data.userMetrics.newSignups} new this week`,
      trend: 'up',
      color: 'text-blue-600',
    },
    {
      title: 'Monthly Revenue',
      value: `₹${(data.revenue.mrr / 1000).toFixed(0)}K`,
      icon: DollarSign,
      description: `+${data.revenue.growth}% from last month`,
      trend: 'up',
      color: 'text-green-600',
    },
    {
      title: 'Active Users',
      value: data.userMetrics.activeUsers.toLocaleString(),
      icon: Activity,
      description: `${((data.userMetrics.activeUsers / data.userMetrics.totalUsers) * 100).toFixed(1)}% of total`,
      trend: 'up',
      color: 'text-purple-600',
    },
    {
      title: 'System Uptime',
      value: `${data.systemHealth.uptime}%`,
      icon: CheckCircle,
      description: `${data.systemHealth.apiLatency}ms avg latency`,
      trend: 'neutral',
      color: 'text-green-600',
    },
  ];

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'pro':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'growth':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'free':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 relative">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-10 pointer-events-none"></div>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-slide-up">
        <div>
          <Badge className="card-glass px-4 py-2 mb-4 border-0">
            <Shield className="w-4 h-4 mr-2" />
            Admin Panel
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-3">Admin Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Monitor system performance and user metrics
          </p>
        </div>
        <div className="flex items-center space-x-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Badge className="card-glass px-4 py-2 text-green-400 border-0">
            <CheckCircle className="mr-2 h-4 w-4" />
            All Systems Operational
          </Badge>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metricCards.map((metric, index) => (
          <Card key={index} className="card-glass border-0 group hover:scale-105 transition-all duration-500 animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all rounded-2xl"></div>
            <CardContent className="p-8 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform shadow-glow">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <Badge className="card-glass px-3 py-1 text-xs border-0 text-green-400">
                  {metric.trend === 'up' && <ArrowUpRight className="h-3 w-3 mr-1" />}
                  {metric.trend === 'down' && <ArrowDownRight className="h-3 w-3 mr-1" />}
                  {metric.description.split(' ')[0]}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {metric.title}
                </p>
                <p className="text-3xl font-bold text-gradient group-hover:scale-105 transition-transform origin-left">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {metric.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 card-glass border-0 group hover:scale-[1.02] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 group-hover:from-secondary/10 group-hover:to-accent/10 transition-all rounded-2xl"></div>
          <CardHeader className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-secondary p-2 shadow-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gradient">Revenue Overview</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Monthly recurring revenue and growth trends
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">₹{data.revenue.totalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">+{data.revenue.growth}%</p>
                  <p className="text-sm text-muted-foreground">Growth Rate</p>
                </div>
              </div>
              
              {/* Simple revenue visualization */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>MRR Progress</span>
                  <span>₹{data.revenue.mrr.toLocaleString()}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-lg font-semibold">₹45K</p>
                  <p className="text-xs text-muted-foreground">Free → Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">₹65K</p>
                  <p className="text-xs text-muted-foreground">Growth → Pro</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">₹15K</p>
                  <p className="text-xs text-muted-foreground">New Signups</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className="card-glass border-0 group hover:scale-[1.02] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 group-hover:from-accent/10 group-hover:to-primary/10 transition-all rounded-2xl"></div>
          <CardHeader className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent p-2 shadow-glow">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gradient">System Health</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Real-time system performance metrics
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Uptime</span>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold">{data.systemHealth.uptime}%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">API Latency</span>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-semibold">{data.systemHealth.apiLatency}ms</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Error Rate</span>
                <div className="flex items-center space-x-2">
                  {data.systemHealth.errorRate < 1 ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="text-sm font-semibold">{data.systemHealth.errorRate}%</span>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <h4 className="text-sm font-medium">Quick Actions</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Activity className="mr-2 h-4 w-4" />
                    View Logs
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Check Alerts
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Users */}
      <Card className="card-glass border-0 group hover:scale-[1.01] transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/8 group-hover:to-secondary/8 transition-all rounded-2xl"></div>
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary p-2 shadow-glow">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gradient">Recent Users</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Latest user registrations and activity
                </CardDescription>
              </div>
            </div>
            <Button className="btn-secondary group" asChild>
              <Link href="/admin/users">
                View All Users
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={getPlanColor(user.plan)}>
                    {user.plan}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {new Date(user.joinedAt).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(user.joinedAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="card-glass border-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 group-hover:from-primary/10 group-hover:to-primary-light/10 transition-all rounded-2xl"></div>
          <Link href="/admin/users">
            <CardHeader className="relative p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary p-3 mb-4 group-hover:scale-110 transition-transform shadow-glow">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gradient mb-2">
                Manage Users
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                View, edit, and manage user accounts
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="card-glass border-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary-light/5 group-hover:from-secondary/10 group-hover:to-secondary-light/10 transition-all rounded-2xl"></div>
          <Link href="/admin/billing">
            <CardHeader className="relative p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-secondary p-3 mb-4 group-hover:scale-110 transition-transform shadow-glow">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gradient mb-2">
                Billing & Plans
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Manage subscriptions and payments
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="card-glass border-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-light/5 group-hover:from-accent/10 group-hover:to-accent-light/10 transition-all rounded-2xl"></div>
          <Link href="/admin/moderation">
            <CardHeader className="relative p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-accent p-3 mb-4 group-hover:scale-110 transition-transform shadow-glow">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gradient mb-2">
                Content Moderation
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Review flagged content and policies
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="card-glass border-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all rounded-2xl"></div>
          <Link href="/admin/analytics">
            <CardHeader className="relative p-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-accent p-3 mb-4 group-hover:scale-110 transition-transform shadow-glow">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-gradient mb-2">
                Analytics
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Detailed reports and insights
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>
      </div>

      {/* Alerts & Notifications */}
      <Card className="card-glass border-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 p-2 shadow-glow">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl text-gradient">System Alerts</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-4">
            <div className="card-glass p-4 border-0 flex items-center justify-between group hover:scale-[1.02] transition-all">
              <div className="flex items-center space-x-4">
                <div className="h-3 w-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-gradient">High API usage detected</p>
                  <p className="text-xs text-muted-foreground">Reddit API calls approaching limit</p>
                </div>
              </div>
              <Button className="btn-secondary group-hover:scale-105 transition-transform">
                Review
              </Button>
            </div>
            
            <div className="card-glass p-4 border-0 flex items-center justify-between group hover:scale-[1.02] transition-all">
              <div className="flex items-center space-x-4">
                <div className="h-3 w-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-gradient">New feature requests</p>
                  <p className="text-xs text-muted-foreground">5 users requested Instagram integration</p>
                </div>
              </div>
              <Button className="btn-secondary group-hover:scale-105 transition-transform">
                View
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
