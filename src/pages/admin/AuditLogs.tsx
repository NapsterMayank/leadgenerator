import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Shield, Download, Calendar as CalendarIcon, Filter, Search, Eye, AlertTriangle, User, Settings, CreditCard } from 'lucide-react';
import { format } from 'date-fns';

const AuditLogs = () => {
  const [filterAction, setFilterAction] = useState('all');
  const [filterUser, setFilterUser] = useState('all');
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined
  });
  const [searchTerm, setSearchTerm] = useState('');

  const auditLogs = [
    {
      id: 'LOG-001',
      timestamp: '2024-01-15 16:45:23',
      user: {
        name: 'Admin User',
        email: 'admin@desileads.com',
        role: 'Admin',
        avatar: null
      },
      action: 'user_credit_update',
      category: 'User Management',
      description: 'Added 1000 credits to user Rajesh Kumar',
      details: {
        targetUser: 'Rajesh Kumar',
        creditsBefore: 1450,
        creditsAfter: 2450,
        amount: 1000,
        reason: 'Customer support request'
      },
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      severity: 'medium',
      status: 'success'
    },
    {
      id: 'LOG-002',
      timestamp: '2024-01-15 15:30:12',
      user: {
        name: 'Priya Sharma',
        email: 'priya@desileads.com',
        role: 'Support Agent',
        avatar: null
      },
      action: 'user_account_suspend',
      category: 'User Management',
      description: 'Suspended user account for policy violation',
      details: {
        targetUser: 'Spam User',
        reason: 'Multiple spam reports',
        duration: 'Permanent',
        reportCount: 5
      },
      ipAddress: '192.168.1.101',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      severity: 'high',
      status: 'success'
    },
    {
      id: 'LOG-003',
      timestamp: '2024-01-15 14:15:45',
      user: {
        name: 'System',
        email: 'system@desileads.com',
        role: 'System',
        avatar: null
      },
      action: 'payment_processed',
      category: 'Billing',
      description: 'Payment processed for Pro plan subscription',
      details: {
        customer: 'Sneha Reddy',
        amount: 249900,
        plan: 'Pro',
        paymentMethod: 'UPI',
        transactionId: 'TXN-2024-001'
      },
      ipAddress: 'N/A',
      userAgent: 'System Process',
      severity: 'low',
      status: 'success'
    },
    {
      id: 'LOG-004',
      timestamp: '2024-01-15 13:22:18',
      user: {
        name: 'Amit Patel',
        email: 'amit@desileads.com',
        role: 'Admin',
        avatar: null
      },
      action: 'integration_config_update',
      category: 'System Configuration',
      description: 'Updated Reddit API rate limits',
      details: {
        service: 'Reddit API',
        settingChanged: 'Rate Limit',
        oldValue: 800,
        newValue: 1000,
        reason: 'Increased user demand'
      },
      ipAddress: '192.168.1.102',
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      severity: 'medium',
      status: 'success'
    },
    {
      id: 'LOG-005',
      timestamp: '2024-01-15 12:45:33',
      user: {
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@example.com',
        role: 'User',
        avatar: null
      },
      action: 'login_failed',
      category: 'Authentication',
      description: 'Failed login attempt - incorrect password',
      details: {
        attemptCount: 3,
        lockoutTriggered: false,
        location: 'Mumbai, India',
        device: 'Desktop'
      },
      ipAddress: '203.0.113.45',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      severity: 'low',
      status: 'failed'
    },
    {
      id: 'LOG-006',
      timestamp: '2024-01-15 11:30:22',
      user: {
        name: 'System',
        email: 'system@desileads.com',
        role: 'System',
        avatar: null
      },
      action: 'data_export',
      category: 'Data Management',
      description: 'User data export completed',
      details: {
        requestedBy: 'Vikram Singh',
        dataType: 'Personal Data',
        fileSize: '2.3 MB',
        format: 'JSON',
        downloadLink: 'https://exports.desileads.com/user-data-123.json'
      },
      ipAddress: 'N/A',
      userAgent: 'System Process',
      severity: 'medium',
      status: 'success'
    }
  ];

  const actionTypes = [
    { value: 'user_credit_update', label: 'Credit Update', count: 23 },
    { value: 'user_account_suspend', label: 'Account Suspension', count: 5 },
    { value: 'payment_processed', label: 'Payment Processed', count: 156 },
    { value: 'integration_config_update', label: 'Config Update', count: 12 },
    { value: 'login_failed', label: 'Failed Login', count: 89 },
    { value: 'data_export', label: 'Data Export', count: 34 }
  ];

  const users = [
    { value: 'admin@desileads.com', label: 'Admin User' },
    { value: 'priya@desileads.com', label: 'Priya Sharma' },
    { value: 'amit@desileads.com', label: 'Amit Patel' },
    { value: 'system@desileads.com', label: 'System' }
  ];

  const filteredLogs = auditLogs.filter(log => {
    const matchesAction = filterAction === 'all' || log.action === filterAction;
    const matchesUser = filterUser === 'all' || log.user.email === filterUser;
    const matchesSearch = searchTerm === '' || 
      log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesAction && matchesUser && matchesSearch;
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
      case 'success': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'User Management': return <User className="w-4 h-4" />;
      case 'Billing': return <CreditCard className="w-4 h-4" />;
      case 'System Configuration': return <Settings className="w-4 h-4" />;
      case 'Authentication': return <Shield className="w-4 h-4" />;
      case 'Data Management': return <Eye className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Audit Logs</h1>
          <p className="text-muted-foreground mt-2">Track all system activities and user actions</p>
        </div>
        <Button className="btn-primary">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                <p className="text-2xl font-bold">2,456</p>
              </div>
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Events</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Failed Actions</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Severity</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="logs" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="logs">Audit Logs</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="logs" className="space-y-6">
          {/* Filters */}
          <Card className="card-elegant">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex gap-2 flex-1">
                  <Select value={filterAction} onValueChange={setFilterAction}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="All Actions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Actions</SelectItem>
                      {actionTypes.map((action) => (
                        <SelectItem key={action.value} value={action.value}>
                          {action.label} ({action.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={filterUser} onValueChange={setFilterUser}>
                    <SelectTrigger className="w-48">
                      <User className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="All Users" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      {users.map((user) => (
                        <SelectItem key={user.value} value={user.value}>
                          {user.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-48">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Date Range
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search logs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logs List */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Audit Trail ({filteredLogs.length} events)</CardTitle>
              <CardDescription>
                Chronological record of all system activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredLogs.map((log) => (
                  <div key={log.id} className="border border-border/50 rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={log.user.avatar} />
                          <AvatarFallback>
                            {log.user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getCategoryIcon(log.category)}
                            <span className="font-medium">{log.description}</span>
                            <Badge className={getSeverityColor(log.severity)}>
                              {log.severity}
                            </Badge>
                            <Badge className={getStatusColor(log.status)}>
                              {log.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                            <div>
                              <span className="font-medium">User:</span> {log.user.name} ({log.user.role})
                            </div>
                            <div>
                              <span className="font-medium">Timestamp:</span> {log.timestamp}
                            </div>
                            <div>
                              <span className="font-medium">IP Address:</span> {log.ipAddress}
                            </div>
                            <div>
                              <span className="font-medium">Category:</span> {log.category}
                            </div>
                          </div>
                          
                          {/* Details */}
                          <div className="bg-muted/50 rounded p-3 text-sm">
                            <h4 className="font-medium mb-2">Event Details:</h4>
                            <div className="space-y-1">
                              {Object.entries(log.details).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                  <span className="font-medium">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
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
                <CardTitle>Activity by Category</CardTitle>
                <CardDescription>
                  Distribution of audit events by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">User Management</span>
                    </div>
                    <span className="font-bold">35%</span>
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
                      <span className="text-sm font-medium">Authentication</span>
                    </div>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">System Configuration</span>
                    </div>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">Data Management</span>
                    </div>
                    <span className="font-bold">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Security Events</CardTitle>
                <CardDescription>
                  Security-related audit events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Failed Login Attempts</span>
                    <span className="font-bold text-red-600">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Account Suspensions</span>
                    <span className="font-bold text-yellow-600">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Permission Changes</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Data Exports</span>
                    <span className="font-bold text-green-600">34</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Recent High-Severity Events</CardTitle>
              <CardDescription>
                Critical events requiring attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {auditLogs.filter(log => log.severity === 'high').map((log) => (
                  <div key={log.id} className="flex items-center gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <div className="flex-1">
                      <p className="font-medium">{log.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {log.user.name} • {log.timestamp}
                      </p>
                    </div>
                    <Badge className={getSeverityColor(log.severity)}>
                      {log.severity}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Audit Log Settings</CardTitle>
              <CardDescription>
                Configure audit logging preferences and retention policies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Log Retention</h4>
                  <Select defaultValue="90d">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30d">30 days</SelectItem>
                      <SelectItem value="90d">90 days</SelectItem>
                      <SelectItem value="1y">1 year</SelectItem>
                      <SelectItem value="forever">Forever</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Log Level</h4>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High severity only</SelectItem>
                      <SelectItem value="medium">Medium and above</SelectItem>
                      <SelectItem value="all">All events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Export Format</h4>
                  <Select defaultValue="json">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="xml">XML</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="btn-primary">Save Settings</Button>
                <Button variant="outline">Reset to Default</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuditLogs;