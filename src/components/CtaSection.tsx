"use client";

import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { FormEvent, useState } from "react";

const whatsappNumber = "918015165834";

export default function CtaSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    message?: string;
  }>({});

  const clearFieldError = (field: "firstName" | "lastName" | "phone" | "email" | "message") => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const submitToWhatsapp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { firstName?: string; lastName?: string; phone?: string; email?: string; message?: string } = {};

    if (!/^[A-Za-z\s.'-]{2,}$/.test(firstName.trim())) {
      nextErrors.firstName = "Please enter a valid first name.";
    }

    if (!/^[A-Za-z\s.'-]{2,}$/.test(lastName.trim())) {
      nextErrors.lastName = "Please enter a valid last name.";
    }

    if (!/^\d{10,15}$/.test(phone.trim())) {
      nextErrors.phone = "Enter a valid phone number (10 to 15 digits).";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (message.trim().length < 12) {
      nextErrors.message = "Please add at least 12 characters with proper details.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const text = [
      "Hello Frootcane!",
      `Name: ${firstName.trim()} ${lastName.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Details: ${message.trim()}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="bg-[#f7f3e6] px-5 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-3 lg:pb-14 lg:pt-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-5 text-center font-slab text-5xl font-bold text-[#1e3818] sm:text-6xl">Contact Us</h2>

        <div className="item-reveal rounded-[2.1rem] border border-[#d3e4c3] bg-linear-to-br from-white/95 via-[#f8fbf2] to-[#f3f8ea] p-4 shadow-[0_22px_40px_rgba(45,84,29,0.14)] ring-1 ring-[#edf4e4] sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.55fr_0.85fr]">
            <form onSubmit={submitToWhatsapp} className="item-reveal rounded-3xl border border-[#d6e5c7] bg-white/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-sm sm:p-6">
              <h3 className="font-condensed text-4xl font-bold text-[#1f3d1a]">Send us a message</h3>
              <p className="mt-1 text-[1rem] text-[#5f6e57]">Need support or bulk ordering help? Reach out to Frootcane.</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-first-name" className="mb-2 block font-condensed text-2xl font-semibold text-[#214119]">First Name</label>
                  <input
                    id="contact-first-name"
                    type="text"
                    value={firstName}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                      clearFieldError("firstName");
                    }}
                    className="w-full rounded-xl border border-[#c9ddb3] bg-[#fbfdf8] px-4 py-2.5 text-gray-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition focus:border-[#4f8f2f] focus:ring-2 focus:ring-[#96bf70]/30"
                    placeholder="Enter your first name"
                    required
                    minLength={2}
                  />
                  {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="contact-last-name" className="mb-2 block font-condensed text-2xl font-semibold text-[#214119]">Last Name</label>
                  <input
                    id="contact-last-name"
                    type="text"
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                      clearFieldError("lastName");
                    }}
                    className="w-full rounded-xl border border-[#c9ddb3] bg-[#fbfdf8] px-4 py-2.5 text-gray-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition focus:border-[#4f8f2f] focus:ring-2 focus:ring-[#96bf70]/30"
                    placeholder="Enter your last name"
                    required
                    minLength={2}
                  />
                  {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="mb-2 block font-condensed text-2xl font-semibold text-[#214119]">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      clearFieldError("email");
                    }}
                    className="w-full rounded-xl border border-[#c9ddb3] bg-[#fbfdf8] px-4 py-2.5 text-gray-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition focus:border-[#4f8f2f] focus:ring-2 focus:ring-[#96bf70]/30"
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-2 block font-condensed text-2xl font-semibold text-[#214119]">Contact Details</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value.replace(/\D/g, ""));
                      clearFieldError("phone");
                    }}
                    className="w-full rounded-xl border border-[#c9ddb3] bg-[#fbfdf8] px-4 py-2.5 text-gray-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition focus:border-[#4f8f2f] focus:ring-2 focus:ring-[#96bf70]/30"
                    placeholder="Enter your contact number"
                    required
                    minLength={10}
                    maxLength={15}
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="mb-2 block font-condensed text-2xl font-semibold text-[#214119]">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    clearFieldError("message");
                  }}
                  className="w-full rounded-xl border border-[#c9ddb3] bg-[#fbfdf8] px-4 py-3 text-gray-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition focus:border-[#4f8f2f] focus:ring-2 focus:ring-[#96bf70]/30"
                  placeholder="Tell us your requirements"
                  required
                  minLength={12}
                />
                <div className="mt-2 flex items-center justify-between">
                  {errors.message ? <p className="text-sm text-red-600">{errors.message}</p> : <p className="text-sm text-[#66735d]">Please provide clear details.</p>}
                  <p className="text-xs text-[#708061]">{message.trim().length} chars</p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex h-12 min-w-48 items-center justify-center rounded-full border border-[#3f6f2e] bg-linear-to-r from-[#2f6d1d] to-[#4c8c2c] px-8 font-condensed text-2xl font-bold text-white shadow-[0_12px_24px_rgba(67,130,30,0.3)] transition duration-300 hover:-translate-y-0.5 hover:from-[#295f1a] hover:to-[#407826]"
              >
                Send a Message
              </button>
            </form>

            <aside className="item-reveal rounded-3xl border border-[#8ebb66] bg-linear-to-b from-[#8fc265] via-[#7db353] to-[#6ea547] p-5 text-[#163015] shadow-[0_16px_30px_rgba(52,93,32,0.28)] sm:p-6">
              <h3 className="font-condensed text-4xl font-bold leading-tight text-[#173316]">We are always here to help you.</h3>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-[#8aba66] bg-[#f4faea]/88 p-4 shadow-[0_4px_10px_rgba(41,74,25,0.12)]">
                  <p className="flex items-center gap-2 text-sm text-[#36552e]"><PhoneCall size={16} /> Hotline</p>
                  <p className="mt-1 text-[1.03rem] font-semibold text-[#1f3b19]">+91 80151 65834</p>
                </div>
                <div className="rounded-xl border border-[#8aba66] bg-[#f4faea]/88 p-4 shadow-[0_4px_10px_rgba(41,74,25,0.12)]">
                  <p className="flex items-center gap-2 text-sm text-[#36552e]"><MessageCircle size={16} /> SMS / WhatsApp</p>
                  <p className="mt-1 text-[1.03rem] font-semibold text-[#1f3b19]">+91 80151 65834</p>
                </div>
                <div className="rounded-xl border border-[#8aba66] bg-[#f4faea]/88 p-4 shadow-[0_4px_10px_rgba(41,74,25,0.12)]">
                  <p className="flex items-center gap-2 text-sm text-[#36552e]"><Mail size={16} /> Email</p>
                  <p className="mt-1 text-[1.03rem] font-semibold text-[#1f3b19]">hello@frootcane.com</p>
                </div>
              </div>

              <div className="mt-5 border-t border-[#89b963] pt-4">
                <p className="text-sm text-[#315028]">Connect with us</p>
                <div className="mt-3 flex items-center gap-2.5">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d7ebc1] transition hover:bg-[#c5dea8]">
                    <span className="text-sm font-bold text-[#1f3f18]">f</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d7ebc1] transition hover:bg-[#c5dea8]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1f3f18]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d7ebc1] transition hover:bg-[#c5dea8]">
                    <span className="text-sm font-bold text-[#1f3f18]">X</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="item-reveal mt-8 overflow-hidden rounded-4xl border border-[#d7e6c6] bg-white shadow-[0_12px_22px_rgba(43,95,30,0.1)] sm:mt-9 lg:mt-10">
          <div className="relative h-72 w-full sm:h-88">
            <iframe
              title="Frootcane location map"
              src="https://maps.google.com/maps?q=Guruvayoor%20Private%20Bus%20Stand%20Thrissur&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0 filter-[hue-rotate(24deg)_saturate(0.9)_contrast(1.02)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#4f8f2f]/6 via-transparent to-[#4f8f2f]/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
