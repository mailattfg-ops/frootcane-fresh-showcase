export default function HygieneSection() {
  return (
    <section className="pt-6 sm:pt-7 lg:pt-8">
      <div className="reveal-up relative overflow-hidden rounded-4xl border border-green-100 bg-[#f5f2e4] p-8 shadow-[0_10px_24px_rgba(63,103,37,0.12)] sm:p-10 lg:p-12">
        <div className="absolute -left-10 top-4 h-40 w-40 rounded-full bg-green-200/22 blur-3xl" />
        <div className="absolute -right-8 bottom-2 h-36 w-36 rounded-full bg-lime-200/30 blur-2xl" />
        <h2 className="font-slab text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          We take hygiene seriously
        </h2>
        <p className="mt-5 max-w-3xl font-sans text-lg leading-8 text-gray-700">
          Every piece of sugarcane is washed, peeled, and inspected before it touches our press. Our equipment is
          cleaned and sanitised between each batch. We&apos;re not just making juice — we&apos;re building trust, one glass at a
          time.
        </p>
        <p className="mt-4 max-w-3xl font-sans text-base leading-7 text-gray-600">
          We keep the process transparent because quality and trust matter. Fresh, healthy juice begins with clean
          preparation.
        </p>
      </div>
    </section>
  );
}
