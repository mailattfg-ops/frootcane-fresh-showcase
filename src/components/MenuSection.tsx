"use client";

import { useState } from "react";
import { Flame, Sparkles, HeartPulse, RefreshCw } from "lucide-react";

interface MenuItem {
  name: string;
  price: number;
  category: "classics" | "spicy" | "healthy";
  description?: string;
  badge?: string;
  color?: string;
}

const menuItems: MenuItem[] = [
  // Classics & Flavours
  { name: "Normal Sugarcane Juice", price: 30, category: "classics", description: "Pure, freshly pressed sugarcane juice — simple and refreshing.", badge: "Popular", color: "from-lime-500/10 to-emerald-500/10 border-lime-200/60" },
  { name: "Sugarcane Mango", price: 60, category: "classics", description: "Sweet tropical mango pulp blended with fresh sugarcane juice.", color: "from-amber-400/10 to-orange-500/10 border-amber-200/60" },
  { name: "Sugarcane Mint", price: 50, category: "classics", description: "Refreshing garden mint leaves crushed with chilled sugarcane.", badge: "Refreshing", color: "from-emerald-400/10 to-teal-500/10 border-emerald-200/60" },
  { name: "Sugarcane Passion Fruit", price: 60, category: "classics", description: "Exotic, tangy passion fruit meets sweet sugarcane juice.", color: "from-yellow-400/10 to-amber-600/10 border-yellow-200/60" },
  { name: "Sugarcane Orange", price: 60, category: "classics", description: "Zesty orange citrus blended perfectly with sugarcane juice.", color: "from-orange-400/10 to-amber-500/10 border-orange-200/60" },
  { name: "Sugarcane Musambi", price: 50, category: "classics", description: "Sweet lime juice blended with freshly pressed sugarcane.", color: "from-lime-400/10 to-yellow-500/10 border-lime-200/60" },
  { name: "Sugarcane Grape", price: 40, category: "classics", description: "Juicy black grapes blended with refreshing sugarcane.", color: "from-purple-400/10 to-fuchsia-500/10 border-purple-200/60" },
  { name: "Sugarcane Apple", price: 70, category: "classics", description: "Crisp apple extract blended with our signature sugarcane juice.", color: "from-red-400/10 to-rose-500/10 border-red-200/60" },
  { name: "Sugarcane Anaar", price: 70, category: "classics", description: "Premium pomegranate seeds crushed with sugarcane juice.", badge: "Premium", color: "from-rose-500/10 to-red-600/10 border-rose-200/60" },
  { name: "Sugarcane Pineapple", price: 50, category: "classics", description: "Tropical pineapple slices blended for a sweet, tart kick.", color: "from-yellow-300/10 to-amber-500/10 border-yellow-100/60" },
  { name: "Sugarcane Chilli Lemon", price: 50, category: "classics", description: "Zesty lemon with a subtle hint of green chilli heat.", badge: "Local Fav", color: "from-lime-400/10 to-yellow-400/10 border-lime-200/60" },
  { name: "Sugarcane Nannari", price: 40, category: "classics", description: "Traditional sarsaparilla root syrup blended with sugarcane.", color: "from-amber-700/10 to-amber-900/10 border-amber-300/40" },
  { name: "Sugarcane Strawberry", price: 50, category: "classics", description: "Sweet, luscious strawberries blended with fresh sugarcane juice.", color: "from-pink-400/10 to-rose-500/10 border-pink-200/60" },
  { name: "Sugarcane Dragon Fruit", price: 70, category: "classics", description: "Vibrant pink dragon fruit pieces blended for a nutrient boost.", color: "from-fuchsia-500/10 to-pink-500/10 border-fuchsia-200/60" },
  { name: "Sugarcane Mixed Fruit", price: 80, category: "classics", description: "A nutrient-rich cocktail of fresh seasonal fruits and sugarcane.", badge: "Must Try", color: "from-violet-400/10 to-orange-400/10 border-violet-200/60" },

  // Spicy Specials
  { name: "Pineapple Chilli Cane", price: 60, category: "spicy", description: "Tropical pineapple juice with a punchy kick of green chilli.", color: "from-yellow-400/10 to-red-500/10 border-orange-200/60" },
  { name: "Mint Chilli Cane", price: 60, category: "spicy", description: "Cool mint meets spicy chilli for an unforgettable sweet-heat twist.", color: "from-emerald-400/10 to-red-500/10 border-red-200/60" },
  { name: "Orange Chilli Cane", price: 70, category: "spicy", description: "Zesty orange pulp with a warm green chilli infusion.", color: "from-orange-400/10 to-red-500/10 border-orange-300/60" },
  { name: "Mango Chilli Cane", price: 70, category: "spicy", description: "Sweet mango nectar hit with spicy chilli flakes and fresh juice.", badge: "Spicy Hit", color: "from-amber-400/10 to-red-600/10 border-amber-300/60" },
  { name: "Ginger Chilli Cane", price: 50, category: "spicy", description: "Double warmth: fresh ginger juice and spicy chilli combined.", color: "from-yellow-600/10 to-red-600/10 border-yellow-500/20" },

  // Healthy Blends
  { name: "Beetroot Healthy Cane", price: 60, category: "healthy", description: "Nutrient-packed beetroot extract blended with fresh sugarcane.", badge: "Superfood", color: "from-rose-700/10 to-purple-800/10 border-rose-300/40" },
  { name: "Carrot Healthy Cane", price: 70, category: "healthy", description: "Sweet carrot juice high in Vitamin A, blended fresh.", color: "from-orange-500/10 to-yellow-600/10 border-orange-300/60" },
  { name: "Amla Healthy Cane", price: 60, category: "healthy", description: "Vitamin-C rich Indian gooseberry blended for immune health.", badge: "Immunity", color: "from-lime-600/10 to-emerald-700/10 border-lime-300/50" },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<"all" | "classics" | "spicy" | "healthy">("all");

  const filteredItems = activeTab === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="font-condensed text-lg uppercase tracking-[0.2em] text-[#3c6a2f]">
            Fresh & Handcrafted
          </p>
          <h2 className="mt-2 font-slab text-5xl font-bold text-[#1f2e18] sm:text-6xl">
            Our Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#56614b]">
            Explore our range of freshly pressed sugarcane juices. From standard classics and tropical fruit blends to spicy infusions and wellness boosters.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 font-condensed text-sm font-bold tracking-wider uppercase transition duration-300 ${
              activeTab === "all"
                ? "bg-[#2c6a1e] text-white shadow-[0_8px_16px_rgba(44,106,30,0.25)]"
                : "border border-[#cfe1bd] bg-white text-[#2a4523] hover:bg-[#f3f9ed]"
            }`}
          >
            <RefreshCw size={14} className={activeTab === "all" ? "animate-spin-slow" : ""} /> All Juices
          </button>
          <button
            onClick={() => setActiveTab("classics")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 font-condensed text-sm font-bold tracking-wider uppercase transition duration-300 ${
              activeTab === "classics"
                ? "bg-[#2c6a1e] text-white shadow-[0_8px_16px_rgba(44,106,30,0.25)]"
                : "border border-[#cfe1bd] bg-white text-[#2a4523] hover:bg-[#f3f9ed]"
            }`}
          >
            <Sparkles size={14} /> Classics & Fruit Flavours
          </button>
          <button
            onClick={() => setActiveTab("spicy")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 font-condensed text-sm font-bold tracking-wider uppercase transition duration-300 ${
              activeTab === "spicy"
                ? "bg-[#c2410c] text-white shadow-[0_8px_16px_rgba(194,65,12,0.25)]"
                : "border border-[#fbcfe8] bg-white text-[#9a3412] hover:bg-[#fff7ed]"
            }`}
          >
            <Flame size={14} /> Spicy Specials
          </button>
          <button
            onClick={() => setActiveTab("healthy")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 font-condensed text-sm font-bold tracking-wider uppercase transition duration-300 ${
              activeTab === "healthy"
                ? "bg-[#0891b2] text-white shadow-[0_8px_16px_rgba(8,145,178,0.25)]"
                : "border border-[#cffafe] bg-white text-[#083344] hover:bg-[#ecfeff]"
            }`}
          >
            <HeartPulse size={14} /> Healthy Cane
          </button>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border bg-white/95 p-6 shadow-[0_10px_22px_rgba(43,95,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,95,30,0.1)] ${item.color || "from-lime-50/50 to-emerald-50/50 border-lime-100"}`}
            >
              {/* Decorative Subtle Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.color ? item.color.split(" ").slice(0, 2).join(" ") : "from-lime-50 to-emerald-50"}`} />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    {/* Item Name */}
                    <h3 className="font-slab text-xl font-bold text-[#1f2e18] group-hover:text-[#2c6a1e] transition-colors duration-300">
                      {item.name}
                    </h3>
                    {/* Badge */}
                    {item.badge && (
                      <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ${
                        item.category === "spicy" 
                          ? "bg-orange-100 text-orange-800 border border-orange-200" 
                          : item.category === "healthy" 
                          ? "bg-cyan-100 text-cyan-800 border border-cyan-200"
                          : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-[#56614b]">
                    {item.description || "Freshly crushed sugarcane extract, served iced and fresh on order."}
                  </p>
                </div>

                {/* Price block */}
                <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#cfe1bd]/60 pt-4">
                  <span className="text-xs uppercase tracking-widest text-[#728565] font-semibold">Price</span>
                  <span className="font-condensed text-2xl font-extrabold text-[#1f2e18]">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
