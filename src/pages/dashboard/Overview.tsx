'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockApi } from '@/lib/mock-api';
import { 
  Search, 
  MessageSquare, 
  CreditCard, 
  Target,
  TrendingUp,
  Clock,
  Activity,
  Plus,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface OverviewData {
  dailyMetrics: {
    leadsFound: number;
    repliesGenerated: number;
    creditsUsed: number;
    campaignsActive: number;
  };
  weeklyStats: Array<{
    day: string;
    leads: number;
    replies: number;
  }>;
  recentActivity: Array<{
    id: string;
    type: string;
    message: string;
    time: string;
  }>;
}

const Overview: React.FC = () => {
  const [data, setData] = useState<OverviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const overviewData = await mockApi.getOverview();
        setData(overviewData);
      } catch (error) {
        console.error('Failed to fetch overview data:', error);
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
    return <div>Failed to load overview data</div>;
  }

  const metricCards = [
    {
      title: 'Leads Found Today',
      value: data.dailyMetrics.leadsFound,
      icon: Search,
      description: '+23% from yesterday',
      trend: 'up',
    },
    {
      title: 'Replies Generated',
      value: data.dailyMetrics.repliesGenerated,
      icon: MessageSquare,
      description: '+12% from yesterday',
      trend: 'up',
    },
    {
      title: 'Credits Used',
      value: data.dailyMetrics.creditsUsed,
      icon: CreditCard,
      description: '425 remaining',
      trend: 'neutral',
    },
    {
      title: 'Active Campaigns',
      value: data.dailyMetrics.campaignsActive,
      icon: Target,
      description: 'All running smoothly',
      trend: 'neutral',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lead_found':
        return <Search className="h-4 w-4 text-blue-500" />;
      case 'reply_generated':
        return <MessageSquare className="h-4 w-4 text-green-500" />;
      case 'campaign_created':
        return <Target className="h-4 w-4 text-purple-500" />;
      default:
        return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your lead generation.
          </p>
        </div>
        <Button className="btn-primary" asChild>
          <Link href="/dashboard/campaigns">
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Link>
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((metric, index) => (
          <Card key={index} className="card-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                {metric.trend === 'up' && (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                )}
                {metric.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Performance Chart */}
        <Card className="lg:col-span-2 card-elegant">
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
            <CardDescription>
              Leads found and replies generated over the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.weeklyStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 text-sm font-medium text-muted-foreground">
                      {stat.day}
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {stat.leads} leads
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {stat.replies} replies
                      </Badge>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div 
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${(stat.leads / 20) * 100}px` }}
                    />
                    <div 
                      className="h-2 bg-secondary rounded-full"
                      style={{ width: `${(stat.replies / 10) * 100}px` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates from your campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      {activity.message}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="card-elegant hover:shadow-glow transition-all duration-300 group cursor-pointer">
          <Link href="/dashboard/leads">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Check New Leads
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </CardTitle>
              <CardDescription>
                Review and respond to potential customers
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="card-elegant hover:shadow-glow transition-all duration-300 group cursor-pointer">
          <Link href="/dashboard/templates">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Browse Templates
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </CardTitle>
              <CardDescription>
                Explore viral templates for better engagement
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="card-elegant hover:shadow-glow transition-all duration-300 group cursor-pointer">
          <Link href="/dashboard/analytics">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                View Analytics
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </CardTitle>
              <CardDescription>
                Track performance and optimize campaigns
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>
      </div>

      {/* Getting Started Tips */}
      <Card className="card-elegant border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 text-primary mr-2" />
            Pro Tips for Better Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Optimize Your Keywords</h4>
              <p className="text-sm text-muted-foreground">
                Use specific, long-tail keywords that your target audience actually uses in conversations.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Use Hinglish Templates</h4>
              <p className="text-sm text-muted-foreground">
                Our Hinglish templates have 40% higher engagement rates with Indian audiences.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Enable Safe Mode</h4>
              <p className="text-sm text-muted-foreground">
                Always review AI-generated replies before posting to maintain authenticity.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Monitor Multiple Platforms</h4>
              <p className="text-sm text-muted-foreground">
                Reddit and Quora together generate 70% more qualified leads than single platforms.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;