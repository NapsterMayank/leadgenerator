import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Users, 
  MessageSquare, 
  Target, 
  Sparkles,
  Zap,
  Brain,
  Globe,
  Shield,
  BarChart3,
  Clock,
  Smartphone,
  TrendingUp,
  Award,
  Play,
  MessageCircle
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-3xl"></div>
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <Badge className="mb-8 card-glass px-6 py-2 text-sm font-medium animate-bounce-in border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            India's #1 AI Lead Generation Platform
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight animate-slide-up">
            Get customers from<br />
            <span className="text-glow">Reddit, Quora, Telegram & X</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Automated, safe, India-first AI-powered lead generation with <span className="text-gradient font-semibold">Hinglish responses</span> that convert like magic
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="btn-primary text-lg px-10 py-6 rounded-2xl group">
              <Target className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Free Trial
            </Button>
            <Button size="lg" className="btn-secondary text-lg px-10 py-6 rounded-2xl group">
              <Brain className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              See AI Demo
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Leads Generated", delay: "0s" },
              { number: "500+", label: "Happy Customers", delay: "0.1s" },
              { number: "95%", label: "Success Rate", delay: "0.2s" },
              { number: "24/7", label: "AI Monitoring", delay: "0.3s" }
            ].map((stat, index) => (
              <div key={index} className="card-glass p-6 text-center animate-bounce-in" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="card-glass px-4 py-2 mb-6 border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Why DesiLeads Works Better
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built specifically for Indian markets with AI that understands local context, culture, and conversation patterns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI Lead Scanning",
                description: "Advanced AI monitors Reddit, Quora, Telegram & X for relevant conversations in real-time",
                gradient: "from-primary to-primary-light"
              },
              {
                icon: MessageSquare,
                title: "Viral Template Library",
                description: "Pre-tested Hinglish templates that get engagement and drive conversions naturally",
                gradient: "from-secondary to-secondary-light"
              },
              {
                icon: Shield,
                title: "Safe Reply Generator",
                description: "AI ensures your responses are helpful, not spammy, protecting your brand reputation",
                gradient: "from-accent to-accent-light"
              },
              {
                icon: Globe,
                title: "Multilingual Support",
                description: "Respond in English, Hinglish, Hindi, Tamil, and more regional languages fluently",
                gradient: "from-primary to-secondary"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Track engagement, conversion rates, and ROI across all platforms with detailed insights",
                gradient: "from-secondary to-accent"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Work together with role-based access, approval workflows, and shared templates",
                gradient: "from-accent to-primary"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-glass group hover:scale-105 transition-all duration-500 border-0 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardHeader className="relative p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="card-glass px-4 py-2 mb-6 border-0">
              <Target className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in 3 simple steps and watch the leads flow in
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>
            
            {[
              {
                step: "1",
                title: "Describe Your Product",
                description: "Tell our AI about your product, target audience, and key benefits in simple, natural language",
                icon: MessageSquare,
                color: "from-primary to-primary-light"
              },
              {
                step: "2", 
                title: "Select Platforms & Keywords",
                description: "Choose Reddit, Quora, Telegram, or X. Add relevant keywords, filters, and targeting preferences",
                icon: Target,
                color: "from-secondary to-secondary-light"
              },
              {
                step: "3",
                title: "AI Finds & Engages",
                description: "Our AI monitors conversations 24/7 and generates contextual responses for your approval",
                icon: Brain,
                color: "from-accent to-accent-light"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="card-glass px-4 py-2 mb-6 border-0">
              <Star className="w-4 h-4 mr-2" />
              Pricing Plans
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Trial */}
            <Card className="card-glass border-0 group hover:scale-105 transition-all duration-500">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold mb-2">Free Trial</CardTitle>
                <div className="text-4xl font-bold text-gradient mb-2">₹0</div>
                <CardDescription className="text-base">Perfect for testing our platform</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {[
                    "50 leads per month",
                    "1 platform connection", 
                    "Basic templates",
                    "Email support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-secondary group-hover:scale-105 transition-transform">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            
            {/* Growth Plan - Most Popular */}
            <Card className="card-glass border-2 border-primary/30 group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-primary text-white px-6 py-2 rounded-full shadow-glow">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="p-8 relative">
                <CardTitle className="text-2xl font-bold mb-2">Growth</CardTitle>
                <div className="text-4xl font-bold text-gradient mb-2">
                  ₹799<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-base">For growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 relative">
                <ul className="space-y-4 mb-8">
                  {[
                    "500 leads per month",
                    "All platform connections",
                    "Premium templates",
                    "Analytics dashboard",
                    "Priority email support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-primary group-hover:scale-105 transition-transform">
                  Choose Growth
                </Button>
              </CardContent>
            </Card>
            
            {/* Pro Plan */}
            <Card className="card-glass border-0 group hover:scale-105 transition-all duration-500">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold mb-2">Pro</CardTitle>
                <div className="text-4xl font-bold text-gradient mb-2">
                  ₹2,499<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="text-base">For established companies</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited leads",
                    "All platform connections",
                    "Custom templates",
                    "Advanced analytics",
                    "Priority support",
                    "Team collaboration"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-secondary group-hover:scale-105 transition-transform">
                  Choose Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="card-glass px-4 py-2 mb-6 border-0">
              <Users className="w-4 h-4 mr-2" />
              Customer Stories
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of businesses growing with DesiLeads across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Founder, TechStart",
                avatar: "R",
                testimonial: "DesiLeads helped us get 200+ qualified leads in the first month. The Hinglish responses work amazingly well!",
                gradient: "from-primary to-primary-light"
              },
              {
                name: "Priya Patel", 
                role: "Marketing Head, EduTech",
                avatar: "P",
                testimonial: "The AI is incredibly smart at finding relevant conversations. Our conversion rate increased by 300%!",
                gradient: "from-secondary to-secondary-light"
              },
              {
                name: "Arjun Kumar",
                role: "CEO, LocalBiz", 
                avatar: "A",
                testimonial: "Finally, a tool that understands Indian markets. The regional language support is game-changing!",
                gradient: "from-accent to-accent-light"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-glass border-0 group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-4">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="card-glass px-4 py-2 mb-6 border-0">
              <MessageCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Got Questions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about DesiLeads and how it works
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How does DesiLeads find relevant leads?",
                answer: "Our AI scans Reddit, Quora, Telegram, and X for conversations matching your keywords and product description. It analyzes context, sentiment, and relevance to find high-quality leads automatically."
              },
              {
                question: "Is it safe to use? Will I get banned?",
                answer: "Safety is our top priority. DesiLeads includes spam prevention, rate limiting, and human-in-the-loop approval by default. We follow platform guidelines and use conservative posting frequencies to protect your accounts."
              },
              {
                question: "What languages does DesiLeads support?",
                answer: "DesiLeads supports English, Hindi, Hinglish, Tamil, and other Indian regional languages. Our AI is trained specifically on Indian conversation patterns and cultural context."
              },
              {
                question: "How much does DesiLeads cost?",
                answer: "We offer a free trial to get started. Our Growth plan is ₹799/month and Pro plan is ₹2,499/month. All plans include AI responses, template library, and multi-platform support."
              },
              {
                question: "Can I customize the AI responses?",
                answer: "Yes! You can create custom templates, set your brand voice, and choose from our viral template library. The AI learns your style and generates responses that match your brand personality."
              },
              {
                question: "How quickly can I see results?",
                answer: "Most customers see their first qualified leads within 24-48 hours of setup. Our AI works 24/7 to find and engage with potential customers while you focus on closing deals."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-glass border-0 group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 text-gradient group-hover:text-glow transition-all">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <Button className="btn-secondary group">
              <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-5xl mx-auto relative">
          <Badge className="card-glass px-6 py-3 mb-8 border-0 text-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Ready to Get Started?
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient leading-tight">
            Ready to 10x Your<br />
            <span className="text-glow">Lead Generation?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 500+ businesses already using DesiLeads to grow their customer base with AI-powered lead generation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="btn-primary text-xl px-12 py-6 rounded-2xl group">
              <Target className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              Start Free Trial
            </Button>
            <Button size="lg" className="btn-secondary text-xl px-12 py-6 rounded-2xl group">
              <MessageSquare className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Setup in 5 minutes
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-background/50 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gradient">DesiLeads</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AI-powered lead generation platform designed for Indian businesses. Get customers from Reddit, Quora, Telegram & X with intelligent automation.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="btn-secondary">
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button size="sm" className="btn-secondary">
                  <Users className="w-4 h-4" />
                </Button>
                <Button size="sm" className="btn-secondary">
                  <Target className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gradient">Product</h3>
              <ul className="space-y-4">
                <li><a href="#features" className="text-muted-foreground hover:text-gradient transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-gradient transition-colors">Pricing</a></li>
                <li><a href="#templates" className="text-muted-foreground hover:text-gradient transition-colors">Templates</a></li>
                <li><a href="#integrations" className="text-muted-foreground hover:text-gradient transition-colors">Integrations</a></li>
                <li><a href="#api" className="text-muted-foreground hover:text-gradient transition-colors">API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gradient">Company</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-muted-foreground hover:text-gradient transition-colors">About Us</a></li>
                <li><a href="#careers" className="text-muted-foreground hover:text-gradient transition-colors">Careers</a></li>
                <li><a href="#blog" className="text-muted-foreground hover:text-gradient transition-colors">Blog</a></li>
                <li><a href="#press" className="text-muted-foreground hover:text-gradient transition-colors">Press Kit</a></li>
                <li><a href="#partners" className="text-muted-foreground hover:text-gradient transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gradient">Support</h3>
              <ul className="space-y-4">
                <li><a href="#help" className="text-muted-foreground hover:text-gradient transition-colors">Help Center</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-gradient transition-colors">Contact Us</a></li>
                <li><a href="#status" className="text-muted-foreground hover:text-gradient transition-colors">System Status</a></li>
                <li><a href="#security" className="text-muted-foreground hover:text-gradient transition-colors">Security</a></li>
                <li><a href="#compliance" className="text-muted-foreground hover:text-gradient transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <p className="text-muted-foreground text-sm">
                  © 2024 DesiLeads. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="#privacy" className="text-muted-foreground hover:text-gradient transition-colors">Privacy Policy</a>
                  <a href="#terms" className="text-muted-foreground hover:text-gradient transition-colors">Terms of Service</a>
                  <a href="#cookies" className="text-muted-foreground hover:text-gradient transition-colors">Cookie Policy</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-6 md:mt-0">
                <Badge className="card-glass px-3 py-1 border-0">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  All systems operational
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Made with ❤️ in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;