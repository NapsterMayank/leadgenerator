import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, CheckCircle, AlertCircle, ExternalLink, Key, Zap, Shield } from 'lucide-react';

const Integrations = () => {
  const [connections, setConnections] = useState({
    reddit: { connected: true, status: 'active' },
    quora: { connected: true, status: 'active' },
    telegram: { connected: false, status: 'inactive' },
    twitter: { connected: true, status: 'limited' }
  });

  const platforms = [
    {
      id: 'reddit',
      name: 'Reddit',
      description: 'Connect your Reddit account to find and engage with potential leads',
      icon: '🔴',
      features: ['Subreddit monitoring', 'Comment posting', 'DM capabilities', 'Karma tracking'],
      status: connections.reddit.status,
      connected: connections.reddit.connected,
      lastSync: '2 minutes ago'
    },
    {
      id: 'quora',
      name: 'Quora',
      description: 'Monitor questions and provide valuable answers to generate leads',
      icon: '🔴',
      features: ['Question monitoring', 'Answer posting', 'Space participation', 'Analytics'],
      status: connections.quora.status,
      connected: connections.quora.connected,
      lastSync: '5 minutes ago'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      description: 'Engage with communities and channels for lead generation',
      icon: '💙',
      features: ['Channel monitoring', 'Group participation', 'Bot integration', 'Message scheduling'],
      status: connections.telegram.status,
      connected: connections.telegram.connected,
      lastSync: 'Never'
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      description: 'Monitor tweets and engage with potential customers',
      icon: '⚫',
      features: ['Tweet monitoring', 'Reply posting', 'DM capabilities', 'Hashtag tracking'],
      status: connections.twitter.status,
      connected: connections.twitter.connected,
      lastSync: '1 hour ago'
    }
  ];

  const webhooks = [
    { name: 'New Lead Alert', url: 'https://your-app.com/webhook/leads', status: 'active' },
    { name: 'Campaign Complete', url: 'https://your-app.com/webhook/campaigns', status: 'active' },
    { name: 'Error Notifications', url: 'https://your-app.com/webhook/errors', status: 'inactive' }
  ];

  const apiKeys = [
    { name: 'Production API Key', key: 'dk_live_...', created: '2024-01-01', lastUsed: '2 hours ago' },
    { name: 'Development API Key', key: 'dk_test_...', created: '2024-01-10', lastUsed: '1 day ago' }
  ];

  const toggleConnection = (platformId: string) => {
    setConnections(prev => ({
      ...prev,
      [platformId]: {
        ...prev[platformId],
        connected: !prev[platformId].connected,
        status: !prev[platformId].connected ? 'active' : 'inactive'
      }
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600';
      case 'limited': return 'text-yellow-600';
      case 'inactive': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'limited': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'inactive': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Integrations</h1>
          <p className="text-muted-foreground mt-2">Connect platforms and manage API access</p>
        </div>
        <Button className="btn-primary">
          <Settings className="w-4 h-4 mr-2" />
          Integration Settings
        </Button>
      </div>

      <Tabs defaultValue="platforms" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="platforms">Platform Connections</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms" className="space-y-6">
          {/* Connection Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="card-elegant">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Connected</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-elegant">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-elegant">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Limited</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-elegant">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Inactive</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.id} className="card-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{platform.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{platform.name}</CardTitle>
                        <CardDescription>{platform.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(platform.status)}
                      <Switch
                        checked={platform.connected}
                        onCheckedChange={() => toggleConnection(platform.id)}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status:</span>
                    <Badge variant={platform.status === 'active' ? 'default' : 'secondary'}>
                      {platform.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Last Sync:</span>
                    <span className="text-sm text-muted-foreground">{platform.lastSync}</span>
                  </div>

                  <div>
                    <span className="text-sm font-medium mb-2 block">Features:</span>
                    <div className="grid grid-cols-2 gap-1">
                      {platform.features.map((feature, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Configure
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Webhook Endpoints</CardTitle>
              <CardDescription>
                Configure webhooks to receive real-time notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {webhooks.map((webhook, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{webhook.name}</span>
                      <Badge variant={webhook.status === 'active' ? 'default' : 'secondary'}>
                        {webhook.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">{webhook.url}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Test</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                    <Switch checked={webhook.status === 'active'} />
                  </div>
                </div>
              ))}
              
              <Button className="w-full btn-primary mt-4">
                Add New Webhook
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                API Keys
              </CardTitle>
              <CardDescription>
                Manage your API keys for external integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {apiKeys.map((apiKey, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{apiKey.name}</span>
                      <Badge variant="outline">
                        <Shield className="w-3 h-3 mr-1" />
                        Secure
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">{apiKey.key}</p>
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      <span>Created: {apiKey.created}</span>
                      <span>Last used: {apiKey.lastUsed}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Copy</Button>
                    <Button variant="outline" size="sm">Regenerate</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </div>
              ))}
              
              <Button className="w-full btn-primary mt-4">
                Generate New API Key
              </Button>
            </CardContent>
          </Card>

          {/* API Documentation */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>
                Learn how to integrate with DesiLeads API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Base URL</h4>
                  <code className="text-sm">https://api.desileads.com/v1</code>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-border/50 rounded-lg">
                    <h4 className="font-medium mb-2">Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Include your API key in the Authorization header
                    </p>
                  </div>
                  <div className="p-4 border border-border/50 rounded-lg">
                    <h4 className="font-medium mb-2">Rate Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      1000 requests per hour for paid plans
                    </p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Integrations;