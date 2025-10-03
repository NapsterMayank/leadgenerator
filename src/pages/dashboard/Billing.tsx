import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Download, Calendar, Zap, Crown, Gift, AlertCircle, CheckCircle } from 'lucide-react';

const Billing = () => {
  const [currentPlan] = useState('growth');

  const plans = [
    {
      id: 'free',
      name: 'Free Trial',
      price: '₹0',
      period: '/month',
      features: [
        '50 leads per month',
        '1 active campaign',
        'Basic templates',
        'Email support'
      ],
      current: false
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '₹799',
      period: '/month',
      features: [
        '500 leads per month',
        '5 active campaigns',
        'Premium templates',
        'Priority support',
        'Analytics dashboard',
        'API access'
      ],
      current: true,
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '₹2,499',
      period: '/month',
      features: [
        'Unlimited leads',
        'Unlimited campaigns',
        'Custom templates',
        '24/7 phone support',
        'Advanced analytics',
        'White-label option',
        'Team collaboration'
      ],
      current: false
    }
  ];

  const usage = {
    leads: { used: 342, total: 500, percentage: 68 },
    campaigns: { used: 3, total: 5, percentage: 60 },
    apiCalls: { used: 1250, total: 2000, percentage: 62 }
  };

  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-01',
      amount: '₹799',
      status: 'paid',
      plan: 'Growth Plan',
      downloadUrl: '#'
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-01',
      amount: '₹799',
      status: 'paid',
      plan: 'Growth Plan',
      downloadUrl: '#'
    },
    {
      id: 'INV-2023-011',
      date: '2023-11-01',
      amount: '₹799',
      status: 'paid',
      plan: 'Growth Plan',
      downloadUrl: '#'
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true
    },
    {
      id: 2,
      type: 'upi',
      upiId: 'user@paytm',
      isDefault: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Billing & Usage</h1>
          <p className="text-muted-foreground mt-2">Manage your subscription and usage</p>
        </div>
        <Button className="btn-primary">
          <Crown className="w-4 h-4 mr-2" />
          Upgrade Plan
        </Button>
      </div>

      {/* Current Plan Overview */}
      <Card className="card-elegant">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-primary" />
                Current Plan: Growth
              </CardTitle>
              <CardDescription>
                Your subscription renews on January 15, 2024
              </CardDescription>
            </div>
            <Badge className="bg-primary text-primary-foreground">Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Leads Used</span>
                <span className="text-sm text-muted-foreground">
                  {usage.leads.used} / {usage.leads.total}
                </span>
              </div>
              <Progress value={usage.leads.percentage} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Active Campaigns</span>
                <span className="text-sm text-muted-foreground">
                  {usage.campaigns.used} / {usage.campaigns.total}
                </span>
              </div>
              <Progress value={usage.campaigns.percentage} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">API Calls</span>
                <span className="text-sm text-muted-foreground">
                  {usage.apiCalls.used} / {usage.apiCalls.total}
                </span>
              </div>
              <Progress value={usage.apiCalls.percentage} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="plans" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="credits">Credits</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.id} className={`card-elegant relative ${plan.current ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.current ? 'btn-secondary' : 'btn-primary'}`}
                    disabled={plan.current}
                  >
                    {plan.current ? 'Current Plan' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Invoice History
              </CardTitle>
              <CardDescription>
                Download your past invoices and receipts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{invoice.id}</span>
                        <Badge variant={invoice.status === 'paid' ? 'default' : 'secondary'}>
                          {invoice.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{invoice.plan}</p>
                      <p className="text-xs text-muted-foreground">{invoice.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">{invoice.amount}</span>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Methods
              </CardTitle>
              <CardDescription>
                Manage your payment methods for subscriptions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-primary rounded flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {method.type === 'card' 
                            ? `${method.brand} •••• ${method.last4}`
                            : method.upiId
                          }
                        </span>
                        {method.isDefault && (
                          <Badge variant="outline">Default</Badge>
                        )}
                      </div>
                      {method.type === 'card' && (
                        <p className="text-sm text-muted-foreground">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!method.isDefault && (
                      <Button variant="outline" size="sm">
                        Set Default
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button className="w-full btn-primary">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="credits" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Credit Balance
                </CardTitle>
                <CardDescription>
                  Your current credit balance and usage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2,450</div>
                  <p className="text-sm text-muted-foreground">Available Credits</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>This month used:</span>
                    <span>1,250 credits</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Expires on:</span>
                    <span>March 15, 2024</span>
                  </div>
                </div>
                
                <Button className="w-full btn-primary">
                  <Gift className="w-4 h-4 mr-2" />
                  Buy More Credits
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Referral Program
                </CardTitle>
                <CardDescription>
                  Earn credits by referring friends
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">₹1,200</div>
                  <p className="text-sm text-muted-foreground">Earned from referrals</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Successful referrals:</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pending referrals:</span>
                    <span>2</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Share Referral Link
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Credit History */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Credit History</CardTitle>
              <CardDescription>
                Track your credit transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { type: 'earned', amount: '+500', description: 'Referral bonus - John Doe signup', date: '2024-01-10' },
                  { type: 'used', amount: '-250', description: 'Lead generation - Reddit campaign', date: '2024-01-09' },
                  { type: 'purchased', amount: '+1000', description: 'Credit purchase', date: '2024-01-05' },
                  { type: 'used', amount: '-150', description: 'AI reply generation', date: '2024-01-03' }
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        transaction.type === 'earned' ? 'bg-green-500' :
                        transaction.type === 'used' ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div>
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <span className={`font-medium ${
                      transaction.type === 'earned' ? 'text-green-600' :
                      transaction.type === 'used' ? 'text-red-600' :
                      'text-blue-600'
                    }`}>
                      {transaction.amount}
                    </span>
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

export default Billing;