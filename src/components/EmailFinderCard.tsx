import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Building2, Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import AuthDialog from "@/components/AuthDialog";

const EmailFinderCard = () => {
  const { isAuthenticated } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const generateEmail = () => {
    if (!isAuthenticated) {
      setAuthOpen(true);
      return;
    }

    if (!firstName || !lastName || !domain) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "");
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${cleanDomain}`;
      setResult(email);
      setIsLoading(false);
      toast.success("Email generated!");
    }, 1000);
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      toast.success("Copied!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setDomain("");
    setResult(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-card rounded-2xl shadow-card p-8 border border-border animate-scale-in hover:shadow-card-hover transition-all duration-500 group">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-button group-hover:shadow-glow transition-shadow duration-500 animate-bounce-subtle">
            <Sparkles className="w-7 h-7 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Find Email Address
          </h2>
          <p className="text-muted-foreground">
            Enter details to generate a professional email
          </p>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="firstName"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="domain">Company Domain</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="domain"
                placeholder="company.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button
            onClick={generateEmail}
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Find Email
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-accent rounded-xl border border-primary/20 animate-scale-in">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">
                  Generated Email
                </p>
                <p className="text-lg font-semibold text-foreground truncate">
                  {result}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetForm}
              className="w-full mt-3 text-muted-foreground"
            >
              Generate Another
            </Button>
          </div>
        )}
      </div>
      
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} defaultMode="signup" />
    </div>
  );
};

export default EmailFinderCard;
