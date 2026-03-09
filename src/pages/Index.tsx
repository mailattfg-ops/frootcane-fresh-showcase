import { Link } from "react-router-dom";
import { Leaf, Droplets, ShieldCheck, Citrus, Sparkles, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-juice.jpg";
import varietiesImg from "@/assets/gallery-varieties.jpg";

const benefits = [
  { icon: Leaf, title: "100% Natural", desc: "No preservatives, no additives — just pure sugarcane goodness." },
  { icon: Droplets, title: "Freshly Pressed", desc: "Every glass is pressed on-the-spot for peak freshness." },
  { icon: ShieldCheck, title: "Hygienic Process", desc: "Strict hygiene standards from farm to glass." },
];

const juices = [
  { name: "Classic Cane", desc: "Pure sugarcane, nothing else. The original refresher.", color: "bg-primary/20" },
  { name: "Ginger Zing", desc: "A spicy kick of fresh ginger with sweet cane juice.", color: "bg-accent/20" },
  { name: "Mint Chill", desc: "Cool mint meets natural sweetness for the ultimate thirst quencher.", color: "bg-secondary/10" },
];

const whyCards = [
  { icon: Citrus, title: "Farm Fresh", desc: "Sourced from trusted local sugarcane farms." },
  { icon: Sparkles, title: "Premium Quality", desc: "Hand-selected cane, cleaned and pressed with care." },
  { icon: Heart, title: "Good for You", desc: "Packed with natural electrolytes and antioxidants." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Fresh sugarcane juice" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      <div className="relative container py-24 md:py-40">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground animate-fade-up">
            Nature's Energy,<br />Freshly Pressed.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body animate-fade-up-delay-1">
            Premium sugarcane juice crafted for those who believe in natural goodness and authentic flavour.
          </p>
          <div className="mt-8 animate-fade-up-delay-2">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg rounded-full px-8 font-heading font-bold text-base">
              <Link to="/about">Discover Our Juices</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Frootcane?
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <SectionReveal key={b.title}>
              <div className="bg-card rounded-xl p-8 text-center border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 text-secondary mb-4">
                  <b.icon size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Signature Juices */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Signature Combinations
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
            Crafted recipes that bring out the best of sugarcane.
          </p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {juices.map((j) => (
            <SectionReveal key={j.name}>
              <div className={`rounded-xl p-8 ${j.color} border border-border hover:scale-[1.02] transition-transform`}>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{j.name}</h3>
                <p className="text-muted-foreground text-sm">{j.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal className="text-center mt-10">
          <img src={varietiesImg} alt="Juice varieties" className="mx-auto rounded-2xl shadow-lg max-h-80 object-cover" />
        </SectionReveal>
      </div>
    </section>

    {/* Why Frootcane */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            The Frootcane Difference
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {whyCards.map((c) => (
            <SectionReveal key={c.title}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-secondary">
                  <c.icon size={30} />
                </div>
                <h3 className="font-heading font-bold text-foreground">{c.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs">{c.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-secondary">
      <div className="container text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
          Ready to Taste the Freshness?
        </h2>
        <p className="text-secondary-foreground/80 mb-8 max-w-md mx-auto">
          Visit us or get in touch. Your next favourite drink is waiting.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-heading font-bold shadow-lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
