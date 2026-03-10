import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import aboutImg from "@/assets/about-story.jpg";
import fieldImg from "@/assets/gallery-field.jpg";
import pressImg from "@/assets/gallery-press.jpg";
import { Leaf, Heart, ShieldCheck, Sun } from "lucide-react";

const About = () => (
  <Layout>
    {/* Header */}
    <section className="py-16 md:py-24 bg-muted">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <h1 className="text-foreground mb-5">About Frootcane</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We started with a simple idea: sugarcane juice shouldn't need anything added to it. No extra sugar, no water, no concentrates. Just the real thing, pressed fresh and served with care.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Origin story */}
    <section className="py-20 md:py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <SectionReveal>
          <img
            src={aboutImg}
            alt="Ginger lemon sugarcane juice on marble"
            className="rounded-2xl w-full object-cover aspect-[4/5] max-h-[480px]"
          />
        </SectionReveal>
        <SectionReveal className="text-center md:text-left">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-secondary mb-3 block">Our story</span>
          <h2 className="text-foreground mb-4">How it started</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Frootcane began in 2018 as a single juice cart at a weekend farmer's market. The idea was straightforward: source great sugarcane from local farms, press it right in front of people, and let the juice speak for itself.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It worked. People kept coming back — not because of clever marketing, but because they could taste the difference. Within a year, we'd opened our first café. Today we operate five locations, and every single one still presses juice fresh throughout the day.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Sourcing */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <SectionReveal className="order-2 md:order-1 text-center md:text-left">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-secondary mb-3 block">Sourcing</span>
          <h2 className="text-foreground mb-4">Where our cane comes from</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We work directly with a small network of farms within 80 kilometres of each of our locations. They grow sugarcane using sustainable methods — no synthetic pesticides, responsible water use, and crop rotation that keeps the soil healthy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We visit our farms regularly. It's not a marketing exercise — we genuinely need to know that the cane is growing well, harvested at the right time, and transported under proper conditions. Good juice starts in the field.
          </p>
        </SectionReveal>
        <SectionReveal className="order-1 md:order-2">
          <img
            src={fieldImg}
            alt="Sugarcane field at golden hour"
            className="rounded-2xl w-full object-cover aspect-[4/5] max-h-[480px]"
          />
        </SectionReveal>
      </div>
    </section>

    {/* Hygiene */}
    <section className="py-20 md:py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <SectionReveal>
          <img
            src={pressImg}
            alt="Sugarcane being pressed in a clean facility"
            className="rounded-2xl w-full object-cover aspect-[4/5] max-h-[480px]"
          />
        </SectionReveal>
        <SectionReveal className="text-center md:text-left">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-secondary mb-3 block">Hygiene</span>
          <h2 className="text-foreground mb-4">How we keep things clean</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Every stalk of sugarcane is washed and peeled before pressing. Our machines are disassembled and deep-cleaned twice daily, and our staff follow strict food-handling protocols.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We're transparent about this because it matters. If you visit one of our locations, you can watch the entire process from start to finish — that's by design.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Health benefits */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container max-w-3xl">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-3">Why sugarcane juice is good for you</h2>
            <div className="section-divider" />
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {[
              "Natural source of iron, calcium, and magnesium",
              "Contains antioxidants and flavonoids",
              "Provides sustained energy without the crash",
              "Supports healthy digestion and liver function",
              "Naturally hydrating with essential electrolytes",
              "Low glycemic index compared to processed sugar",
            ].map((benefit) => (
              <p key={benefit} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="text-secondary mt-0.5 shrink-0">—</span>
                {benefit}
              </p>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="text-foreground mb-3">What we stand for</h2>
            <div className="section-divider" />
          </div>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Leaf, title: "Sustainability", desc: "We partner with farms that care about the land as much as we do." },
            { icon: Heart, title: "Wellness", desc: "Every drink is meant to nourish — not just taste good." },
            { icon: ShieldCheck, title: "Transparency", desc: "Watch us make your juice. We have nothing to hide." },
            { icon: Sun, title: "Community", desc: "We buy local, hire local, and give back where we can." },
          ].map((v) => (
            <SectionReveal key={v.title}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary/12 text-secondary mb-3">
                  <v.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-foreground text-base mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container max-w-xl">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="text-foreground mb-3">Our journey so far</h2>
            <div className="section-divider" />
          </div>
        </SectionReveal>
        <div className="relative border-l border-primary/30 pl-8 space-y-8 ml-2">
          {[
            { year: "2018", text: "Started with one juice cart at a local farmer's market." },
            { year: "2019", text: "Opened our first permanent café in the city centre." },
            { year: "2021", text: "Grew to five locations across the metro area." },
            { year: "2023", text: "Introduced our signature blends and seasonal rotating menu." },
            { year: "2025", text: "Now serving over 10,000 customers every month." },
          ].map((m) => (
            <SectionReveal key={m.year}>
              <div className="relative">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                <span className="font-heading font-bold text-secondary text-xs uppercase tracking-wider">{m.year}</span>
                <p className="text-foreground mt-1 text-sm">{m.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
