import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  Cpu,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Shield,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Enter Details",
      description:
        "Provide the first name, last name, and company domain of the person whose email you want to find.",
    },
    {
      icon: Cpu,
      title: "AI Processing",
      description:
        "Our AI analyzes common email patterns and company naming conventions to predict the most likely email format.",
    },
    {
      icon: CheckCircle,
      title: "Get Results",
      description:
        "Receive the generated email address instantly. Copy it to your clipboard and start your outreach.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "High Accuracy",
      description:
        "Our AI has been trained on millions of email patterns to provide the most accurate predictions possible.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "No waiting around. Get email addresses in seconds, not hours. Perfect for high-volume prospecting.",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description:
        "We don't store your search history or the emails you generate. Your data remains private.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-20 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How <span className="text-gradient">Hootly</span> Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover professional email addresses in three simple steps.
              Powered by AI for maximum accuracy and speed.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-border" />

              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-button relative z-10">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent border border-primary/30 flex items-center justify-center text-sm font-bold text-accent-foreground z-20">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card/50 border border-border rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Email Discovery Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Find Emails?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start finding professional email addresses in seconds.
            </p>
            <Link to="/">
              <Button variant="hero" size="lg">
                Try Email Finder
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
