import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Zap, Settings, Key, AlertCircle, CheckCircle, RefreshCw, Globe, Database } from 'lucide-react';

const IntegrationManagement = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<any>(null);

  const platformIntegrations = [
    {
      id: 'reddit',
      name: 'Reddit',
      description: 'Monitor subreddits and engage with potential leads',
      status: 'active',
      health: 'healthy',
      apiVersion: 'v1.2',
      lastSync: '2 minutes ago',
      totalUsers: 892,
      activeUsers: 856,
      rateLimitUsed: 75,
      rateLimitTotal: 1000,
      endpoints: [
        { name: 'Subreddit Monitor', status: 'active', calls: 2450 },
        { name: 'Comment Posting', status: 'active', calls: 1230 },
        { name: 'User Profile', status: 'active', calls: 890 }
      ]
    },
    {
      id: 'quora',
      name: 'Quora',
      description: 'Find relevant questions and provide valuable answers',
      status: 'active',
      health: 'healthy',
      apiVersion: 'v2.0',
      lastSync: '5 minutes ago',
      totalUsers: 654,
      activeUsers: 612,
      rateLimitUsed: 45,
      rateLimitTotal: 500,
      endpoints: [
        { name: 'Question Search', status: 'active', calls: 1890 },
        { name: 'Answer Posting', status: 'active', calls: 756 },
        { name: 'Space Monitoring', status: 'active', calls: 432 }
      ]
    },
    {
      id: 'telegram',
      name: 'Telegram',
      description: 'Monitor channels and groups for engagement opportunities',
      status: 'maintenance',
      health: 'warning',
      apiVersion: 'v1.0',
      lastSync: '2 hours ago',
      totalUsers: 234,
      activeUsers: 189,
      rateLimitUsed: 90,
      rateLimitTotal: 300,
      endpoints: [
        { name: 'Channel Monitor', status: 'maintenance', calls: 567 },
        { name: 'Message Posting', status: 'inactive', calls: 234 },
        { name: 'Bot Integration', status: 'active', calls: 123 }
      ]
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      description: 'Track tweets and engage with potential customers',
      status: 'active',
      health: 'healthy',
      apiVersion: 'v2.1',
      lastSync: '1 hour ago',
      totalUsers: 445,
      activeUsers: 398,
      rateLimitUsed: 60,
      rateLimitTotal: 800,
      endpoints: [
        { name: 'Tweet Search', status: 'active', calls: 1234 },
        { name: 'Reply Posting', status: 'active', calls: 678 },
        { name: 'DM Capabilities', status: 'limited', calls: 234 }
      ]
    }
  ];

  const thirdPartyIntegrations = [
    {
      id: 'razorpay',
      name: 'Razorpay',
      description: 'Payment processing for Indian market',
      category: 'Payment',
      status: 'active',
      version: 'v1.0',
      users: 1247,
      lastTransaction: '5 minutes ago'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Team notifications and alerts',
      category: 'Communication',
      status: 'active',
      version: 'v2.0',
      users: 156,
      lastMessage: '1 hour ago'
    },
    {
      id: 'google-oauth',
      name: 'Google OAuth',
      description: 'Single sign-on authentication',
      category: 'Authentication',
      status: 'active',
      version: 'v2.0',
      users: 892,
      lastLogin: '2 minutes ago'
    },
    {
      id: 'sendgrid',
      name: 'SendGrid',
      description: 'Email delivery and notifications',
      category: 'Email',
      status: 'inactive',
      version: 'v3.0',
      users: 0,
      lastEmail: 'Never'
    }
  ];

  const apiKeys = [
    {
      id: 'key-001',
      name: 'Reddit API Key',
      service: 'Reddit',
      environment: 'Production',
      created: '2024-01-01',
      lastUsed: '2 minutes ago',
      status: 'active',
      permissions: ['read', 'write', 'identity']
    },
    {
      id: 'key-002',
      name: 'Quora API Key',
      service: 'Quora',
      environment: 'Production',
      created: '2024-01-01',
      lastUsed: '5 minutes ago',
      status: 'active',
      permissions: ['read', 'write']
    },
    {
      id: 'key-003',
      name: 'Telegram Bot Token',
      service: 'Telegram',
      environment: 'Production',
      created: '2024-01-01',
      lastUsed: '2 hours ago',
      status: 'expired',
      permissions: ['bot', 'messages']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'limited': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getHealthIcon = (health: string) => {
    switch (health) {
      case 'healthy': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Integration Management</h1>
          <p className="text-muted-foreground mt-2">Manage platform connections and third-party integrations</p>
        </div>
        <Button className="btn-primary">
          <Settings className="w-4 h-4 mr-2" />
          Global Settings
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Integrations</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">API Calls Today</p>
                <p className="text-2xl font-bold">12.4K</p>
              </div>
              <Database className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Connected Users</p>
                <p className="text-2xl font-bold">2,225</p>
              </div>
              <Globe className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">System Health</p>
                <p className="text-2xl font-bold">98.5%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="platforms" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="platforms">Platform Integrations</TabsTrigger>
          <TabsTrigger value="third-party">Third-party Services</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {platformIntegrations.map((integration) => (
              <Card key={integration.id} className="card-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {integration.name}
                        {getHealthIcon(integration.health)}
                      </CardTitle>
                      <CardDescription>{integration.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(integration.status)}>
                        {integration.status}
                      </Badge>
                      <Switch checked={integration.status === 'active'} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Total Users:</span> {integration.totalUsers}
                    </div>
                    <div>
                      <span className="font-medium">Active Users:</span> {integration.activeUsers}
                    </div>
                    <div>
                      <span className="font-medium">API Version:</span> {integration.apiVersion}
                    </div>
                    <div>
                      <span className="font-medium">Last Sync:</span> {integration.lastSync}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Rate Limit Usage</span>
                      <span>{integration.rateLimitUsed}/{integration.rateLimitTotal}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(integration.rateLimitUsed / integration.rateLimitTotal) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Endpoints</h4>
                    {integration.endpoints.map((endpoint, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span>{endpoint.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(endpoint.status)} variant="outline">
                            {endpoint.status}
                          </Badge>
                          <span className="text-muted-foreground">{endpoint.calls} calls</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Settings className="w-4 h-4 mr-2" />
                          Configure
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Configure {integration.name} Integration</DialogTitle>
                          <DialogDescription>
                            Manage settings and configuration for {integration.name}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>API Rate Limit (per hour)</Label>
                            <Input value={integration.rateLimitTotal} />
                          </div>
                          <div className="space-y-2">
                            <Label>Sync Frequency</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1min">Every minute</SelectItem>
                                <SelectItem value="5min">Every 5 minutes</SelectItem>
                                <SelectItem value="15min">Every 15 minutes</SelectItem>
                                <SelectItem value="1hour">Every hour</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center justify-between">
                            <Label>Enable Auto-retry</Label>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex gap-2">
                            <Button className="btn-primary">Save Changes</Button>
                            <Button variant="outline">Test Connection</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="third-party" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Third-party Services</CardTitle>
              <CardDescription>
                External services and integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {thirdPartyIntegrations.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{service.name}</h4>
                        <Badge variant="outline">{service.category}</Badge>
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Version: {service.version}</span>
                        <span>Users: {service.users}</span>
                        <span>Last activity: {service.lastTransaction || service.lastMessage || service.lastLogin || service.lastEmail}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Configure</Button>
                      <Switch checked={service.status === 'active'} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api-keys" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>API Keys Management</CardTitle>
                  <CardDescription>
                    Manage API keys and authentication tokens
                  </CardDescription>
                </div>
                <Button className="btn-primary">
                  <Key className="w-4 h-4 mr-2" />
                  Generate New Key
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((key) => (
                  <div key={key.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{key.name}</h4>
                        <Badge variant="outline">{key.environment}</Badge>
                        <Badge className={getStatusColor(key.status)}>
                          {key.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Service: {key.service}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Created: {key.created}</span>
                        <span>Last used: {key.lastUsed}</span>
                        <span>Permissions: {key.permissions.join(', ')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Regenerate</Button>
                      <Button variant="destructive" size="sm">Revoke</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>
                  Real-time health monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Reddit API</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Healthy</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Quora API</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Healthy</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Telegram API</span>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm">Warning</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">X (Twitter) API</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Healthy</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>API Usage Trends</CardTitle>
                <CardDescription>
                  Daily API call statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Today</span>
                    <span className="font-bold">12,450 calls</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Yesterday</span>
                    <span className="font-bold">11,230 calls</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">This Week</span>
                    <span className="font-bold">78,920 calls</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">This Month</span>
                    <span className="font-bold">324,560 calls</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Recent Integration Events</CardTitle>
              <CardDescription>
                Latest integration activities and alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: 'success', message: 'Reddit API connection restored', time: '2 minutes ago' },
                  { type: 'warning', message: 'Telegram API rate limit approaching', time: '15 minutes ago' },
                  { type: 'info', message: 'New API key generated for Quora', time: '1 hour ago' },
                  { type: 'error', message: 'Failed authentication for X API', time: '2 hours ago' }
                ].map((event, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full ${
                      event.type === 'success' ? 'bg-green-500' :
                      event.type === 'warning' ? 'bg-yellow-500' :
                      event.type === 'error' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.message}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
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

export default IntegrationManagement;