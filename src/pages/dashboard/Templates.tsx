import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { mockApi, Template } from '@/lib/mock-api';
import { 
  Search, 
  Filter, 
  Plus, 
  Copy, 
  Edit, 
  Star, 
  TrendingUp,
  FileText,
  Globe,
  Sparkles,
  Heart,
  MessageSquare
} from 'lucide-react';

const Templates: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [languageFilter, setLanguageFilter] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  // New template form state
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    category: 'hinglish' as Template['category'],
    content: '',
    language: 'hinglish' as Template['language'],
  });

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await mockApi.getTemplates();
        setTemplates(data);
      } catch (error) {
        console.error('Failed to fetch templates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const handleCopyTemplate = (template: Template) => {
    navigator.clipboard.writeText(template.content);
    // You could add a toast notification here
    alert('Template copied to clipboard!');
  };

  const handleUseTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || template.category === categoryFilter;
    const matchesLanguage = languageFilter === 'all' || template.language === languageFilter;
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hinglish':
        return '🇮🇳';
      case 'cricket':
        return '🏏';
      case 'bollywood':
        return '🎬';
      case 'tech':
        return '💻';
      case 'business':
        return '💼';
      default:
        return '📝';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hinglish':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'cricket':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'bollywood':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'tech':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'business':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLanguageFlag = (language: string) => {
    switch (language) {
      case 'en':
        return '🇺🇸';
      case 'hinglish':
        return '🇮🇳';
      case 'hindi':
        return '🇮🇳';
      case 'tamil':
        return '🇮🇳';
      default:
        return '🌐';
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Template Library</h1>
          <p className="text-muted-foreground">
            Browse viral templates and create custom responses for better engagement
          </p>
        </div>
        
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="btn-primary">
              <Plus className="mr-2 h-4 w-4" />
              Create Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create Custom Template</DialogTitle>
              <DialogDescription>
                Create a new template for your lead generation campaigns
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Template Name</label>
                <Input
                  placeholder="e.g., Casual Hinglish Response"
                  value={newTemplate.name}
                  onChange={(e) => setNewTemplate(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select 
                    value={newTemplate.category} 
                    onValueChange={(value) => setNewTemplate(prev => ({ ...prev, category: value as any }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hinglish">Hinglish</SelectItem>
                      <SelectItem value="cricket">Cricket</SelectItem>
                      <SelectItem value="bollywood">Bollywood</SelectItem>
                      <SelectItem value="tech">Tech</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Language</label>
                  <Select 
                    value={newTemplate.language} 
                    onValueChange={(value) => setNewTemplate(prev => ({ ...prev, language: value as any }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hinglish">Hinglish</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Template Content</label>
                <Textarea
                  placeholder="Write your template here. Use {product_name} and {product_mention} as placeholders..."
                  value={newTemplate.content}
                  onChange={(e) => setNewTemplate(prev => ({ ...prev, content: e.target.value }))}
                  rows={6}
                />
                <p className="text-xs text-muted-foreground">
                  Use placeholders like {'{product_name}'}, {'{product_mention}'}, {'{user_name}'} for dynamic content
                </p>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  className="btn-primary"
                  disabled={!newTemplate.name || !newTemplate.content}
                >
                  Create Template
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="hinglish">Hinglish</SelectItem>
            <SelectItem value="cricket">Cricket</SelectItem>
            <SelectItem value="bollywood">Bollywood</SelectItem>
            <SelectItem value="tech">Tech</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>

        <Select value={languageFilter} onValueChange={setLanguageFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Languages</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="hinglish">Hinglish</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="tamil">Tamil</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Featured Templates */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Viral Templates</h2>
          <Badge className="bg-gradient-primary text-white">
            High Engagement
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates
            .filter(template => template.isViral)
            .slice(0, 3)
            .map((template) => (
              <Card key={template.id} className="card-elegant hover:shadow-glow transition-all duration-300 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getCategoryIcon(template.category)}</span>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getCategoryColor(template.category)}>
                          {template.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Globe className="mr-1 h-3 w-3" />
                          {getLanguageFlag(template.language)} {template.language}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-4 leading-relaxed">
                    {template.content}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{template.usageCount} uses</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>Viral</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleCopyTemplate(template)}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 btn-primary"
                      onClick={() => handleUseTemplate(template)}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Use
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* All Templates */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">All Templates</h2>
        
        {filteredTemplates.length === 0 ? (
          <Card className="card-elegant">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No templates found</h3>
              <p className="text-muted-foreground text-center mb-4">
                {searchTerm || categoryFilter !== 'all' || languageFilter !== 'all' 
                  ? 'Try adjusting your filters' 
                  : 'Create your first custom template'}
              </p>
              {!searchTerm && categoryFilter === 'all' && languageFilter === 'all' && (
                <Button className="btn-primary" onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Template
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="card-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getCategoryIcon(template.category)}</span>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        {template.isViral && <Star className="h-4 w-4 text-primary" />}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getCategoryColor(template.category)}>
                          {template.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Globe className="mr-1 h-3 w-3" />
                          {getLanguageFlag(template.language)} {template.language}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-4 leading-relaxed">
                    {template.content}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{template.usageCount} uses</span>
                    </div>
                    {template.isViral && (
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>Viral</span>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleCopyTemplate(template)}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 btn-primary"
                      onClick={() => handleUseTemplate(template)}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Use
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Template Usage Dialog */}
      {selectedTemplate && (
        <Dialog open={!!selectedTemplate} onOpenChange={() => setSelectedTemplate(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Use Template: {selectedTemplate.name}</DialogTitle>
              <DialogDescription>
                Customize this template for your specific use case
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Original Template</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedTemplate.content}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Customize Template</label>
                <Textarea
                  defaultValue={selectedTemplate.content}
                  placeholder="Customize the template for your needs..."
                  rows={6}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setSelectedTemplate(null)}>
                  Cancel
                </Button>
                <Button className="btn-primary">
                  Save Customized Template
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Templates;