import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-muted border-t border-border">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Frootcane" className="h-8 w-8" />
            <span className="font-heading text-lg font-bold text-foreground">
              Frootcane
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Premium sugarcane juice, freshly pressed with love. Pure, natural, and full of energy.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📍 123 Green Lane, Fresh City</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ hello@frootcane.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Frootcane. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
