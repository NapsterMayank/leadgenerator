import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Settings as SettingsIcon, Zap, Shield, Globe, Clock, Bot, AlertTriangle } from 'lucide-react';

const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    autoApproval: false,
    safeMode: true,
    dailyLimit: 50,
    responseDelay: 30,
    language: 'en',
    timezone: 'Asia/Kolkata'
  });

  const [aiSettings, setAiSettings] = useState({
    creativity: 70,
    formality: 60,
    hinglishLevel: 40,
    includeEmojis: true,
    mentionBrand: false,
    personalizedResponses: true
  });

  const [safetySettings, setSafetySettings] = useState({
    spamDetection: true,
    karmaThreshold: 100,
    accountAgeThreshold: 30,
    bannedKeywords: ['spam', 'fake', 'scam'],
    maxPostsPerHour: 5,
    cooldownPeriod: 24
  });

  const [integrationSettings, setIntegrationSettings] = useState({
    redditEnabled: true,
    quoraEnabled: true,
    telegramEnabled: false,
    twitterEnabled: true,
    webhookUrl: '',
    slackNotifications: false
  });

  const handleGeneralChange = (field: string, value: any) => {
    setGeneralSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleAiChange = (field: string, value: any) => {
    setAiSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSafetyChange = (field: string, value: any) => {
    setSafetySettings(prev => ({ ...prev, [field]: value }));
  };

  const handleIntegrationChange = (field: string, value: any) => {
    setIntegrationSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Application Settings</h1>
          <p className="text-muted-foreground mt-2">Configure your DesiLeads experience</p>
        </div>
        <Button className="btn-primary">
          <SettingsIcon className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="ai">AI Behavior</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5" />
                  General Preferences
                </CardTitle>
                <CardDescription>
                  Basic application settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Auto-Approval Mode</Label>
                    <p className="text-sm text-muted-foreground">Automatically post replies without manual review</p>
                  </div>
                  <Switch
                    checked={generalSettings.autoApproval}
                    onCheckedChange={(value) => handleGeneralChange('autoApproval', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Safe Mode</Label>
                    <p className="text-sm text-muted-foreground">Extra safety checks before posting</p>
                  </div>
                  <Switch
                    checked={generalSettings.safeMode}
                    onCheckedChange={(value) => handleGeneralChange('safeMode', value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="font-medium">Daily Lead Limit</Label>
                  <div className="space-y-2">
                    <Slider
                      value={[generalSettings.dailyLimit]}
                      onValueChange={(value) => handleGeneralChange('dailyLimit', value[0])}
                      max={200}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>10</span>
                      <span className="font-medium">{generalSettings.dailyLimit} leads/day</span>
                      <span>200</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="font-medium">Response Delay (minutes)</Label>
                  <div className="space-y-2">
                    <Slider
                      value={[generalSettings.responseDelay]}
                      onValueChange={(value) => handleGeneralChange('responseDelay', value[0])}
                      max={120}
                      min={5}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>5 min</span>
                      <span className="font-medium">{generalSettings.responseDelay} minutes</span>
                      <span>2 hours</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Localization
                </CardTitle>
                <CardDescription>
                  Language and regional settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select 
                    value={generalSettings.language} 
                    onValueChange={(value) => handleGeneralChange('language', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                      <SelectItem value="hinglish">Hinglish</SelectItem>
                      <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                      <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select 
                    value={generalSettings.timezone} 
                    onValueChange={(value) => handleGeneralChange('timezone', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                      <SelectItem value="Asia/Dubai">Asia/Dubai (GST)</SelectItem>
                      <SelectItem value="Europe/London">Europe/London (GMT)</SelectItem>
                      <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">Current Time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    January 15, 2024 • 2:30 PM IST
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                AI Response Settings
              </CardTitle>
              <CardDescription>
                Customize how AI generates responses for your campaigns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="font-medium">Creativity Level</Label>
                    <div className="space-y-2">
                      <Slider
                        value={[aiSettings.creativity]}
                        onValueChange={(value) => handleAiChange('creativity', value[0])}
                        max={100}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Conservative</span>
                        <span className="font-medium">{aiSettings.creativity}%</span>
                        <span>Creative</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-medium">Formality Level</Label>
                    <div className="space-y-2">
                      <Slider
                        value={[aiSettings.formality]}
                        onValueChange={(value) => handleAiChange('formality', value[0])}
                        max={100}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Casual</span>
                        <span className="font-medium">{aiSettings.formality}%</span>
                        <span>Formal</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-medium">Hinglish Usage</Label>
                    <div className="space-y-2">
                      <Slider
                        value={[aiSettings.hinglishLevel]}
                        onValueChange={(value) => handleAiChange('hinglishLevel', value[0])}
                        max={100}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Pure English</span>
                        <span className="font-medium">{aiSettings.hinglishLevel}%</span>
                        <span>Heavy Hinglish</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Include Emojis</Label>
                      <p className="text-sm text-muted-foreground">Add relevant emojis to responses</p>
                    </div>
                    <Switch
                      checked={aiSettings.includeEmojis}
                      onCheckedChange={(value) => handleAiChange('includeEmojis', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Mention Brand</Label>
                      <p className="text-sm text-muted-foreground">Include your brand name in responses</p>
                    </div>
                    <Switch
                      checked={aiSettings.mentionBrand}
                      onCheckedChange={(value) => handleAiChange('mentionBrand', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Personalized Responses</Label>
                      <p className="text-sm text-muted-foreground">Tailor responses to user context</p>
                    </div>
                    <Switch
                      checked={aiSettings.personalizedResponses}
                      onCheckedChange={(value) => handleAiChange('personalizedResponses', value)}
                    />
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-medium mb-2">Sample Response Preview</h4>
                    <p className="text-sm text-muted-foreground">
                      "Hey! 👋 That's a great question about productivity tools. 
                      I've been using this amazing SaaS platform that really helped 
                      streamline our workflow. Would love to share more details if interested!"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Safety Controls
                </CardTitle>
                <CardDescription>
                  Protect your account from spam and bans
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Spam Detection</Label>
                    <p className="text-sm text-muted-foreground">AI-powered spam prevention</p>
                  </div>
                  <Switch
                    checked={safetySettings.spamDetection}
                    onCheckedChange={(value) => handleSafetyChange('spamDetection', value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="karmaThreshold">Minimum Karma Threshold</Label>
                  <Input
                    id="karmaThreshold"
                    type="number"
                    value={safetySettings.karmaThreshold}
                    onChange={(e) => handleSafetyChange('karmaThreshold', parseInt(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground">
                    Only engage with users having karma above this threshold
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountAge">Account Age Threshold (days)</Label>
                  <Input
                    id="accountAge"
                    type="number"
                    value={safetySettings.accountAgeThreshold}
                    onChange={(e) => handleSafetyChange('accountAgeThreshold', parseInt(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground">
                    Minimum account age before engaging
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxPosts">Max Posts Per Hour</Label>
                  <Input
                    id="maxPosts"
                    type="number"
                    value={safetySettings.maxPostsPerHour}
                    onChange={(e) => handleSafetyChange('maxPostsPerHour', parseInt(e.target.value))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Content Filters
                </CardTitle>
                <CardDescription>
                  Manage banned keywords and content filters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Banned Keywords</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {safetySettings.bannedKeywords.map((keyword, index) => (
                      <Badge key={index} variant="destructive" className="text-xs">
                        {keyword}
                        <button 
                          className="ml-1 hover:bg-red-600 rounded-full w-4 h-4 flex items-center justify-center"
                          onClick={() => {
                            const newKeywords = safetySettings.bannedKeywords.filter((_, i) => i !== index);
                            handleSafetyChange('bannedKeywords', newKeywords);
                          }}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <Input
                    placeholder="Add banned keyword..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const value = e.currentTarget.value.trim();
                        if (value && !safetySettings.bannedKeywords.includes(value)) {
                          handleSafetyChange('bannedKeywords', [...safetySettings.bannedKeywords, value]);
                          e.currentTarget.value = '';
                        }
                      }
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cooldown">Cooldown Period (hours)</Label>
                  <Input
                    id="cooldown"
                    type="number"
                    value={safetySettings.cooldownPeriod}
                    onChange={(e) => handleSafetyChange('cooldownPeriod', parseInt(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground">
                    Wait time between posts to same subreddit/platform
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium text-yellow-800 dark:text-yellow-200">Safety Reminder</span>
                  </div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Always review AI-generated responses before posting to maintain authenticity and avoid platform violations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Platform Integrations
              </CardTitle>
              <CardDescription>
                Configure platform connections and external integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Platform Connections</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        R
                      </div>
                      <div>
                        <p className="font-medium">Reddit</p>
                        <p className="text-sm text-muted-foreground">Monitor subreddits</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrationSettings.redditEnabled}
                      onCheckedChange={(value) => handleIntegrationChange('redditEnabled', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        Q
                      </div>
                      <div>
                        <p className="font-medium">Quora</p>
                        <p className="text-sm text-muted-foreground">Answer questions</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrationSettings.quoraEnabled}
                      onCheckedChange={(value) => handleIntegrationChange('quoraEnabled', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        T
                      </div>
                      <div>
                        <p className="font-medium">Telegram</p>
                        <p className="text-sm text-muted-foreground">Monitor channels</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrationSettings.telegramEnabled}
                      onCheckedChange={(value) => handleIntegrationChange('telegramEnabled', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                        X
                      </div>
                      <div>
                        <p className="font-medium">X (Twitter)</p>
                        <p className="text-sm text-muted-foreground">Monitor tweets</p>
                      </div>
                    </div>
                    <Switch
                      checked={integrationSettings.twitterEnabled}
                      onCheckedChange={(value) => handleIntegrationChange('twitterEnabled', value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">External Integrations</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="webhook">Webhook URL</Label>
                    <Input
                      id="webhook"
                      placeholder="https://your-app.com/webhook"
                      value={integrationSettings.webhookUrl}
                      onChange={(e) => handleIntegrationChange('webhookUrl', e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Receive real-time notifications about leads and campaigns
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Slack Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send updates to Slack</p>
                    </div>
                    <Switch
                      checked={integrationSettings.slackNotifications}
                      onCheckedChange={(value) => handleIntegrationChange('slackNotifications', value)}
                    />
                  </div>

                  <Button variant="outline" className="w-full">
                    Configure Slack Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;