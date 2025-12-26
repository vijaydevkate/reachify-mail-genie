import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import HootlyLogo from "@/components/HootlyLogo";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <HootlyLogo size={36} />
              <span className="text-xl font-bold text-foreground">Hootly</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Find professional email addresses in seconds with our AI-powered
              email discovery tool. Perfect for sales, recruiting, and business
              development.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors text-muted-foreground hover:text-accent-foreground"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Hootly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
