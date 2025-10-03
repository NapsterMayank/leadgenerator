import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, TrendingUp, Users, DollarSign, Download, Calendar, Target, Zap, Globe } from 'lucide-react';

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const systemMetrics = {
    totalUsers: 1247,
    activeUsers: 892,
    newUsersToday: 23,
    totalRevenue: 2450000, // in paise
    mrr: 2450000,
    churnRate: 3.2,
    avgSessionTime: '24m 32s',
    totalLeads: 45680,
    totalCampaigns: 2340,
    apiCalls: 324560
  };

  const platformStats = [
    { platform: 'Reddit', users: 856, leads: 18240, engagement: '9.2%', revenue: 1470000 },
    { platform: 'Quora', users: 612, leads: 13680, engagement: '7.8%', revenue: 980000 },
    { platform: 'Telegram', users: 189, leads: 9156, engagement: '8.9%', revenue: 560000 },
    { platform: 'X (Twitter)', users: 398, leads: 4604, engagement: '6.5%', revenue: 340000 }
  ];

  const userGrowth = [
    { month: 'Aug 2023', users: 234, revenue: 187200 },
    { month: 'Sep 2023', users: 345, revenue: 276000 },
    { month: 'Oct 2023', users: 456, revenue: 364800 },
    { month: 'Nov 2023', users: 678, revenue: 542400 },
    { month: 'Dec 2023', users: 892, revenue: 713600 },
    { month: 'Jan 2024', users: 1247, revenue: 997600 }
  ];

  const topPerformers = [
    { name: 'Rajesh Kumar', plan: 'Pro', leads: 1250, revenue: 249900, campaigns: 12 },
    { name: 'Priya Sharma', plan: 'Growth', leads: 890, revenue: 79900, campaigns: 8 },
    { name: 'Amit Patel', plan: 'Pro', leads: 756, revenue: 249900, campaigns: 6 },
    { name: 'Sneha Reddy', plan: 'Growth', leads: 634, revenue: 79900, campaigns: 9 },
    { name: 'Vikram Singh', plan: 'Pro', leads: 567, revenue: 249900, campaigns: 7 }
  ];

  const systemHealth = [
    { service: 'API Gateway', status: 'healthy', uptime: '99.9%', responseTime: '120ms' },
    { service: 'Database', status: 'healthy', uptime: '99.8%', responseTime: '45ms' },
    { service: 'Reddit Integration', status: 'healthy', uptime: '98.5%', responseTime: '230ms' },
    { service: 'Quora Integration', status: 'healthy', uptime: '97.2%', responseTime: '180ms' },
    { service: 'Payment Gateway', status: 'warning', uptime: '96.8%', responseTime: '340ms' },
    { service: 'Email Service', status: 'healthy', uptime: '99.1%', responseTime: '89ms' }
  ];

  const formatCurrency = (amountInPaise: number) => {
    return `₹${(amountInPaise / 100).toLocaleString('en-IN')}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'error': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Admin Analytics</h1>
          <p className="text-muted-foreground mt-2">Comprehensive system analytics and insights</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{systemMetrics.totalUsers.toLocaleString()}</p>
                <p className="text-xs text-green-600">+{systemMetrics.newUsersToday} today</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold">{formatCurrency(systemMetrics.mrr)}</p>
                <p className="text-xs text-green-600">+12.5% from last month</p>
              </div>
              <DollarSign className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                <p className="text-2xl font-bold">{systemMetrics.totalLeads.toLocaleString()}</p>
                <p className="text-xs text-green-600">+8.3% this month</p>
              </div>
              <Target className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">API Calls</p>
                <p className="text-2xl font-bold">{(systemMetrics.apiCalls / 1000).toFixed(1)}K</p>
                <p className="text-xs text-blue-600">This month</p>
              </div>
              <Zap className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  User Growth Trend
                </CardTitle>
                <CardDescription>
                  Monthly user acquisition and revenue growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userGrowth.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="text-right">
                        <p className="font-bold">{data.users} users</p>
                        <p className="text-sm text-muted-foreground">{formatCurrency(data.revenue)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Key Performance Indicators
                </CardTitle>
                <CardDescription>
                  Important metrics at a glance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Active Users</span>
                    <span className="font-bold">{systemMetrics.activeUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Churn Rate</span>
                    <span className="font-bold text-red-600">{systemMetrics.churnRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Avg Session Time</span>
                    <span className="font-bold">{systemMetrics.avgSessionTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total Campaigns</span>
                    <span className="font-bold">{systemMetrics.totalCampaigns.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Top Performing Users</CardTitle>
                <CardDescription>
                  Users with highest lead generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-muted-foreground">#{index + 1}</span>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.plan} Plan</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{user.leads} leads</p>
                        <p className="text-sm text-muted-foreground">{formatCurrency(user.revenue)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>User Segmentation</CardTitle>
                <CardDescription>
                  User distribution by plan and activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">Pro Users</span>
                    </div>
                    <span className="font-bold">35% (437 users)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Growth Users</span>
                    </div>
                    <span className="font-bold">45% (561 users)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-sm font-medium">Free Users</span>
                    </div>
                    <span className="font-bold">20% (249 users)</span>
                  </div>
                  <hr className="border-border/50" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Active Users (30d)</span>
                    <span className="font-bold text-green-600">71.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">New Users (30d)</span>
                    <span className="font-bold text-blue-600">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>
                  Revenue distribution by plan and platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Pro Plan Revenue</span>
                    <span className="font-bold">₹17,22,000 (70%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Growth Plan Revenue</span>
                    <span className="font-bold">₹7,35,000 (30%)</span>
                  </div>
                  <hr className="border-border/50" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Monthly Recurring Revenue</span>
                    <span className="font-bold text-primary">{formatCurrency(systemMetrics.mrr)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Annual Run Rate</span>
                    <span className="font-bold text-secondary">₹2,94,00,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Financial Metrics</CardTitle>
                <CardDescription>
                  Key financial performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Customer Lifetime Value</span>
                    <span className="font-bold">₹1,24,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Customer Acquisition Cost</span>
                    <span className="font-bold">₹2,340</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Payback Period</span>
                    <span className="font-bold">2.8 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Gross Margin</span>
                    <span className="font-bold text-green-600">78%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Platform Performance
              </CardTitle>
              <CardDescription>
                Performance metrics across all integrated platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {platformStats.map((platform, index) => (
                  <div key={index} className="border border-border/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{platform.platform}</h4>
                      <Badge variant="outline">{platform.users} users</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Leads Generated</p>
                        <p className="font-medium">{platform.leads.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Engagement Rate</p>
                        <p className="font-medium">{platform.engagement}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Revenue</p>
                        <p className="font-medium">{formatCurrency(platform.revenue)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>System Health Monitor</CardTitle>
              <CardDescription>
                Real-time system performance and uptime
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemHealth.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{service.service}</h4>
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>Uptime: {service.uptime}</span>
                        <span>Response: {service.responseTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminAnalytics;