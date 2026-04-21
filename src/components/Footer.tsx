import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const pages = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reach Out", href: "#contact" },
];

const contact = {
  address: "Frootcane, Opp Guruvayoor Private Bus Stand, Guruvayoor, Thrissur, Kerala",
  phone: "+918015165834",
  email: "hello@frootcane.com",
};

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#3f7f2f] bg-[#2c6a1e] text-[#eaf4dd]">
      <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl" />

      <div className="relative mx-auto w-full px-6 py-8 sm:py-10">
        <div className="mb-6 grid grid-cols-1 gap-7 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/Frootcane with trade mark.png"
                alt="Frootcane logo"
                width={168}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#edf6e1]">
              Freshly pressed sugarcane juice made the way it should be — simple, clean, and full of flavour. No
              shortcuts, no compromises.
            </p>
            <div className="mt-4 flex items-center gap-3 text-green-700">
              <a
                href="https://wa.me/918015165834"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#91bf6e] bg-[#e8f5d6] transition hover:bg-white"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#91bf6e] bg-[#e8f5d6] transition hover:bg-white"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#91bf6e] bg-[#e8f5d6] transition hover:bg-white"
                aria-label="Call"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://instagram.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#91bf6e] bg-[#e8f5d6] transition hover:bg-white"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-[#214a19]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#d8efbc]">Pages</p>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#edf6e1] transition hover:text-[#d4ecb5]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#d8efbc]">Contact</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 text-[#d4ecb5]" />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-[#cde6b1]">Address</p>
                  <p className="text-sm text-[#edf6e1]">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 text-[#d4ecb5]" />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-[#cde6b1]">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-sm text-[#edf6e1] transition hover:text-[#d4ecb5]">
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 text-[#d4ecb5]" />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-[#cde6b1]">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-sm text-[#edf6e1] transition hover:text-[#d4ecb5]">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-3">
          <div className="h-1 w-28 rounded-full bg-linear-to-r from-lime-200/20 via-lime-100/80 to-lime-200/20" />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 border-t border-white/15 pt-5 text-center">
          <p className="text-xs text-[#d0e4bb]">
            Powered by{" "}
            <a
              href="https://www.thinkforgeglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#edf6e1] underline decoration-[#cfe4b8]/80 underline-offset-3 transition hover:text-white"
            >
              Think Forge Global
            </a>
          </p>
          <p className="text-xs text-[#e3f0d4]">© {new Date().getFullYear()} Frootcane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
