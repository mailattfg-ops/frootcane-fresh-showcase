import Image from "next/image";
import Masonry from "@/components/ui/Masonry";

export default function JuicesSection() {
  const items = [
    {
      id: "1",
      img: "/images/about-cane.jpg",
      url: "#contact",
      height: 520,
    },
    {
      id: "2",
      img: "/images/gallery-1.jpg",
      url: "#contact",
      height: 340,
    },
    {
      id: "3",
      img: "/images/gallery-2.jpg",
      url: "#contact",
      height: 460,
    },
    {
      id: "4",
      img: "/images/contact-shop.jpg",
      url: "#contact",
      height: 360,
    },
    {
      id: "5",
      img: "/images/gallery-3.jpg",
      url: "#contact",
      height: 500,
    },
    {
      id: "6",
      img: "/images/gallery-1.jpg",
      url: "#contact",
      height: 320,
    },
    {
      id: "7",
      img: "/images/about-cane.jpg",
      url: "#contact",
      height: 420,
    },
    {
      id: "8",
      img: "/images/contact-shop.jpg",
      url: "#contact",
      height: 390,
    },
  ];

  return (
    <section className="bg-transparent pb-8 pt-6 sm:pb-9 sm:pt-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center sm:mb-7">
          <p className="font-condensed text-xl uppercase tracking-[0.2em] text-green-700">Gallery</p>
          <h2 className="mt-2 font-slab text-5xl font-bold text-[#1f2e18] sm:text-6xl">Frootcane Moments</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[1.06rem] leading-8 text-[#56614b]">
            A live look at our drinks, counter, and daily fresh sugarcane service.
          </p>
        </div>

        <div className="hidden lg:block">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>

        <div className="grid gap-4 lg:hidden">
          {items.slice(0, 4).map((item) => (
            <article key={item.id} className="item-reveal group relative h-64 overflow-hidden rounded-3xl border border-green-100 shadow-[0_10px_20px_rgba(43,95,30,0.12)]">
              <Image src={item.img} alt="Frootcane gallery" fill className="object-cover transition duration-700 group-hover:brightness-95" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
