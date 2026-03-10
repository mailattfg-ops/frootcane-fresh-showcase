import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/60 bg-background">
    <div className="container py-14 md:py-18">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 mb-3">
            <img src={logo} alt="Frootcane" className="h-10 w-10" />
            <span className="font-heading text-xl font-bold text-foreground">Frootcane</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Freshly pressed sugarcane juice made the way it should be — simple, clean, and full of flavour. No shortcuts, no compromises.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <h4 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Pages</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground text-sm hover:text-secondary transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
          <address className="not-italic space-y-2.5 text-sm text-muted-foreground">
            <p>123 Green Lane, Fresh City</p>
            <p><a href="tel:+15551234567" className="hover:text-secondary transition-colors">+1 (555) 123-4567</a></p>
            <p><a href="mailto:hello@frootcane.com" className="hover:text-secondary transition-colors">hello@frootcane.com</a></p>
          </address>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/60 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Frootcane. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
