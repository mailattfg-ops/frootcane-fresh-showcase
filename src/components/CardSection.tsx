import Image from "next/image";

export default function CardSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-2 sm:py-4">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="item-reveal">
          <h3 className="font-slab text-5xl font-bold tracking-[0.02em] text-[#2c6a1e] sm:text-6xl">
            About Frootcane
          </h3>
          <div className="mt-3 h-1 w-32 rounded-full bg-[#2c6a1e]" />
          <p className="mt-6 max-w-xl text-[1.03rem] leading-8 text-[#55634d]">
            Frootcane serves fresh sugarcane juice prepared in hygienic
            conditions with carefully selected ingredients. Every order is
            pressed fresh to keep taste natural, clean, and consistent.
          </p>
          <p className="mt-3 max-w-xl text-[1.02rem] leading-8 text-[#5f6d57]">
            Our team follows a strict process from cane selection to serving, so
            every cup delivers trusted quality and real flavor.
          </p>
        </div>

        <div className="relative item-reveal min-h-[24rem] sm:min-h-[29rem] lg:ml-6">
          <div className="absolute -right-16 top-3 h-72 w-72 rounded-[52%_48%_44%_56%/57%_44%_56%_43%] bg-[#efb09b]/80" />
          <div className="absolute -left-14 bottom-2 h-52 w-52 rounded-[50%_50%_65%_35%/42%_58%_42%_58%] bg-[#f1ba9f]/85" />

          <div className="absolute right-2 top-6 h-[17rem] w-[14rem] overflow-hidden rounded-[45%_55%_50%_50%/54%_44%_56%_46%] sm:h-[20rem] sm:w-[16rem]">
            <Image
              src="/images/gallery-1.jpg"
              alt="Frootcane team service"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-8 h-[18rem] w-[15rem] overflow-hidden rounded-[56%_44%_48%_52%/44%_56%_44%_56%] sm:h-[22rem] sm:w-[18rem]">
            <Image
              src="/images/about-cane.jpg"
              alt="Freshly pressed Frootcane"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-4 right-12 h-28 w-28 overflow-hidden rounded-full border-4 border-[#f7f3e6] sm:h-32 sm:w-32">
            <Image
              src="/images/contact-shop.jpg"
              alt="Frootcane counter"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
