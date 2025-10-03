import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Plus, Edit, Trash2, Eye, Star, TrendingUp, Globe } from 'lucide-react';

const TemplateManagement = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const templates = [
    {
      id: 'TEMP-001',
      title: 'SaaS Product Introduction',
      category: 'Product Launch',
      language: 'Hinglish',
      content: 'Hey! Just discovered this amazing productivity tool that\'s been a game-changer for our team. Anyone else struggling with project management? 🚀',
      platforms: ['Reddit', 'Quora'],
      usage: 156,
      rating: 4.8,
      status: 'active',
      createdBy: 'Admin',
      createdAt: '2024-01-01',
      tags: ['productivity', 'saas', 'team-management']
    },
    {
      id: 'TEMP-002',
      title: 'Cricket Season Marketing',
      category: 'Seasonal',
      language: 'Hindi',
      content: 'क्रिकेट सीज़न शुरू हो गया है! जैसे टीम वर्क क्रिकेट में जरूरी है, वैसे ही business में भी। हमारा tool आपकी team को organize करने में मदद करता है। 🏏',
      platforms: ['Telegram', 'X (Twitter)'],
      usage: 89,
      rating: 4.6,
      status: 'active',
      createdBy: 'Content Team',
      createdAt: '2024-01-05',
      tags: ['cricket', 'teamwork', 'seasonal']
    },
    {
      id: 'TEMP-003',
      title: 'Startup Funding Discussion',
      category: 'Business',
      language: 'English',
      content: 'Raising funds for your startup? The right tools can make all the difference in showing traction to investors. Happy to share what worked for us!',
      platforms: ['Reddit', 'Quora'],
      usage: 234,
      rating: 4.9,
      status: 'active',
      createdBy: 'Admin',
      createdAt: '2023-12-20',
      tags: ['startup', 'funding', 'investors']
    },
    {
      id: 'TEMP-004',
      title: 'Diwali Special Offer',
      category: 'Promotional',
      language: 'Hinglish',
      content: 'Diwali ki shubhkamnayein! 🪔 Is festival season mein apne business ko bhi celebrate karte hain. Special discount available for Indian startups!',
      platforms: ['All'],
      usage: 67,
      rating: 4.3,
      status: 'inactive',
      createdBy: 'Marketing Team',
      createdAt: '2023-11-01',
      tags: ['diwali', 'festival', 'discount']
    }
  ];

  const categories = [
    { id: 'product-launch', name: 'Product Launch', count: 23 },
    { id: 'seasonal', name: 'Seasonal', count: 15 },
    { id: 'business', name: 'Business', count: 34 },
    { id: 'promotional', name: 'Promotional', count: 18 },
    { id: 'educational', name: 'Educational', count: 12 },
    { id: 'community', name: 'Community', count: 8 }
  ];

  const templateRequests = [
    {
      id: 'REQ-001',
      title: 'E-commerce Product Launch Template',
      description: 'Need templates for launching new products on e-commerce platforms',
      requestedBy: 'Rajesh Kumar',
      category: 'Product Launch',
      language: 'Hinglish',
      priority: 'high',
      status: 'pending',
      requestedAt: '2024-01-15'
    },
    {
      id: 'REQ-002',
      title: 'Regional Festival Templates',
      description: 'Templates for regional festivals like Onam, Durga Puja, etc.',
      requestedBy: 'Priya Sharma',
      category: 'Seasonal',
      language: 'Multi-language',
      priority: 'medium',
      status: 'in-progress',
      requestedAt: '2024-01-12'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = filterCategory === 'all' || template.category === filterCategory;
    const matchesLanguage = filterLanguage === 'all' || template.language === filterLanguage;
    return matchesCategory && matchesLanguage;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
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
          <h1 className="text-3xl font-bold text-gradient">Template Management</h1>
          <p className="text-muted-foreground mt-2">Manage viral templates and content library</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Create Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Template</DialogTitle>
              <DialogDescription>
                Add a new template to the viral content library
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Template Title</Label>
                  <Input id="title" placeholder="Enter template title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-launch">Product Launch</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="promotional">Promotional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="hinglish">Hinglish</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platforms">Target Platforms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platforms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="reddit">Reddit</SelectItem>
                      <SelectItem value="quora">Quora</SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="twitter">X (Twitter)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Template Content</Label>
                <Textarea 
                  id="content" 
                  placeholder="Enter your template content here..."
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="productivity, saas, startup" />
              </div>
              
              <div className="flex gap-2">
                <Button className="btn-primary">Create Template</Button>
                <Button variant="outline">Save as Draft</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Templates</p>
                <p className="text-2xl font-bold">110</p>
              </div>
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Templates</p>
                <p className="text-2xl font-bold">87</p>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Usage</p>
                <p className="text-2xl font-bold">2.4K</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold">4.7</p>
              </div>
              <Star className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          {/* Filters */}
          <Card className="card-elegant">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Product Launch">Product Launch</SelectItem>
                    <SelectItem value="Seasonal">Seasonal</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Promotional">Promotional</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filterLanguage} onValueChange={setFilterLanguage}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Languages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Hinglish">Hinglish</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input placeholder="Search templates..." className="flex-1" />
              </div>
            </CardContent>
          </Card>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="card-elegant">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {template.category} • {template.language}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(template.status)}>
                        {template.status}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{template.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded p-3">
                    <p className="text-sm">{template.content}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {template.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Used {template.usage} times</span>
                    <span>By {template.createdBy}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Template Categories</CardTitle>
              <CardDescription>
                Manage template categories and organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{category.name}</h4>
                      <p className="text-sm text-muted-foreground">{category.count} templates</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full btn-primary mt-4">
                  Add New Category
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Template Requests</CardTitle>
              <CardDescription>
                User requests for new templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {templateRequests.map((request) => (
                  <div key={request.id} className="border border-border/50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{request.title}</h4>
                          <Badge className={getPriorityColor(request.priority)}>
                            {request.priority}
                          </Badge>
                          <Badge variant="outline">{request.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{request.description}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Requested by: {request.requestedBy}</span>
                          <span>Category: {request.category}</span>
                          <span>Language: {request.language}</span>
                          <span>Date: {request.requestedAt}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="btn-primary">Create Template</Button>
                      <Button variant="outline" size="sm">Contact User</Button>
                      <Button variant="outline" size="sm">Mark Complete</Button>
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
                <CardTitle>Most Popular Templates</CardTitle>
                <CardDescription>
                  Templates with highest usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templates.slice(0, 5).map((template, index) => (
                    <div key={template.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-muted-foreground">#{index + 1}</span>
                        <div>
                          <p className="font-medium">{template.title}</p>
                          <p className="text-sm text-muted-foreground">{template.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{template.usage} uses</p>
                        <p className="text-sm text-muted-foreground">★ {template.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Language Distribution</CardTitle>
                <CardDescription>
                  Template usage by language
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">English</span>
                    </div>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium">Hinglish</span>
                    </div>
                    <span className="font-bold">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Hindi</span>
                    </div>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">Tamil</span>
                    </div>
                    <span className="font-bold">5%</span>
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

export default TemplateManagement;