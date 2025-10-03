// Mock API for DesiLeads - Comprehensive data and endpoints

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'growth' | 'pro';
  credits: number;
  createdAt: string;
  isActive: boolean;
  role?: 'user' | 'admin';
}

export interface Campaign {
  id: string;
  name: string;
  productDescription: string;
  platforms: ('reddit' | 'quora' | 'telegram' | 'x')[];
  keywords: string[];
  language: 'en' | 'hinglish' | 'hindi' | 'tamil';
  safeMode: boolean;
  status: 'active' | 'paused' | 'draft';
  createdAt: string;
  leadsFound: number;
  repliesGenerated: number;
}

export interface Lead {
  id: string;
  campaignId: string;
  platform: 'reddit' | 'quora' | 'telegram' | 'x';
  title: string;
  content: string;
  author: string;
  karma: number;
  confidenceScore: number;
  url: string;
  createdAt: string;
  status: 'unread' | 'reviewed' | 'replied' | 'archived';
  aiReply?: string;
}

export interface Template {
  id: string;
  name: string;
  category: 'hinglish' | 'cricket' | 'bollywood' | 'tech' | 'business';
  content: string;
  language: 'en' | 'hinglish' | 'hindi' | 'tamil';
  isViral: boolean;
  usageCount: number;
}

// Mock Data
export const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  name: 'Rahul Sharma',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  plan: 'growth',
  credits: 450,
  createdAt: '2024-01-15T00:00:00Z',
  isActive: true,
  role: 'user',
};

export const mockAdminUser: User = {
  id: '2',
  email: 'admin@example.com',
  name: 'Admin User',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  plan: 'pro',
  credits: 1000,
  createdAt: '2024-01-01T00:00:00Z',
  isActive: true,
  role: 'admin',
};

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'SaaS Tool Promotion',
    productDescription: 'AI-powered project management tool for Indian startups',
    platforms: ['reddit', 'quora'],
    keywords: ['project management', 'startup tools', 'productivity'],
    language: 'hinglish',
    safeMode: true,
    status: 'active',
    createdAt: '2024-01-20T00:00:00Z',
    leadsFound: 23,
    repliesGenerated: 8,
  },
  {
    id: '2',
    name: 'E-commerce Platform',
    productDescription: 'Shopify alternative for Indian merchants',
    platforms: ['reddit', 'x'],
    keywords: ['ecommerce', 'online store', 'shopify alternative'],
    language: 'en',
    safeMode: true,
    status: 'active',
    createdAt: '2024-01-18T00:00:00Z',
    leadsFound: 15,
    repliesGenerated: 5,
  },
];

export const mockLeads: Lead[] = [
  {
    id: '1',
    campaignId: '1',
    platform: 'reddit',
    title: 'Looking for a good project management tool for my startup',
    content: 'Hey everyone! I\'m running a small tech startup in Bangalore and we\'re struggling with project management. Currently using Trello but it\'s not cutting it. Need something more robust but not as complex as Jira. Any suggestions?',
    author: 'startup_founder_blr',
    karma: 1250,
    confidenceScore: 92,
    url: 'https://reddit.com/r/startups/comments/example1',
    createdAt: '2024-01-22T10:30:00Z',
    status: 'unread',
  },
  {
    id: '2',
    campaignId: '1',
    platform: 'quora',
    title: 'What are the best project management tools for Indian startups?',
    content: 'I\'m looking for project management software that works well for Indian teams. Budget is a concern, and we need something that can handle both technical and non-technical team members.',
    author: 'TechEntrepreneur2024',
    karma: 890,
    confidenceScore: 88,
    url: 'https://quora.com/question/example2',
    createdAt: '2024-01-22T09:15:00Z',
    status: 'reviewed',
    aiReply: 'Hey! I totally understand the struggle. Have you considered trying our AI-powered project management tool? It\'s specifically designed for Indian startups and offers a perfect balance between simplicity and powerful features. We have special pricing for early-stage companies. Would love to show you a quick demo if you\'re interested!',
  },
];

