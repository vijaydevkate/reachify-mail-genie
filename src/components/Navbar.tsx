import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthDialog from "@/components/AuthDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const publicLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Email Templates", href: "/templates" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const openAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-button transition-transform group-hover:scale-105">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Reachify</span>
            </Link>

            {/* Desktop Navigation - Only show for non-authenticated users */}
            {!isAuthenticated && (
              <div className="hidden md:flex items-center gap-1">
                {publicLinks.map((link) => (
                  <Link key={link.name} to={link.href}>
                    <Button
                      variant="nav"
                      className={isActive(link.href) ? "text-primary" : ""}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </div>
            )}

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-muted-foreground">
                    Hi, <span className="text-foreground font-medium">{user?.name}</span>
                  </span>
                  <Button variant="outline" onClick={logout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={() => openAuth("signin")}>
                    Sign In
                  </Button>
                  <Button onClick={() => openAuth("signup")}>Try it Free</Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-b border-border animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {!isAuthenticated &&
                publicLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              <div className="pt-4 space-y-2">
                {isAuthenticated ? (
                  <Button variant="outline" className="w-full" onClick={logout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setIsOpen(false);
                        openAuth("signin");
                      }}
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full"
                      onClick={() => {
                        setIsOpen(false);
                        openAuth("signup");
                      }}
                    >
                      Try it Free
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} defaultMode={authMode} />
    </>
  );
};

export default Navbar;
