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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Clean & Minimal */}
      <section className="pt-28 pb-16 px-4 relative">
        {/* Subtle background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] gradient-glow pointer-events-none" />

        <div className="container mx-auto relative max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AI-Powered Email Discovery
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground mb-5 leading-[1.15]">
                Find Professional Emails{" "}
                <span className="text-gradient">in Seconds</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Accurate email discovery for sales professionals, recruiters, and marketers. Connect with anyone, anywhere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" onClick={() => setAuthOpen(true)} className="group">
                  Try it Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  No credit card
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Free to start
                </div>
              </div>
            </div>

            {/* Right Content - Email Finder Card */}
            <div className="animate-fade-in">
              <EmailFinderCard />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Choose Hootly?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Built for professionals who need reliable and fast email discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-border interactive-card group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Perfect For
            </h2>
            <p className="text-muted-foreground">
              Trusted by professionals across industries
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 shadow-card border border-border text-center interactive-card group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-200">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="gradient-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Ready to Find Emails Faster?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                Join professionals who trust Hootly for their outreach needs.
              </p>
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
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