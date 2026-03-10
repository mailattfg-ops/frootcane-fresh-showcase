import { Link } from "react-router-dom";
import { Leaf, Droplets, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-juice.jpg";
import varietiesImg from "@/assets/gallery-varieties.jpg";
import shopImg from "@/assets/gallery-shop.jpg";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-muted">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 md:py-24 lg:py-32">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-foreground animate-fade-up">
            Fresh sugarcane juice,<br />
            the way it should be.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-md mx-auto lg:mx-0 animate-fade-up-delay-1">
            We press every glass to order using locally sourced sugarcane. No water added, no preservatives, no nonsense — just clean, natural energy that tastes as good as it feels.
          </p>
          <div className="mt-8 animate-fade-up-delay-2">
            <Button asChild variant="cta" size="lg">
              <Link to="/about">Discover Our Juices</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-fade-up">
          <img
            src={heroImg}
            alt="A glass of fresh sugarcane juice with mint garnish on a marble counter"
            className="w-full rounded-2xl object-cover aspect-[4/3] lg:aspect-[3/4] max-h-[520px]"
          />
        </div>
      </div>
    </section>

    {/* Why Frootcane */}
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="text-foreground mb-3">What makes us different</h2>
            <div className="section-divider" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Leaf,
              title: "Nothing artificial",
              desc: "Every ingredient is real. We don't add sugar, water, or preservatives to any of our drinks. What you see is what you get.",
            },
            {
              icon: Droplets,
              title: "Pressed fresh daily",
              desc: "Our sugarcane is pressed on-the-spot, every single day. We don't batch-produce or store juice overnight. Ever.",
            },
            {
              icon: ShieldCheck,
              title: "Clean from start to finish",
              desc: "We follow strict food-safety standards at every step — from how we source our cane to how we hand you your glass.",
            },
          ].map((item) => (
            <SectionReveal key={item.title}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/12 text-secondary mb-4">
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Our Juices */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="text-foreground mb-3">Our signature juices</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Three simple recipes, each built around the natural sweetness of fresh sugarcane.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "The Classic",
              desc: "Pure pressed sugarcane, served cold. Nothing added, nothing taken away. This is where it all started.",
              tag: "Original",
            },
            {
              name: "Ginger Kick",
              desc: "A thumb of fresh ginger muddled into each glass. Warming, spicy, and surprisingly refreshing on a hot day.",
              tag: "Popular",
            },
            {
              name: "Mint Cooler",
              desc: "Fresh mint leaves blended with sugarcane juice and a squeeze of lime. Light, bright, and incredibly drinkable.",
              tag: "Seasonal",
            },
          ].map((juice) => (
            <SectionReveal key={juice.name}>
              <div className="bg-card rounded-xl p-7 border border-border/60 hover:border-primary/30 transition-colors duration-300 h-full flex flex-col">
                <span className="inline-block text-xs font-heading font-bold uppercase tracking-wider text-secondary mb-3">
                  {juice.tag}
                </span>
                <h3 className="text-foreground mb-2">{juice.name}</h3>
<<<<<<< HEAD
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{juice.desc}</p>
=======
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{juice.desc}</p>
>>>>>>> 28731c4f300b5fad67674becff5ef03837b9c91f
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <img src={varietiesImg} alt="A selection of Frootcane juice flavors" className="rounded-xl object-cover w-full h-56" />
            <img src={shopImg} alt="Inside the Frootcane juice bar" className="rounded-xl object-cover w-full h-56" />
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Hygiene / Trust strip */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <h2 className="text-foreground mb-4">
            We take hygiene seriously
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every piece of sugarcane is washed, peeled, and inspected before it touches our press. Our equipment is cleaned and sanitised between each batch. We're not just making juice — we're building trust, one glass at a time.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 md:py-18 bg-secondary">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="text-secondary-foreground mb-3">
            Come try it for yourself
          </h2>
          <p className="text-secondary-foreground/75 mb-7 max-w-md mx-auto text-sm">
            We're open seven days a week. Walk in, grab a glass, and see what real sugarcane juice tastes like.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Find Us</Link>
          </Button>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
