import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertTriangle, Shield, Eye, Ban, CheckCircle, Flag, MessageSquare } from 'lucide-react';

const ContentModeration = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedContent, setSelectedContent] = useState<any>(null);

  const flaggedContent = [
    {
      id: 'FLAG-001',
      type: 'reply',
      content: 'Hey! Check out this amazing tool that helped me 10x my productivity. DM me for details!',
      user: 'Rajesh Kumar',
      platform: 'Reddit',
      subreddit: 'r/productivity',
      flagReason: 'Potential spam',
      severity: 'medium',
      status: 'pending',
      reportedBy: 'AutoMod',
      reportedAt: '2024-01-15 14:30',
      context: 'User asking about productivity tools'
    },
    {
      id: 'FLAG-002',
      type: 'comment',
      content: 'This is the best SaaS ever! Everyone should use it immediately! Link in bio!',
      user: 'Priya Sharma',
      platform: 'Quora',
      question: 'What are the best project management tools?',
      flagReason: 'Overly promotional',
      severity: 'high',
      status: 'pending',
      reportedBy: 'User Report',
      reportedAt: '2024-01-15 12:15',
      context: 'Answer about project management tools'
    },
    {
      id: 'FLAG-003',
      type: 'message',
      content: 'Join our exclusive group for insider tips! Limited time offer!',
      user: 'Amit Patel',
      platform: 'Telegram',
      channel: 'Startup India',
      flagReason: 'Suspicious activity',
      severity: 'high',
      status: 'reviewed',
      action: 'approved',
      reportedBy: 'AI Detection',
      reportedAt: '2024-01-15 10:45',
      context: 'Message in startup discussion'
    },
    {
      id: 'FLAG-004',
      type: 'tweet',
      content: 'OMG this tool is life-changing! Get 50% off now! #ad #sponsored',
      user: 'Sneha Reddy',
      platform: 'X (Twitter)',
      hashtags: '#productivity #tools',
      flagReason: 'Missing disclosure',
      severity: 'low',
      status: 'reviewed',
      action: 'rejected',
      reportedBy: 'Manual Review',
      reportedAt: '2024-01-15 09:20',
      context: 'Promotional tweet'
    }
  ];

  const moderationRules = [
    {
      id: 'RULE-001',
      name: 'No Direct Links',
      description: 'Prevent posting direct product links in comments',
      platforms: ['Reddit', 'Quora'],
      severity: 'high',
      active: true,
      triggers: 15
    },
    {
      id: 'RULE-002',
      name: 'Promotional Language Detection',
      description: 'Flag overly promotional language and sales pitches',
      platforms: ['All'],
      severity: 'medium',
      active: true,
      triggers: 42
    },
    {
      id: 'RULE-003',
      name: 'Spam Pattern Recognition',
      description: 'Detect repetitive posting patterns',
      platforms: ['All'],
      severity: 'high',
      active: true,
      triggers: 8
    },
    {
      id: 'RULE-004',
      name: 'Disclosure Requirements',
      description: 'Ensure proper disclosure for sponsored content',
      platforms: ['X (Twitter)', 'Instagram'],
      severity: 'medium',
      active: false,
      triggers: 3
    }
  ];

  const filteredContent = flaggedContent.filter(content => {
    return filterStatus === 'all' || content.status === filterStatus;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'reviewed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'escalated': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const handleModeration = (contentId: string, action: 'approve' | 'reject' | 'escalate') => {
    // In a real app, this would make an API call
    console.log(`${action} content ${contentId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Content Moderation</h1>
          <p className="text-muted-foreground mt-2">Review and moderate flagged content</p>
        </div>
        <Button className="btn-primary">
          <Shield className="w-4 h-4 mr-2" />
          Moderation Settings
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Flag className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Priority</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Auto-Approved</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Rejected</p>
                <p className="text-2xl font-bold">42</p>
              </div>
              <Ban className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="flagged" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="flagged">Flagged Content</TabsTrigger>
          <TabsTrigger value="rules">Moderation Rules</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="flagged" className="space-y-6">
          {/* Filters */}
          <Card className="card-elegant">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reviewed">Reviewed</SelectItem>
                    <SelectItem value="escalated">Escalated</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search content..." className="flex-1" />
              </div>
            </CardContent>
          </Card>

          {/* Flagged Content List */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Flagged Content ({filteredContent.length})</CardTitle>
              <CardDescription>
                Review content that has been flagged by automated systems or users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredContent.map((content) => (
                  <div key={content.id} className="border border-border/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{content.id}</Badge>
                          <Badge className={getSeverityColor(content.severity)}>
                            {content.severity} priority
                          </Badge>
                          <Badge className={getStatusColor(content.status)}>
                            {content.status}
                          </Badge>
                          <Badge variant="outline">{content.platform}</Badge>
                        </div>
                        
                        <div className="bg-muted/50 rounded p-3 mb-3">
                          <p className="text-sm">{content.content}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">User:</span> {content.user}
                          </div>
                          <div>
                            <span className="font-medium">Platform:</span> {content.platform}
                          </div>
                          <div>
                            <span className="font-medium">Flag Reason:</span> {content.flagReason}
                          </div>
                          <div>
                            <span className="font-medium">Reported By:</span> {content.reportedBy}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">
                        Reported: {content.reportedAt}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Content Review - {content.id}</DialogTitle>
                              <DialogDescription>
                                Detailed view of flagged content for moderation
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">Content</h4>
                                <div className="bg-muted/50 rounded p-3">
                                  <p className="text-sm">{content.content}</p>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-medium mb-2">Context</h4>
                                <p className="text-sm text-muted-foreground">{content.context}</p>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium mb-2">User Information</h4>
                                  <div className="space-y-1 text-sm">
                                    <p><span className="font-medium">Name:</span> {content.user}</p>
                                    <p><span className="font-medium">Platform:</span> {content.platform}</p>
                                    <p><span className="font-medium">Account Age:</span> 6 months</p>
                                    <p><span className="font-medium">Previous Flags:</span> 2</p>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium mb-2">Flag Details</h4>
                                  <div className="space-y-1 text-sm">
                                    <p><span className="font-medium">Reason:</span> {content.flagReason}</p>
                                    <p><span className="font-medium">Severity:</span> {content.severity}</p>
                                    <p><span className="font-medium">Reported By:</span> {content.reportedBy}</p>
                                    <p><span className="font-medium">Date:</span> {content.reportedAt}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-medium mb-2">Moderation Notes</h4>
                                <Textarea placeholder="Add your moderation notes here..." rows={3} />
                              </div>
                              
                              <div className="flex gap-2">
                                <Button 
                                  className="btn-primary"
                                  onClick={() => handleModeration(content.id, 'approve')}
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Approve
                                </Button>
                                <Button 
                                  variant="destructive"
                                  onClick={() => handleModeration(content.id, 'reject')}
                                >
                                  <Ban className="w-4 h-4 mr-2" />
                                  Reject
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => handleModeration(content.id, 'escalate')}
                                >
                                  <AlertTriangle className="w-4 h-4 mr-2" />
                                  Escalate
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        {content.status === 'pending' && (
                          <>
                            <Button 
                              size="sm" 
                              className="btn-primary"
                              onClick={() => handleModeration(content.id, 'approve')}
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleModeration(content.id, 'reject')}
                            >
                              <Ban className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Moderation Rules</CardTitle>
              <CardDescription>
                Configure automated moderation rules and policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moderationRules.map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{rule.name}</h4>
                        <Badge className={getSeverityColor(rule.severity)}>
                          {rule.severity}
                        </Badge>
                        <Badge variant={rule.active ? 'default' : 'secondary'}>
                          {rule.active ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{rule.description}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Platforms: {rule.platforms.join(', ')}</span>
                        <span>Triggers this month: {rule.triggers}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">
                        {rule.active ? 'Disable' : 'Enable'}
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full btn-primary mt-4">
                  Add New Rule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Moderation Activity</CardTitle>
                <CardDescription>
                  Daily moderation actions and trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Today</span>
                    <span className="font-bold">23 reviews</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Yesterday</span>
                    <span className="font-bold">31 reviews</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">This Week</span>
                    <span className="font-bold">187 reviews</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">This Month</span>
                    <span className="font-bold">742 reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Action Distribution</CardTitle>
                <CardDescription>
                  Breakdown of moderation decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Approved</span>
                    </div>
                    <span className="font-bold">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">Rejected</span>
                    </div>
                    <span className="font-bold">24%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium">Escalated</span>
                    </div>
                    <span className="font-bold">8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentModeration;