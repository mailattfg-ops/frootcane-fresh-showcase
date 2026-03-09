import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import aboutImg from "@/assets/about-story.jpg";
import fieldImg from "@/assets/gallery-field.jpg";
import { Leaf, Heart, ShieldCheck, Sun } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", desc: "We work with local farmers who use sustainable practices." },
  { icon: Heart, title: "Wellness", desc: "Every drink is designed to nourish and energize naturally." },
  { icon: ShieldCheck, title: "Transparency", desc: "From field to glass, we never cut corners on quality." },
  { icon: Sun, title: "Community", desc: "Supporting local agriculture and healthy communities." },
];

const milestones = [
  { year: "2018", text: "Frootcane founded with a single juice cart." },
  { year: "2019", text: "Opened our first flagship café." },
  { year: "2021", text: "Expanded to 5 locations across the city." },
  { year: "2023", text: "Launched signature blends and seasonal menus." },
  { year: "2025", text: "Serving 10,000+ happy customers monthly." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionReveal>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground text-center mb-6">
            Our Story
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            Born from a passion for pure, natural refreshment, Frootcane is on a mission to bring the best sugarcane juice experience to everyone.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <SectionReveal>
          <img src={aboutImg} alt="Fresh juice" className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]" />
        </SectionReveal>
        <SectionReveal>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">From Farm to Glass</h2>
          <p className="text-muted-foreground mb-4">
            We source our sugarcane from trusted local farms that practice organic and sustainable agriculture. Every stalk is hand-selected, cleaned under strict hygiene protocols, and pressed fresh — never stored, never processed.
          </p>
          <p className="text-muted-foreground">
            Our commitment to quality means you taste the real thing: pure sugarcane juice with all its natural vitamins, minerals, and electrolytes. No water, no sugar, no preservatives — just nature's energy drink.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Health Benefits */}
    <section className="py-20 bg-muted">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <SectionReveal>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Health Benefits</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> Rich in natural antioxidants and flavonoids</li>
            <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> Natural source of iron, magnesium, and calcium</li>
            <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> Boosts energy without the sugar crash</li>
            <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> Supports liver health and digestion</li>
            <li className="flex items-start gap-2"><span className="text-secondary font-bold">•</span> Natural hydration with essential electrolytes</li>
          </ul>
        </SectionReveal>
        <SectionReveal>
          <img src={fieldImg} alt="Sugarcane field" className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]" />
        </SectionReveal>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-background">
      <div className="container max-w-2xl">
        <SectionReveal>
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
        </SectionReveal>
        <div className="relative border-l-2 border-primary/40 pl-8 space-y-10">
          {milestones.map((m) => (
            <SectionReveal key={m.year}>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                <span className="font-heading font-bold text-secondary text-sm">{m.year}</span>
                <p className="text-foreground mt-1">{m.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-muted">
      <div className="container">
        <SectionReveal>
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <SectionReveal key={v.title}>
              <div className="bg-card rounded-xl p-6 text-center border border-border shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-secondary mb-3">
                  <v.icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
