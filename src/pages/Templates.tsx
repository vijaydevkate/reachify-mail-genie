import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Copy, Check, Mail, UserPlus, RefreshCw, Users } from "lucide-react";
import { toast } from "sonner";

const templates = [
  {
    id: 1,
    icon: Mail,
    title: "Cold Outreach",
    category: "Sales",
    subject: "Quick question about [Company]",
    body: `Hi [First Name],

I noticed that [Company] is doing some impressive work in [Industry/Area]. I wanted to reach out because we've helped similar companies [achieve specific result].

I'd love to share some insights that could help [Company] [specific benefit]. Would you be open to a quick 15-minute call this week?

Best regards,
[Your Name]`,
  },
  {
    id: 2,
    icon: RefreshCw,
    title: "Follow-up Email",
    category: "Sales",
    subject: "Following up on my previous email",
    body: `Hi [First Name],

I wanted to follow up on my previous email. I understand you're busy, but I believe what we offer could significantly benefit [Company].

Here's a quick summary of how we can help:
• [Benefit 1]
• [Benefit 2]
• [Benefit 3]

Would you have 10 minutes for a quick chat? I'm flexible with timing.

Best,
[Your Name]`,
  },
  {
    id: 3,
    icon: Users,
    title: "Referral Request",
    category: "Networking",
    subject: "Quick favor - who should I talk to about [Topic]?",
    body: `Hi [First Name],

I hope this email finds you well! I'm reaching out because I'm looking to connect with someone at [Company] who handles [specific area].

Based on our previous conversations, I thought you might know the right person to speak with. Would you be able to point me in the right direction?

I really appreciate any guidance you can provide.

Thanks so much,
[Your Name]`,
  },
  {
    id: 4,
    icon: UserPlus,
    title: "Recruiting Outreach",
    category: "Recruiting",
    subject: "Exciting opportunity at [Your Company]",
    body: `Hi [First Name],

I came across your profile and was impressed by your experience in [specific area]. I'm reaching out because we have an exciting [Role] opportunity at [Your Company] that I think would be a great fit for your background.

About the role:
• [Key responsibility 1]
• [Key responsibility 2]
• [Growth opportunity]

Would you be interested in learning more? I'd love to schedule a brief call to discuss.

Best regards,
[Your Name]`,
  },
];

const Templates = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyTemplate = (template: typeof templates[0]) => {
    const fullText = `Subject: ${template.subject}\n\n${template.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(template.id);
    toast.success("Template copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Email <span className="text-gradient">Templates</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional email templates to help you connect with prospects,
              candidates, and partners. Copy, customize, and send.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {templates.map((template, index) => (
              <div
                key={template.id}
                className="bg-card rounded-2xl shadow-card border border-border overflow-hidden hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-button">
                        <template.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {template.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {template.category}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyTemplate(template)}
                    >
                      {copiedId === template.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">Subject:</p>
                    <p className="font-medium text-foreground">
                      {template.subject}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed">
                    {template.body}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-20 bg-muted/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Tips for Effective Outreach
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Personalize Everything",
                  desc: "Replace all placeholders with specific details about the recipient and their company.",
                },
                {
                  title: "Keep it Brief",
                  desc: "Respect your recipient's time. Get to the point quickly and clearly.",
                },
                {
                  title: "Clear Call-to-Action",
                  desc: "End with a specific ask, like scheduling a call or requesting a reply.",
                },
                {
                  title: "Follow Up",
                  desc: "Don't give up after one email. A polite follow-up often gets better results.",
                },
              ].map((tip, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shrink-0 text-primary-foreground font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </div>
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

export default Templates;
