import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Frootcane.png";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Desktop */}
      <div className="container hidden md:grid grid-cols-3 items-center h-[72px]">
        <div className="flex items-center gap-8 justify-self-start">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/" className="flex items-center justify-center group">
          <img
            src={logo}
            alt="Frootcane logo"
            className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        <div className="justify-self-end">
          <Button asChild variant="cta" size="sm">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      {/* Mobile bar */}
      <div className="container flex items-center h-16 md:hidden">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Frootcane logo"
            className="h-11 w-auto transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="ml-auto p-2 text-foreground hover:text-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border/60">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block font-body text-base font-medium py-1 transition-colors ${
                  location.pathname === link.to
                    ? "text-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="cta"
              size="default"
              className="w-full mt-2"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
