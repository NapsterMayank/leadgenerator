import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Play, Pause, Settings, BarChart3, Zap } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Scheduling = () => {
  const [autoScheduling, setAutoScheduling] = useState(true);

  const queuedPosts = [
    {
      id: 1,
      content: "Just discovered this amazing productivity hack! Anyone else struggling with time management?",
      platform: "Reddit",
      subreddit: "r/productivity",
      scheduledTime: "2024-01-15 14:30",
      status: "scheduled",
      engagement: "High"
    },
    {
      id: 2,
      content: "What's the best project management tool for small teams in India? Looking for something budget-friendly 🇮🇳",
      platform: "Quora",
      question: "Best project management tools for startups?",
      scheduledTime: "2024-01-15 16:45",
      status: "scheduled",
      engagement: "Medium"
    },
    {
      id: 3,
      content: "Cricket season is here! Perfect time to boost team productivity. Anyone using sports analogies for project management?",
      platform: "Telegram",
      channel: "Startup India",
      scheduledTime: "2024-01-15 18:00",
      status: "pending_approval",
      engagement: "High"
    }
  ];

  const optimalTimes = [
    { platform: "Reddit", time: "14:00-16:00", reason: "Peak engagement for Indian audience" },
    { platform: "Quora", time: "16:00-18:00", reason: "Evening browsing hours" },
    { platform: "Telegram", time: "18:00-20:00", reason: "Post-work social time" },
    { platform: "X (Twitter)", time: "12:00-14:00", reason: "Lunch break activity" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Scheduling & Posting</h1>
          <p className="text-muted-foreground mt-2">Manage your posting queue and optimize timing</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch 
              checked={autoScheduling} 
              onCheckedChange={setAutoScheduling}
              id="auto-schedule"
            />
            <label htmlFor="auto-schedule" className="text-sm font-medium">
              Auto-scheduling
            </label>
          </div>
          <Button className="btn-primary">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Queued Posts</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Calendar className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Posts</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <Clock className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Engagement</p>
                <p className="text-2xl font-bold">8.2</p>
              </div>
              <Zap className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Posting Queue */}
        <div className="lg:col-span-2">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Posting Queue
              </CardTitle>
              <CardDescription>
                Manage your scheduled posts and timing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {queuedPosts.map((post) => (
                <div key={post.id} className="border border-border/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2">
                        {post.platform} • {post.subreddit || post.question || post.channel}
                      </p>
                      <p className="text-sm">{post.content}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'}>
                        {post.status.replace('_', ' ')}
                      </Badge>
                      <Badge variant={post.engagement === 'High' ? 'default' : 'secondary'}>
                        {post.engagement}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.scheduledTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pause className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Optimal Times */}
        <div>
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Optimal Times
              </CardTitle>
              <CardDescription>
                Best posting times for each platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {optimalTimes.map((time, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{time.platform}</span>
                    <Badge variant="outline">{time.time}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{time.reason}</p>
                  {index < optimalTimes.length - 1 && <hr className="border-border/50" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="card-elegant mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full btn-primary">
                Schedule New Post
              </Button>
              <Button variant="outline" className="w-full">
                Bulk Schedule
              </Button>
              <Button variant="outline" className="w-full">
                Export Schedule
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;