import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Accuracy First",
      description:
        "We're obsessed with providing the most accurate email predictions possible. Our AI continuously learns and improves.",
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description:
        "Time is money. We've built Reachify to be lightning fast so you can focus on what matters - building relationships.",
    },
    {
      icon: Heart,
      title: "User Privacy",
      description:
        "Your data is yours. We don't sell information, and we don't store your search history. Privacy is non-negotiable.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description:
        "Your success is our success. We're here to help you connect with the people that matter to your business.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-20 max-w-3xl mx-auto animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Reachify</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make professional networking easier. Our
              AI-powered email finder helps sales teams, recruiters, and
              entrepreneurs connect with the people who matter most to their
              business.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Reachify was born out of frustration. As sales professionals,
                  we spent countless hours trying to find the right email
                  addresses to reach decision-makers. Existing tools were either
                  too expensive, inaccurate, or complicated.
                </p>
                <p>
                  We built Reachify to be different. Simple, accurate, and
                  accessible. Our AI-powered approach means you get high-quality
                  email predictions in seconds, not hours.
                </p>
                <p>
                  Today, thousands of professionals trust Reachify to power
                  their outreach. From startup founders to enterprise sales
                  teams, we're helping people connect and grow.
                </p>
              </div>
            </div>
            <div
              className="bg-muted rounded-3xl p-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50K+", label: "Emails Found" },
                  { value: "10K+", label: "Happy Users" },
                  { value: "98%", label: "Accuracy" },
                  { value: "150+", label: "Countries" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-button">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center bg-muted/50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built by Professionals, for Professionals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team combines expertise in AI, sales, and product development.
              We understand the challenges of outreach because we've lived them.
              That's why we're committed to building the best email finder tool
              on the market.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
