import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Loader2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: "signin" | "signup";
}

const AuthDialog = ({ open, onOpenChange, defaultMode = "signin" }: AuthDialogProps) => {
  const { login } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (mode === "signup" && !formData.fullName) {
      toast.error("Please enter your full name");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      login(formData.email, formData.fullName);
      toast.success(mode === "signup" ? "Account created!" : "Welcome back!");
      onOpenChange(false);
      setFormData({ fullName: "", email: "", password: "" });
    }, 1000);
  };

  const switchMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
    setFormData({ fullName: "", email: "", password: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-button">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Reachify</span>
          </div>
          <DialogTitle className="text-2xl">
            {mode === "signin" ? "Welcome Back" : "Create Account"}
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            {mode === "signin"
              ? "Sign in to continue finding emails"
              : "Get started with your free account"}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="pl-10"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full" size="lg">
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {mode === "signin" ? "Signing in..." : "Creating account..."}
              </>
            ) : mode === "signin" ? (
              "Sign In"
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-4">
          {mode === "signin" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={switchMode}
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={switchMode}
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
