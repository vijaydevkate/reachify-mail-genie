import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import HootlyLogo from "@/components/HootlyLogo";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-3">
              <HootlyLogo size={32} />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Find professional email addresses in seconds with our AI-powered
              email discovery tool. Perfect for sales, recruiting, and business
              development.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/thehootly/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-primary"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hootly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
