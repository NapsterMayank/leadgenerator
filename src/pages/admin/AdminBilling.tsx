import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CreditCard, TrendingUp, Users, DollarSign, Download, RefreshCw, AlertCircle } from 'lucide-react';

const AdminBilling = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [refundAmount, setRefundAmount] = useState('');
  const [refundReason, setRefundReason] = useState('');

  const billingStats = {
    mrr: 2450000, // Monthly Recurring Revenue in paise
    arr: 29400000, // Annual Recurring Revenue in paise
    totalUsers: 1247,
    paidUsers: 892,
    churnRate: 3.2,
    avgRevenuePerUser: 2748
  };

  const recentTransactions = [
    {
      id: 'TXN-2024-001',
      user: 'Rajesh Kumar',
      email: 'rajesh.kumar@example.com',
      amount: 79900, // in paise
      plan: 'Growth',
      status: 'completed',
      date: '2024-01-15 14:30',
      paymentMethod: 'UPI'
    },
    {
      id: 'TXN-2024-002',
      user: 'Priya Sharma',
      email: 'priya.sharma@startup.com',
      amount: 249900,
      plan: 'Pro',
      status: 'completed',
      date: '2024-01-15 12:15',
      paymentMethod: 'Card'
    },
    {
      id: 'TXN-2024-003',
      user: 'Amit Patel',
      email: 'amit.patel@techcorp.in',
      amount: 79900,
      plan: 'Growth',
      status: 'failed',
      date: '2024-01-15 10:45',
      paymentMethod: 'UPI'
    },
    {
      id: 'TXN-2024-004',
      user: 'Sneha Reddy',
      email: 'sneha.reddy@marketing.co',
      amount: 79900,
      plan: 'Growth',
      status: 'pending',
      date: '2024-01-15 09:20',
      paymentMethod: 'Card'
    }
  ];

  const subscriptions = [
    {
      id: 'SUB-001',
      user: 'Rajesh Kumar',
      plan: 'Growth',
      status: 'active',
      nextBilling: '2024-02-15',
      amount: 79900,
      startDate: '2024-01-15'
    },
    {
      id: 'SUB-002',
      user: 'Priya Sharma',
      plan: 'Pro',
      status: 'active',
      nextBilling: '2024-02-15',
      amount: 249900,
      startDate: '2023-12-15'
    },
    {
      id: 'SUB-003',
      user: 'Amit Patel',
      plan: 'Growth',
      status: 'cancelled',
      nextBilling: null,
      amount: 79900,
      startDate: '2024-01-10'
    }
  ];

  const refunds = [
    {
      id: 'REF-001',
      transactionId: 'TXN-2024-001',
      user: 'John Doe',
      amount: 79900,
      reason: 'Service not as expected',
      status: 'processed',
      date: '2024-01-14'
    },
    {
      id: 'REF-002',
      transactionId: 'TXN-2024-002',
      user: 'Jane Smith',
      amount: 249900,
      reason: 'Accidental purchase',
      status: 'pending',
      date: '2024-01-13'
    }
  ];

  const formatCurrency = (amountInPaise: number) => {
    return `₹${(amountInPaise / 100).toLocaleString('en-IN')}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'active':
      case 'processed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'failed':
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Billing Management</h1>
          <p className="text-muted-foreground mt-2">Monitor revenue, transactions, and subscriptions</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Recurring Revenue</p>
                <p className="text-2xl font-bold">{formatCurrency(billingStats.mrr)}</p>
                <p className="text-xs text-green-600">+12.5% from last month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Annual Recurring Revenue</p>
                <p className="text-2xl font-bold">{formatCurrency(billingStats.arr)}</p>
                <p className="text-xs text-green-600">+18.3% from last year</p>
              </div>
              <DollarSign className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Paid Users</p>
                <p className="text-2xl font-bold">{billingStats.paidUsers}</p>
                <p className="text-xs text-muted-foreground">of {billingStats.totalUsers} total</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Revenue Per User</p>
                <p className="text-2xl font-bold">{formatCurrency(billingStats.avgRevenuePerUser)}</p>
                <p className="text-xs text-red-600">-2.1% from last month</p>
              </div>
              <CreditCard className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="refunds">Refunds</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Latest payment transactions and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{transaction.id}</span>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{transaction.user} • {transaction.email}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date} • {transaction.paymentMethod}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(transaction.amount)}</p>
                      <p className="text-sm text-muted-foreground">{transaction.plan} Plan</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button variant="outline" size="sm">View</Button>
                      {transaction.status === 'completed' && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <RefreshCw className="w-4 h-4 mr-2" />
                              Refund
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Process Refund</DialogTitle>
                              <DialogDescription>
                                Refund transaction {transaction.id} for {transaction.user}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="refundAmount">Refund Amount</Label>
                                <Input
                                  id="refundAmount"
                                  placeholder={formatCurrency(transaction.amount)}
                                  value={refundAmount}
                                  onChange={(e) => setRefundAmount(e.target.value)}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="refundReason">Reason</Label>
                                <Select value={refundReason} onValueChange={setRefundReason}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select reason" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="duplicate">Duplicate charge</SelectItem>
                                    <SelectItem value="fraud">Fraudulent transaction</SelectItem>
                                    <SelectItem value="service">Service not delivered</SelectItem>
                                    <SelectItem value="customer">Customer request</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex gap-2">
                                <Button className="btn-primary">Process Refund</Button>
                                <Button variant="outline">Cancel</Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Active Subscriptions</CardTitle>
              <CardDescription>
                Manage user subscriptions and billing cycles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subscriptions.map((subscription) => (
                  <div key={subscription.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{subscription.id}</span>
                        <Badge className={getStatusColor(subscription.status)}>
                          {subscription.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{subscription.user}</p>
                      <p className="text-xs text-muted-foreground">
                        Started: {subscription.startDate}
                        {subscription.nextBilling && ` • Next billing: ${subscription.nextBilling}`}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(subscription.amount)}</p>
                      <p className="text-sm text-muted-foreground">{subscription.plan} Plan</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">
                        {subscription.status === 'active' ? 'Cancel' : 'Reactivate'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="refunds" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Refund Requests</CardTitle>
              <CardDescription>
                Process and track refund requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {refunds.map((refund) => (
                  <div key={refund.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{refund.id}</span>
                        <Badge className={getStatusColor(refund.status)}>
                          {refund.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{refund.user}</p>
                      <p className="text-xs text-muted-foreground">
                        Transaction: {refund.transactionId} • {refund.date}
                      </p>
                      <p className="text-xs text-muted-foreground">Reason: {refund.reason}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(refund.amount)}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button variant="outline" size="sm">View</Button>
                      {refund.status === 'pending' && (
                        <>
                          <Button size="sm" className="btn-primary">Approve</Button>
                          <Button variant="destructive" size="sm">Reject</Button>
                        </>
                      )}
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
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>
                  Monthly revenue growth and trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">January 2024</span>
                    <span className="font-bold">{formatCurrency(billingStats.mrr)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">December 2023</span>
                    <span className="font-bold">₹21,78,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">November 2023</span>
                    <span className="font-bold">₹19,45,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">October 2023</span>
                    <span className="font-bold">₹18,20,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Plan Distribution</CardTitle>
                <CardDescription>
                  Revenue breakdown by subscription plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium">Pro Plan</span>
                    </div>
                    <span className="font-bold">₹14,70,000 (60%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Growth Plan</span>
                    </div>
                    <span className="font-bold">₹9,80,000 (40%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-sm font-medium">Free Plan</span>
                    </div>
                    <span className="font-bold">₹0 (0%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Key Metrics
              </CardTitle>
              <CardDescription>
                Important billing and revenue metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">{billingStats.churnRate}%</p>
                  <p className="text-sm text-muted-foreground">Monthly Churn Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">71.5%</p>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">₹1,24,500</p>
                  <p className="text-sm text-muted-foreground">Customer Lifetime Value</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminBilling;