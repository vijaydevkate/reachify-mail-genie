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
} from "lucide-react";

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);

  const features = [
    {
      icon: Target,
      title: "Accurate Results",
      description:
        "Our AI analyzes common email patterns to predict the most likely email format.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Get email addresses in seconds, not hours. Speed up your outreach workflow.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "We don't store your searches. Your data stays private and secure.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Emails Found" },
    { value: "98%", label: "Accuracy Rate" },
    { value: "10K+", label: "Happy Users" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                AI-Powered Email Discovery
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Find Professional Emails{" "}
                <span className="text-gradient">in Seconds</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Accurate AI-powered email discovery for sales professionals,
                recruiters, and marketers. Connect with anyone, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" onClick={() => setAuthOpen(true)}>
                  Try it Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Email Finder Card */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <EmailFinderCard />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Reachify?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for professionals who need reliable, fast, and accurate
              email discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-button">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by professionals across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Sales Teams", desc: "Reach decision makers faster" },
              { icon: Users, title: "Recruiters", desc: "Find top talent directly" },
              { icon: Mail, title: "Marketers", desc: "Build targeted campaigns" },
              { icon: Target, title: "Founders", desc: "Connect with investors" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="gradient-hero rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
                Ready to Find Emails Faster?
              </h2>
              <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who trust Reachify for their
                outreach needs.
              </p>
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => setAuthOpen(true)}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
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
