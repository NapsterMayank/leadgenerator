import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageSquare, Clock, User, AlertCircle, CheckCircle, Send, Search, Filter } from 'lucide-react';

const Support = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const supportTickets = [
    {
      id: 'TICK-001',
      title: 'Unable to connect Reddit account',
      description: 'Getting authentication error when trying to connect Reddit account for lead monitoring',
      user: {
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@example.com',
        plan: 'Growth',
        avatar: null
      },
      status: 'open',
      priority: 'high',
      category: 'Integration',
      createdAt: '2024-01-15 14:30',
      lastReply: '2024-01-15 15:45',
      assignedTo: 'Priya Sharma',
      messages: [
        {
          id: 1,
          sender: 'Rajesh Kumar',
          type: 'user',
          content: 'Hi, I\'m having trouble connecting my Reddit account. It keeps showing an authentication error.',
          timestamp: '2024-01-15 14:30'
        },
        {
          id: 2,
          sender: 'Priya Sharma',
          type: 'agent',
          content: 'Hi Rajesh! I\'ll help you with this. Can you please share the exact error message you\'re seeing?',
          timestamp: '2024-01-15 15:45'
        }
      ]
    },
    {
      id: 'TICK-002',
      title: 'Billing issue - Double charged',
      description: 'I was charged twice for my Pro plan subscription this month',
      user: {
        name: 'Sneha Reddy',
        email: 'sneha.reddy@marketing.co',
        plan: 'Pro',
        avatar: null
      },
      status: 'in-progress',
      priority: 'high',
      category: 'Billing',
      createdAt: '2024-01-15 12:15',
      lastReply: '2024-01-15 16:20',
      assignedTo: 'Amit Patel',
      messages: [
        {
          id: 1,
          sender: 'Sneha Reddy',
          type: 'user',
          content: 'I noticed I was charged twice for my Pro plan this month. Can you please help resolve this?',
          timestamp: '2024-01-15 12:15'
        },
        {
          id: 2,
          sender: 'Amit Patel',
          type: 'agent',
          content: 'I\'m looking into this right away. I can see the duplicate charge and will process a refund within 24 hours.',
          timestamp: '2024-01-15 16:20'
        }
      ]
    },
    {
      id: 'TICK-003',
      title: 'Feature request - Tamil language support',
      description: 'Would like to see Tamil language templates and AI responses',
      user: {
        name: 'Vikram Singh',
        email: 'vikram.singh@startup.in',
        plan: 'Growth',
        avatar: null
      },
      status: 'resolved',
      priority: 'medium',
      category: 'Feature Request',
      createdAt: '2024-01-14 10:30',
      lastReply: '2024-01-15 09:15',
      assignedTo: 'Priya Sharma',
      messages: [
        {
          id: 1,
          sender: 'Vikram Singh',
          type: 'user',
          content: 'Hi, I\'d love to see Tamil language support for templates and AI responses. This would help me target Tamil-speaking audiences better.',
          timestamp: '2024-01-14 10:30'
        },
        {
          id: 2,
          sender: 'Priya Sharma',
          type: 'agent',
          content: 'Great suggestion! I\'ve added this to our product roadmap. We\'re planning to add Tamil support in Q2 2024.',
          timestamp: '2024-01-15 09:15'
        }
      ]
    },
    {
      id: 'TICK-004',
      title: 'AI responses not generating',
      description: 'The AI reply generation feature is not working for my campaigns',
      user: {
        name: 'Anita Desai',
        email: 'anita.desai@techcorp.com',
        plan: 'Pro',
        avatar: null
      },
      status: 'open',
      priority: 'medium',
      category: 'Technical',
      createdAt: '2024-01-15 11:45',
      lastReply: '2024-01-15 11:45',
      assignedTo: null,
      messages: [
        {
          id: 1,
          sender: 'Anita Desai',
          type: 'user',
          content: 'The AI reply generation is not working for any of my campaigns. The button just shows loading but nothing happens.',
          timestamp: '2024-01-15 11:45'
        }
      ]
    }
  ];

  const supportAgents = [
    { name: 'Priya Sharma', role: 'Senior Support Agent', activeTickets: 8, avatar: null },
    { name: 'Amit Patel', role: 'Billing Specialist', activeTickets: 5, avatar: null },
    { name: 'Ravi Kumar', role: 'Technical Support', activeTickets: 12, avatar: null },
    { name: 'Kavya Nair', role: 'Customer Success', activeTickets: 6, avatar: null }
  ];

  const supportStats = {
    totalTickets: 156,
    openTickets: 23,
    inProgressTickets: 12,
    resolvedToday: 18,
    avgResponseTime: '2h 15m',
    customerSatisfaction: 4.8
  };

  const filteredTickets = supportTickets.filter(ticket => {
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Support Center</h1>
          <p className="text-muted-foreground mt-2">Manage customer support tickets and inquiries</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <MessageSquare className="w-4 h-4 mr-2" />
              Create Ticket
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Support Ticket</DialogTitle>
              <DialogDescription>
                Create a new support ticket for internal issues
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Brief description of the issue" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="integration">Integration</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Detailed description of the issue" rows={4} />
              </div>
              <div className="flex gap-2">
                <Button className="btn-primary">Create Ticket</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="card-elegant">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Total Tickets</p>
                <p className="text-xl font-bold">{supportStats.totalTickets}</p>
              </div>
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Open</p>
                <p className="text-xl font-bold">{supportStats.openTickets}</p>
              </div>
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">In Progress</p>
                <p className="text-xl font-bold">{supportStats.inProgressTickets}</p>
              </div>
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Resolved Today</p>
                <p className="text-xl font-bold">{supportStats.resolvedToday}</p>
              </div>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Avg Response</p>
                <p className="text-xl font-bold">{supportStats.avgResponseTime}</p>
              </div>
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Satisfaction</p>
                <p className="text-xl font-bold">{supportStats.customerSatisfaction}</p>
              </div>
              <CheckCircle className="w-6 h-6 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tickets" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          <TabsTrigger value="agents">Support Agents</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-6">
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
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input placeholder="Search tickets..." className="flex-1" />
              </div>
            </CardContent>
          </Card>

          {/* Tickets List */}
          <div className="space-y-4">
            {filteredTickets.map((ticket) => (
              <Card key={ticket.id} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium">{ticket.title}</h3>
                        <Badge className={getStatusColor(ticket.status)}>
                          {ticket.status}
                        </Badge>
                        <Badge className={getPriorityColor(ticket.priority)}>
                          {ticket.priority}
                        </Badge>
                        <Badge variant="outline">{ticket.category}</Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">{ticket.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{ticket.user.name} ({ticket.user.plan})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Created: {ticket.createdAt}</span>
                        </div>
                        {ticket.assignedTo && (
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Assigned to: {ticket.assignedTo}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Ticket #{ticket.id} - {ticket.title}</DialogTitle>
                            <DialogDescription>
                              Support conversation with {ticket.user.name}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            {/* Ticket Info */}
                            <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                              <div>
                                <p className="text-sm font-medium">Customer</p>
                                <p className="text-sm text-muted-foreground">{ticket.user.name} ({ticket.user.email})</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Plan</p>
                                <p className="text-sm text-muted-foreground">{ticket.user.plan}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Status</p>
                                <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Priority</p>
                                <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                              </div>
                            </div>
                            
                            {/* Messages */}
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                              {ticket.messages.map((message) => (
                                <div key={message.id} className={`flex ${message.type === 'agent' ? 'justify-end' : 'justify-start'}`}>
                                  <div className={`max-w-[70%] p-3 rounded-lg ${
                                    message.type === 'agent' 
                                      ? 'bg-primary text-primary-foreground' 
                                      : 'bg-muted'
                                  }`}>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-sm font-medium">{message.sender}</span>
                                      <span className="text-xs opacity-70">{message.timestamp}</span>
                                    </div>
                                    <p className="text-sm">{message.content}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* Reply Form */}
                            <div className="space-y-3 border-t pt-4">
                              <Textarea placeholder="Type your reply..." rows={3} />
                              <div className="flex gap-2">
                                <Button className="btn-primary">
                                  <Send className="w-4 h-4 mr-2" />
                                  Send Reply
                                </Button>
                                <Select>
                                  <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Change Status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="open">Open</SelectItem>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="resolved">Resolved</SelectItem>
                                    <SelectItem value="closed">Closed</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      {!ticket.assignedTo && (
                        <Button size="sm" className="btn-primary">
                          Assign to Me
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="agents" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Support Team</CardTitle>
              <CardDescription>
                Manage support agents and their workload
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportAgents.map((agent, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={agent.avatar} />
                        <AvatarFallback>
                          {agent.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{agent.name}</h4>
                        <p className="text-sm text-muted-foreground">{agent.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{agent.activeTickets} active tickets</p>
                      <p className="text-sm text-muted-foreground">Workload: {agent.activeTickets > 10 ? 'High' : agent.activeTickets > 5 ? 'Medium' : 'Low'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Response Time Trends</CardTitle>
                <CardDescription>
                  Average response times over the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">This Week</span>
                    <span className="font-bold">2h 15m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Last Week</span>
                    <span className="font-bold">2h 45m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">This Month</span>
                    <span className="font-bold">2h 32m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Target</span>
                    <span className="font-bold text-green-600">2h 00m</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Ticket Categories</CardTitle>
                <CardDescription>
                  Distribution of support requests by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Technical</span>
                    </div>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Billing</span>
                    </div>
                    <span className="font-bold">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium">Integration</span>
                    </div>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">Feature Request</span>
                    </div>
                    <span className="font-bold">10%</span>
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

export default Support;