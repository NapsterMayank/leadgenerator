"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Users,
  MessageSquare,
  Download,
  Calendar,
  Target,
  Zap,
} from "lucide-react";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("7d");

  const metrics = [
    {
      title: "Total Leads",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "8.4%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
    },
    {
      title: "Engagement Rate",
      value: "15.2%",
      change: "-0.8%",
      trend: "down",
      icon: MessageSquare,
    },
    {
      title: "Revenue Generated",
      value: "₹45,680",
      change: "+18.3%",
      trend: "up",
      icon: TrendingUp,
    },
  ];

  const platformData = [
    {
      platform: "Reddit",
      leads: 456,
      conversion: "9.2%",
      revenue: "₹18,240",
      color: "bg-orange-500",
    },
    {
      platform: "Quora",
      leads: 342,
      conversion: "7.8%",
      revenue: "₹13,680",
      color: "bg-red-500",
    },
    {
      platform: "Telegram",
      leads: 289,
      conversion: "8.9%",
      revenue: "₹9,156",
      color: "bg-blue-500",
    },
    {
      platform: "X (Twitter)",
      leads: 160,
      conversion: "6.5%",
      revenue: "₹4,604",
      color: "bg-gray-800",
    },
  ];

  const topCampaigns = [
    {
      name: "SaaS Productivity Tool",
      leads: 234,
      conversion: "12.4%",
      revenue: "₹15,680",
    },
    {
      name: "E-commerce Platform",
      leads: 189,
      conversion: "8.9%",
      revenue: "₹12,340",
    },
    {
      name: "Mobile App Launch",
      leads: 156,
      conversion: "7.2%",
      revenue: "₹8,920",
    },
    {
      name: "Digital Marketing Course",
      leads: 134,
      conversion: "9.8%",
      revenue: "₹7,560",
    },
  ];

  const recentActivity = [
    { action: "New lead from Reddit", time: "2 minutes ago", type: "lead" },
    {
      action: "Campaign 'SaaS Tool' reached 100 leads",
      time: "15 minutes ago",
      type: "milestone",
    },
    {
      action: "High engagement post on Quora",
      time: "1 hour ago",
      type: "engagement",
    },
    {
      action: "New conversion from Telegram",
      time: "2 hours ago",
      type: "conversion",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Track your lead generation performance
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
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
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span
                        className={`text-sm ${
                          metric.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {metric.change}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        vs last period
                      </span>
                    </div>
                  </div>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Performance */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Platform Performance
            </CardTitle>
            <CardDescription>Lead generation by platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {platformData.map((platform, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${platform.color}`}
                    ></div>
                    <span className="font-medium">{platform.platform}</span>
                  </div>
                  <Badge variant="outline">{platform.leads} leads</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>Conversion: {platform.conversion}</div>
                  <div>Revenue: {platform.revenue}</div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${platform.color}`}
                    style={{ width: `${(platform.leads / 500) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Campaigns */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Top Performing Campaigns
            </CardTitle>
            <CardDescription>Your best converting campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCampaigns.map((campaign, index) => (
              <div
                key={index}
                className="border border-border/50 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{campaign.name}</h4>
                  <Badge variant="outline">#{index + 1}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Leads</p>
                    <p className="font-medium">{campaign.leads}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conversion</p>
                    <p className="font-medium">{campaign.conversion}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Revenue</p>
                    <p className="font-medium">{campaign.revenue}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>Latest updates from your campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "lead"
                      ? "bg-blue-500"
                      : activity.type === "conversion"
                      ? "bg-green-500"
                      : activity.type === "milestone"
                      ? "bg-purple-500"
                      : "bg-orange-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
