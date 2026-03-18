import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const WHATSAPP_NUMBER = "918015165834";

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const whatsappMessage = [
      "Hello Frootcane,",
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Message: ${values.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Redirecting to WhatsApp...");
    form.reset();
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} className="h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What can we help with?"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </Form>
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
                    <p className="text-muted-foreground text-sm">
                      Fruitcan, Opp Guruvayoor privet Bustand, Guruvayoor, Thrissur, Kerala
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-foreground text-base mb-0.5">Call us</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+918015165834" className="hover:text-secondary transition-colors">
                        +918015165834
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-foreground text-base mb-0.5">Email us</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:hello@frootcane.com" className="hover:text-secondary transition-colors">
                        hello@frootcane.com
                      </a>
                    </p>
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
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d471.70508746262294!2d76.03687123205512!3d10.595533873728392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAddress%20Fruitcan.%20Opp%20Guruvayoor%20privatE%20stand%20Guruvayoor%20Thrissur%20Kerala!5e0!3m2!1sen!2sin!4v1773807918353!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