export const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Hinglish Casual Response',
    category: 'hinglish',
    content: 'Arre yaar, I totally get what you\'re going through! {product_mention} might be exactly what you need. It\'s been a game-changer for us. Want to check it out?',
    language: 'hinglish',
    isViral: true,
    usageCount: 156,
  },
  {
    id: '2',
    name: 'Cricket Analogy',
    category: 'cricket',
    content: 'Just like how Dhoni reads the game perfectly, {product_name} helps you read your business metrics. It\'s like having a captain\'s insight for your startup!',
    language: 'hinglish',
    isViral: true,
    usageCount: 89,
  },
  {
    id: '3',
    name: 'Professional Tech Response',
    category: 'tech',
    content: 'Based on your requirements, I\'d recommend checking out {product_name}. It addresses exactly the pain points you mentioned and has great reviews from the Indian startup community.',
    language: 'en',
    isViral: false,
    usageCount: 234,
  },
];

export const mockOverviewData = {
  dailyMetrics: {
    leadsFound: 12,
    repliesGenerated: 5,
    creditsUsed: 25,
    campaignsActive: 2,
  },
  weeklyStats: [
    { day: 'Mon', leads: 8, replies: 3 },
    { day: 'Tue', leads: 12, replies: 5 },
    { day: 'Wed', leads: 15, replies: 7 },
    { day: 'Thu', leads: 10, replies: 4 },
    { day: 'Fri', leads: 18, replies: 8 },
    { day: 'Sat', leads: 6, replies: 2 },
    { day: 'Sun', leads: 9, replies: 4 },
  ],
  recentActivity: [
    { id: '1', type: 'lead_found', message: 'New lead found in r/startups', time: '2 minutes ago' },
    { id: '2', type: 'reply_generated', message: 'AI reply generated for Quora post', time: '15 minutes ago' },
    { id: '3', type: 'campaign_created', message: 'New campaign "E-commerce Platform" created', time: '1 hour ago' },
  ],
};

export const mockAdminData = {
  userMetrics: {
    totalUsers: 1247,
    activeUsers: 892,
    newSignups: 45,
    churnRate: 3.2,
  },
  revenue: {
    mrr: 125000, // in INR
    growth: 15.5,
    totalRevenue: 890000,
  },
  systemHealth: {
    uptime: 99.9,
    apiLatency: 120,
    errorRate: 0.1,
  },
  recentUsers: [
    { id: '1', name: 'Priya Patel', email: 'priya@example.com', plan: 'pro', joinedAt: '2024-01-22T08:00:00Z' },
    { id: '2', name: 'Arjun Singh', email: 'arjun@example.com', plan: 'growth', joinedAt: '2024-01-22T07:30:00Z' },
    { id: '3', name: 'Sneha Reddy', email: 'sneha@example.com', plan: 'free', joinedAt: '2024-01-22T07:00:00Z' },
  ],
};

// Mock API Functions
export const mockApi = {
  // Auth
  login: async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email === 'user@example.com' && password === 'password') {
      return { success: true, user: mockUser, token: 'mock-jwt-token' };
    }
    if (email === 'admin@example.com' && password === 'admin') {
      return { success: true, user: mockAdminUser, token: 'mock-admin-jwt-token' };
    }
    throw new Error('Invalid credentials');
  },

  signup: async (email: string, password: string, name: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { 
      success: true, 
      user: { ...mockUser, email, name }, 
      token: 'mock-jwt-token' 
    };
  },

  // Dashboard
  getOverview: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockOverviewData;
  },

  getCampaigns: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockCampaigns;
  },

  createCampaign: async (campaign: Omit<Campaign, 'id' | 'createdAt' | 'leadsFound' | 'repliesGenerated'>) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newCampaign: Campaign = {
      ...campaign,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      leadsFound: 0,
      repliesGenerated: 0,
    };
    return newCampaign;
  },

  getLeads: async (campaignId?: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return campaignId ? mockLeads.filter(lead => lead.campaignId === campaignId) : mockLeads;
  },

  generateReply: async (leadId: string, templateId?: string) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const templates = [
      "Hey! I totally understand your pain point. Have you considered trying our solution? It's specifically designed for Indian startups and might be exactly what you're looking for!",
      "Arre yaar, I've been in the same situation! Our tool has been a game-changer for us. Would love to show you how it works if you're interested.",
      "Based on your requirements, I think our platform could be a great fit. We have special pricing for early-stage companies. Want to check it out?"
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  },

  getTemplates: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockTemplates;
  },

  // Admin
  getAdminDashboard: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockAdminData;
  },

  getUsers: async (page = 1, limit = 10) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      users: mockAdminData.recentUsers,
      total: mockAdminData.userMetrics.totalUsers,
      page,
      limit,
    };
  },
};