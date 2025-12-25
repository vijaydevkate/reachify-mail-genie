import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Building2, Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const emailFormats = [
  { value: "auto", label: "Auto Detect" },
  { value: "firstname.lastname", label: "firstname.lastname" },
  { value: "f.lastname", label: "f.lastname" },
  { value: "firstnamelastname", label: "firstnamelastname" },
  { value: "firstname_lastname", label: "firstname_lastname" },
  { value: "lastname.firstname", label: "lastname.firstname" },
];

const EmailFinderCard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [domain, setDomain] = useState("");
  const [format, setFormat] = useState("auto");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateEmail = () => {
    if (!firstName || !lastName || !domain) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/$/, "");
      let email = "";

      if (format === "auto" || format === "firstname.lastname") {
        email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${cleanDomain}`;
      } else if (format === "f.lastname") {
        email = `${firstName.charAt(0).toLowerCase()}.${lastName.toLowerCase()}@${cleanDomain}`;
      } else if (format === "firstnamelastname") {
        email = `${firstName.toLowerCase()}${lastName.toLowerCase()}@${cleanDomain}`;
      } else if (format === "firstname_lastname") {
        email = `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${cleanDomain}`;
      } else if (format === "lastname.firstname") {
        email = `${lastName.toLowerCase()}.${firstName.toLowerCase()}@${cleanDomain}`;
      }

      setResult(email);
      setIsLoading(false);
      toast.success("Email generated successfully!");
    }, 1500);
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setDomain("");
    setFormat("auto");
    setResult(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-card rounded-2xl shadow-card p-8 border border-border animate-scale-in">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-button">
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

          <div className="space-y-2">
            <Label>Email Format (Optional)</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                {emailFormats.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              <div className="flex gap-2">
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
    </div>
  );
};

export default EmailFinderCard;
