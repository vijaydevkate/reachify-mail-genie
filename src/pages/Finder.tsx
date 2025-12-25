import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailFinderCard from "@/components/EmailFinderCard";
import { Sparkles } from "lucide-react";

const Finder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Email Finder Tool
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Professional Email Addresses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter the person's details and company domain to generate their
              professional email address instantly.
            </p>
          </div>

          <EmailFinderCard />

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Tips for Better Results
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Use Correct Names",
                  desc: "Enter names as they appear on LinkedIn or the company website.",
                },
                {
                  title: "Include Domain Only",
                  desc: "Enter just the domain (company.com) without http:// or www.",
                },
                {
                  title: "Try Different Formats",
                  desc: "If one format doesn't work, try others like f.lastname or firstnamelastname.",
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Finder;
