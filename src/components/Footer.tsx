import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/Frootcane.png";

const Footer = () => (
  <footer className="border-t border-border/60 bg-background">
    <div className="container py-14 md:py-18">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 mb-3">
            <img src={logo} alt="Frootcane" className="h-16 w-auto" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Freshly pressed sugarcane juice made the way it should be — simple,
            clean, and full of flavour. No shortcuts, no compromises.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <h4 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
            Pages
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-muted-foreground text-sm hover:text-secondary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
            Contact
          </h4>
          <address className="not-italic space-y-2.5 text-sm text-muted-foreground">
            <p>
              Frootcane,
              <br />
              Opp Guruvayoor Private Bus Stand,
              <br />
              Guruvayoor,
              <br />
              Thrissur, Kerala
            </p>
            <p>
              <a
                href="tel:+918015165834"
                className="hover:text-secondary transition-colors"
              >
                +918015165834
              </a>
            </p>
            <p>
              <a
                href="mailto:hello@frootcane.com"
                className="hover:text-secondary transition-colors"
              >
                hello@frootcane.com
              </a>
            </p>
          </address>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/frootcane"
              target="_blank"
              rel="noreferrer"
              aria-label="Frootcane on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://www.facebook.com/frootcane"
              target="_blank"
              rel="noreferrer"
              aria-label="Frootcane on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
            >
              <Facebook size={17} />
            </a>
            <a
              href="https://wa.me/918015165834"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Frootcane on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
            >
              <MessageCircle size={17} />
            </a>
          </div>
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
