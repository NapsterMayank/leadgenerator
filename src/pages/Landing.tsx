import {
  ArrowRight,
  Check,
  Compass,
  LineChart,
  MessageSquare,
  Radar,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const metrics = [
  {
    label: "Signals scanned / day",
    value: "48K",
    detail: "across Reddit, Telegram, X, Quora",
  },
  {
    label: "Warm replies",
    value: "6.4x",
    detail: "higher than cold outreach averages",
  },
  {
    label: "Live conversations",
    value: "240+",
    detail: "handled every single hour",
  },
];

const features = [
  {
    title: "Intent radar",
    description: "Understands tone, urgency, and buying signals automatically.",
    icon: Radar,
    items: ["Hinglish-native", "Industry presets", "Noise filtering"],
  },
  {
    title: "Reply studio",
    description: "Drafts human responses that feel on-brand before you approve.",
    icon: MessageSquare,
    items: ["Context memory", "Safeguarded templates", "Playbooks"],
  },
  {
    title: "Team alignment",
    description: "Pushes qualified threads directly into your CRM and Slack.",
    icon: Users,
    items: ["HubSpot + Zapier", "Owner routing", "Activity notes"],
  },
];

const automations = [
  {
    title: "Watch the web",
    description:
      "Always-on monitoring for long-tail keywords, vernacular questions, and competitor mentions.",
    icon: Compass,
    highlight: "Regional filters & custom dictionaries",
  },
  {
    title: "Score the opportunity",
    description:
      "AI grades sentiment, urgency, and fit so you only see threads that deserve a human follow-up.",
    icon: LineChart,
    highlight: "Transparent scoring with explainer notes",
  },
  {
    title: "Reply with tact",
    description:
      "Suggested responses reference the thread, your product truth, and Indian conversational cues.",
    icon: Sparkles,
    highlight: "Review + approve in one tap",
  },
  {
    title: "Hand-off securely",
    description:
      "Sync enriched leads into your pipeline with compliance logs for every touch.",
    icon: ShieldCheck,
    highlight: "SOC2-ready audit trails",
  },
];

const testimonials = [
  {
    quote:
      "We stopped doom scrolling forums every night. DesiLeads surfaces the 12 conversations that matter and drafts charming Hinglish replies that our brand team approves.",
    name: "Pooja Kapoor",
    role: "Growth lead, Fintech Collective",
    metric: "+38% trial-to-paid",
  },
  {
    quote:
      "The new workspace feels calm and editorial. My team can see channels, intent score, and next steps at a glance without neon gradients screaming at us.",
    name: "Arjun Rao",
    role: "VP Sales, SaaS Foundry",
    metric: "12 hrs saved weekly",
  },
];

const plans = [
  {
    name: "Build",
    price: "Free 14-day trial",
    description: "Perfect for founders validating the channel mix.",
    perks: [
      "Up to 3 audiences & 200 conversations",
      "Manual approval on every reply",
      "Slack + email digests",
    ],
  },
  {
    name: "Scale",
    price: "From ₹24,000 / month",
    description: "For GTM teams that need consistent demand inflow.",
    perks: [
      "Unlimited audiences & automations",
      "CRM + webhook delivery",
      "Shared inbox with roles & guardrails",
    ],
    featured: true,
  },
];

const signals = [
  "Founder & operator subreddits",
  "Niche Telegram & WhatsApp groups",
  "Quora threads in English + Hinglish",
  "Long-tail posts on X, Product Hunt, Indie Hackers",
];

const Landing = () => {
  return (
    <div className="relative isolate overflow-hidden bg-background text-foreground">
      <div
        className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/15 via-background/60 to-background"
        aria-hidden
      />

      {/* Hero */}
      <section className="container relative grid gap-12 px-4 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <Badge className="w-fit rounded-full bg-muted/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Real conversations, not cold blasts
          </Badge>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
              A calmer lead engine for modern Indian SaaS teams
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              DesiLeads watches emerging communities, scores buying intent, and
              drafts Hinglish-friendly replies so you show up like a local—not a
              bot.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-foreground px-8 py-6 text-base font-semibold text-background hover:bg-foreground/90">
              Start the guided demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-border/60 px-8 py-6 text-base font-semibold"
            >
              Book a working session
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-glass">
            {metrics.map((metric) => (
              <div key={metric.label} className="min-w-[180px] space-y-1">
                <p className="text-3xl font-semibold">{metric.value}</p>
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <p className="text-xs text-muted-foreground/80">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Card className="border-border/50 bg-background-secondary backdrop-blur">
          <CardHeader className="space-y-3 border-b border-border/40">
            <Badge className="w-fit bg-secondary/20 text-secondary-foreground">
              Live signal board
            </Badge>
            <CardTitle className="text-2xl">
              Every emerging thread, ranked by intent score
            </CardTitle>
            <CardDescription>
              Human-friendly views with the context your reps actually need
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {signals.map((signal) => (
              <div
                key={signal}
                className="flex items-start justify-between rounded-2xl border border-border/40 bg-muted/30 px-4 py-3"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{signal}</p>
                  <p className="text-xs text-muted-foreground">
                    Live intent, sentiment, and volume overlays
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary">
                  Tracking
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section
        id="features"
        className="container space-y-12 px-4 py-20 sm:py-28"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            <Badge className="w-fit rounded-full bg-accent/15 text-accent-foreground">
              Built for nuance
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Qualify leads with editorial calm, not neon chaos
            </h2>
            <p className="text-lg text-muted-foreground">
              Directional dashboards, tasteful typography, and layout breathing
              room keep revenue teams focused on judgement—not jarring gradients.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border/40 bg-background-secondary/60"
              >
                <CardHeader className="space-y-3">
                  <feature.icon className="h-10 w-10 rounded-xl bg-muted/30 p-2 text-foreground/70" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {feature.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automations */}
      <section className="container space-y-10 px-4 py-20" id="automations">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="w-fit rounded-full bg-primary/15 text-primary">
              Opinionated automation
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              The workflow that replaces doom scrolling
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground">
            Transparent stages keep legal, brand, and sales aligned. Every step
            is logged and reviewable before the message leaves your desk.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {automations.map((automation) => (
            <Card
              key={automation.title}
              className="flex flex-col border-border/40 bg-card/70"
            >
              <CardHeader className="space-y-3">
                <automation.icon className="h-9 w-9 rounded-full bg-muted/40 p-2 text-foreground/80" />
                <CardTitle className="text-xl">{automation.title}</CardTitle>
                <CardDescription>{automation.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-sm font-medium text-primary">
                  {automation.highlight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="container space-y-10 px-4 py-20" id="pricing">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="w-fit rounded-full bg-muted/60 text-muted-foreground">
              Pricing that reflects momentum
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Start thoughtful, scale responsibly
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground">
            Every plan includes human onboarding, layered permissions, and
            compliance-ready audit trails.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border-border/50 ${plan.featured ? "bg-gradient-to-br from-card via-card to-primary/5 shadow-glow" : "bg-card/70"}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {plan.featured && (
                    <Badge className="rounded-full bg-primary/20 text-primary">
                      Most picked
                    </Badge>
                  )}
                </div>
                <p className="text-lg font-semibold text-foreground">
                  {plan.price}
                </p>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.perks.map((perk) => (
                  <div
                    key={perk}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    {perk}
                  </div>
                ))}
                <Button
                  className={`mt-4 w-full rounded-full ${plan.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-foreground hover:bg-muted/80"}`}
                >
                  Talk to sales
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="container space-y-10 px-4 py-20 sm:py-24"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="w-fit rounded-full bg-secondary/20 text-secondary-foreground">
              Field notes
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Teams who replaced panic monitoring
            </h2>
          </div>
          <p className="max-w-xl text-muted-foreground">
            Calm interfaces and Hinglish context mean GTM leaders finally trust
            AI to represent them in public forums.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-border/40 bg-card/70 backdrop-blur"
            >
              <CardContent className="space-y-4 pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  “{testimonial.quote}”
                </p>
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {testimonial.metric}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ / CTA */}
      <section id="faq" className="container px-4 pb-24">
        <Card className="overflow-hidden border-border/40 bg-card/70">
          <div className="grid gap-8 md:grid-cols-[1.4fr,0.6fr]">
            <div className="space-y-6 p-8">
              <Badge className="rounded-full bg-muted/60 text-muted-foreground">
                What happens after the demo?
              </Badge>
              <h3 className="text-3xl font-semibold">
                We sit in your workflows for two weeks and prove channel-market
                fit together.
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                  Day 1-3 · Map audiences, keywords, guardrails, and tone.
                </li>
                <li className="flex gap-2">
                  <Zap className="mt-0.5 h-4 w-4 text-primary" />
                  Day 4-9 · Monitor, score, and co-draft every response with
                  your team.
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                  Day 10-14 · Automate hand-offs, document governance, and
                  unlock team seats.
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between border-t border-border/40 bg-background-secondary/60 p-8 md:border-l md:border-t-0">
              <p className="text-sm text-muted-foreground">
                We only onboard five teams per month to keep research quality
                high.
              </p>
              <div className="space-y-3">
                <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Reserve a slot
                </Button>
                <Button variant="ghost" className="w-full rounded-full">
                  Download the onboarding brief
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Landing;
