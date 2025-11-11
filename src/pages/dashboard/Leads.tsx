"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mockApi, Lead } from "@/lib/mock-api";
import {
  Search,
  Filter,
  ExternalLink,
  MessageSquare,
  Eye,
  Archive,
  Sparkles,
  Clock,
  TrendingUp,
  User,
  Calendar,
  Globe,
} from "lucide-react";

const Leads: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isGeneratingReply, setIsGeneratingReply] = useState(false);
  const [generatedReply, setGeneratedReply] = useState("");
  const [customReply, setCustomReply] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await mockApi.getLeads();
        setLeads(data);
      } catch (error) {
        console.error("Failed to fetch leads:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleGenerateReply = async (leadId: string) => {
    setIsGeneratingReply(true);
    try {
      const reply = await mockApi.generateReply(leadId);
      setGeneratedReply(reply);
      setCustomReply(reply);
    } catch (error) {
      console.error("Failed to generate reply:", error);
    } finally {
      setIsGeneratingReply(false);
    }
  };

  const handleExplainRelevance = (lead: Lead) => {
    // Mock explanation of why this lead is relevant
    alert(`This lead is relevant because:
    
1. The user is asking about "${lead.title.toLowerCase()}"
2. Their post mentions keywords that match your campaign
3. They have ${lead.karma} karma, indicating an active user
4. Confidence score: ${lead.confidenceScore}% based on context analysis
5. Platform: ${lead.platform} - good for organic engagement`);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || lead.status === statusFilter;
    const matchesPlatform =
      platformFilter === "all" || lead.platform === platformFilter;

    return matchesSearch && matchesStatus && matchesPlatform;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "reviewed":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "replied":
        return "bg-green-100 text-green-800 border-green-200";
      case "archived":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "reddit":
        return "🔴";
      case "quora":
        return "🔵";
      case "telegram":
        return "✈️";
      case "x":
        return "❌";
      default:
        return "🌐";
    }
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted animate-pulse rounded" />
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
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
          <h1 className="text-3xl font-bold tracking-tight">Leads Inbox</h1>
          <p className="text-muted-foreground">
            Review and respond to potential customers found by AI
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-sm">
            {filteredLeads.filter((l) => l.status === "unread").length} unread
          </Badge>
          <Badge variant="outline" className="text-sm">
            {filteredLeads.length} total
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads by title, content, or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
            <SelectItem value="replied">Replied</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>

        <Select value={platformFilter} onValueChange={setPlatformFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Platforms</SelectItem>
            <SelectItem value="reddit">Reddit</SelectItem>
            <SelectItem value="quora">Quora</SelectItem>
            <SelectItem value="telegram">Telegram</SelectItem>
            <SelectItem value="x">X (Twitter)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Leads List */}
      {filteredLeads.length === 0 ? (
        <Card className="card-elegant">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No leads found</h3>
            <p className="text-muted-foreground text-center">
              {searchTerm || statusFilter !== "all" || platformFilter !== "all"
                ? "Try adjusting your filters"
                : "Your AI is scanning for leads. Check back soon!"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <Card
              key={lead.id}
              className="card-elegant hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {getPlatformIcon(lead.platform)}
                      </span>
                      <CardTitle className="text-lg line-clamp-2">
                        {lead.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{lead.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{lead.karma} karma</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(lead.status)}>
                      {lead.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={getConfidenceColor(lead.confidenceScore)}
                    >
                      {lead.confidenceScore}% match
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="line-clamp-3 leading-relaxed">
                  {lead.content}
                </CardDescription>

                {lead.aiReply && (
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">
                        AI Generated Reply
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {lead.aiReply}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleExplainRelevance(lead)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Explain Relevance
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedLead(lead)}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Generate Reply
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Generate AI Reply</DialogTitle>
                        <DialogDescription>
                          Create a personalized response for this lead
                        </DialogDescription>
                      </DialogHeader>

                      {selectedLead && (
                        <div className="space-y-4">
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <h4 className="font-medium mb-2">
                              {selectedLead.title}
                            </h4>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {selectedLead.content}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-sm font-medium">
                                AI Generated Reply
                              </label>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleGenerateReply(selectedLead.id)
                                }
                                disabled={isGeneratingReply}
                              >
                                <Sparkles className="mr-2 h-4 w-4" />
                                {isGeneratingReply
                                  ? "Generating..."
                                  : "Regenerate"}
                              </Button>
                            </div>
                            <Textarea
                              value={customReply}
                              onChange={(e) => setCustomReply(e.target.value)}
                              placeholder="AI will generate a reply here..."
                              rows={6}
                            />
                          </div>

                          <div className="flex justify-between">
                            <Button variant="outline" asChild>
                              <a
                                href={selectedLead.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Original Post
                              </a>
                            </Button>
                            <div className="space-x-2">
                              <Button variant="outline">Save to Queue</Button>
                              <Button className="btn-primary">
                                Post Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={lead.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Post
                    </a>
                  </Button>

                  <Button variant="ghost" size="sm">
                    <Archive className="mr-2 h-4 w-4" />
                    Archive
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Load More */}
      {filteredLeads.length > 0 && (
        <div className="text-center">
          <Button variant="outline">Load More Leads</Button>
        </div>
      )}
    </div>
  );
};

export default Leads;
