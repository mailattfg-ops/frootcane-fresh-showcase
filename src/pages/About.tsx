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
            We started in 2026 with a simple idea: a new juice shop built around healthy, high-quality sugarcane juice. No extra sugar, no water, no concentrates — just the real thing, pressed fresh and served with care.
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
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight">How it started</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Frootcane began in 2026 as a new local juice shop with a clear mission: serve clean, health-conscious sugarcane juice with reliable quality in every glass.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From day one, we focused on freshness, hygiene, and consistent taste. Every serving is prepared to order so customers can enjoy sugarcane juice that is naturally energizing and made with care.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Sourcing */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <SectionReveal className="order-2 md:order-1 text-center md:text-left">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-secondary mb-3 block">Sourcing</span>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight">Where our cane comes from</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We work with trusted local suppliers and choose fresh, quality sugarcane that meets our cleanliness and quality checks every day.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Good juice starts with good cane. That is why we inspect every batch before pressing and focus on consistency in taste, freshness, and quality.
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
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold tracking-tight">How we keep things clean</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Every stalk of sugarcane is washed and peeled before pressing. Our machines are cleaned and sanitized regularly, and our staff follow strict food-handling practices.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We keep the process transparent because quality and trust matter. Fresh, healthy juice begins with clean preparation.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Health benefits */}
    <section className="py-20 md:py-28 bg-muted">
      <div className="container max-w-3xl">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">Why sugarcane juice is good for you</h2>
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
              <p key={benefit} className="text-muted-foreground text-lg md:text-xl flex items-start gap-2">
                <span className="text-secondary mt-1 shrink-0 font-bold">—</span>
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
            <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">What we stand for</h2>
            <div className="section-divider" />
          </div>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Leaf, title: "Sustainability", desc: "We partner with suppliers that care about freshness and responsible practices." },
            { icon: Heart, title: "Wellness", desc: "Every drink is designed to support healthy refreshment." },
            { icon: ShieldCheck, title: "Quality", desc: "We maintain strict quality checks from cane selection to serving." },
            { icon: Sun, title: "Community", desc: "We serve our local community with honest service and real ingredients." },
          ].map((v) => (
            <SectionReveal key={v.title}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary/12 text-secondary mb-3">
                  <v.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-foreground text-xl font-extrabold mb-1.5">{v.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{v.desc}</p>
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
            <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">Our journey so far</h2>
            <div className="section-divider" />
          </div>
        </SectionReveal>
        <div className="relative border-l border-primary/30 pl-8 space-y-8 ml-2">
          {[
            { year: "2026", text: "Frootcane launched as a new juice shop in Guruvayoor, focused on fresh sugarcane juice." },
            { year: "2026", text: "Introduced a health-first menu made with quality ingredients and no artificial additives." },
            { year: "2026", text: "Built customer trust through clean hygiene practices and consistent juice quality." },
          ].map((m) => (
            <SectionReveal key={`${m.year}-${m.text}`}>
              <div className="relative">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                <span className="font-heading font-bold text-secondary text-base uppercase tracking-wider">{m.year}</span>
                <p className="text-foreground mt-1.5 text-lg md:text-xl leading-relaxed">{m.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
