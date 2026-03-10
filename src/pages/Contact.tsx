import { useState } from "react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!nameRegex.test(form.name.trim())) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    toast.success("Thanks! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-3xl text-center">
          <SectionReveal>
            <h1 className="text-foreground mb-4">Get in touch</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you've got a question about our juices, want to discuss a partnership, or just want to say hello — we'd love to hear from you.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <SectionReveal>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block font-heading text-sm font-semibold text-foreground mb-1.5">Name</label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((prev) => ({ ...prev, name: undefined })); }}
                    placeholder="Your name"
                    required
                    className={`h-11 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block font-heading text-sm font-semibold text-foreground mb-1.5">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((prev) => ({ ...prev, email: undefined })); }}
                    placeholder="you@example.com"
                    required
                    className={`h-11 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block font-heading text-sm font-semibold text-foreground mb-1.5">Message</label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What can we help with?"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </SectionReveal>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2">
            <SectionReveal>
              <div className="space-y-7">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-foreground text-base mb-0.5">Visit us</h3>
                    <p className="text-muted-foreground text-sm">123 Green Lane, Fresh City, FC 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-foreground text-base mb-0.5">Call us</h3>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-foreground text-base mb-0.5">Email us</h3>
                    <p className="text-muted-foreground text-sm">hello@frootcane.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-foreground text-base mb-0.5">Opening hours</h3>
                    <p className="text-muted-foreground text-sm">Mon – Sat: 8:00 AM – 9:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Follow us on Instagram @frootcane for daily specials and behind-the-scenes content.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <SectionReveal>
            <div className="rounded-xl overflow-hidden h-72 bg-muted">
              <iframe
                title="Frootcane location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
