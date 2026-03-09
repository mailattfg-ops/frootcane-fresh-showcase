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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <SectionReveal>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
              Get in Touch
            </h1>
            <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
              Have a question or want to partner with us? We'd love to hear from you.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <SectionReveal>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5">
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block font-heading font-semibold text-sm text-foreground mb-1">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-heading font-bold shadow-lg">
                  Send Message
                </Button>
              </form>
            </SectionReveal>

            {/* Info */}
            <div className="space-y-8">
              <SectionReveal>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-secondary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Location</h3>
                      <p className="text-muted-foreground text-sm">123 Green Lane, Fresh City, FC 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-secondary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Phone</h3>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-secondary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm">hello@frootcane.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-secondary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Opening Hours</h3>
                      <p className="text-muted-foreground text-sm">Mon–Sat: 8:00 AM – 9:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sunday: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-64 bg-muted flex items-center justify-center">
                  <iframe
                    title="Location map"
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
