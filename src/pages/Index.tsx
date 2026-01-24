import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailFinderCard from "@/components/EmailFinderCard";
import AuthDialog from "@/components/AuthDialog";
import {
  ArrowRight,
  Target,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Mail,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);

  const features = [
    {
      icon: Target,
      title: "Accurate Results",
      description:
        "AI analyzes common email patterns to predict the most likely format.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Get email addresses in seconds. Speed up your outreach workflow.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "We don't store your searches. Your data stays private and secure.",
    },
  ];

  const useCases = [
    { icon: TrendingUp, title: "Sales Teams", desc: "Reach decision makers faster" },
    { icon: Users, title: "Recruiters", desc: "Find top talent directly" },
    { icon: Mail, title: "Marketers", desc: "Build targeted campaigns" },
    { icon: Target, title: "Founders", desc: "Connect with investors" },
  ];

  const stats = [
    { value: "95%+", label: "Accuracy Rate" },
    { value: "10K+", label: "Emails Found" },
    { value: "2s", label: "Average Speed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Dark & Immersive like open.cx */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 gradient-hero" />
        
        {/* Glow effect at top */}
        <div className="absolute inset-0 gradient-hero-glow" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(hsla(175, 70%, 50%, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsla(175, 70%, 50%, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl pt-20">
          {/* Announcement badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/80">AI-Powered Email Discovery</span>
            </div>
          </div>

          {/* Main headline - Large & Centered */}
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Find Professional Emails
              <br />
              <span className="text-gradient">in Seconds</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Accurate email discovery for sales professionals, recruiters, and marketers. 
              Connect with anyone, anywhere.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              onClick={() => setAuthOpen(true)} 
              className="group text-base px-8 py-6 shadow-button"
            >
              Start now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Free to start</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>95%+ accuracy</span>
            </div>
          </div>

          {/* Floating Email Finder Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative max-w-lg mx-auto">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-40" />
              <div className="relative shadow-elevated rounded-2xl">
                <EmailFinderCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Hootly?
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Built for professionals who need reliable and fast email discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card border border-border interactive-card group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by professionals across industries
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border text-center interactive-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="gradient-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Find Emails Faster?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Join thousands of professionals who trust Hootly for their outreach needs.
              </p>
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base"
                onClick={() => setAuthOpen(true)}
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} defaultMode="signup" />
    </div>
  );
};

export default Index;
