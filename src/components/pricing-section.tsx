"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";

interface Feature {
  name: string;
  desc?: string;
  progress: number; // 0 to 100
}

interface Plan {
  name: string;
  description: string;
  priceAnnual: number;
  priceQuarterly: number;
  normallyAnnual?: number;
  normallyQuarterly?: number;
  savePercentAnn?: number;
  saveAmountAnn?: number;
  isPopular?: boolean;
  buttonText: string;
  features: Feature[];
}

const plans: Plan[] = [
  {
    name: "GreyOak Compass",
    description: "Simple, guided market intelligence",
    priceAnnual: 5999,
    priceQuarterly: 1999,
    buttonText: "Get GreyOak Compass",
    features: [
      { name: "Weekly Picks", desc: "2 curated idea sets / week", progress: 28 },
      { name: "Model Selected Picks", desc: "5 model-filtered picks", progress: 22 },
      { name: "Horizon Behaviour", progress: 0 },
      { name: "Time-Frame View", progress: 0 },
      { name: "Yearly Quant Metrics", progress: 0 },
    ],
  },
  {
    name: "GreyOak Compass Pro",
    description: "Deeper research with more context",
    priceAnnual: 11999,
    priceQuarterly: 3999,
    normallyAnnual: 13999,
    saveAmountAnn: 2000,
    savePercentAnn: 14,
    buttonText: "Get GreyOak Compass Pro",
    features: [
      { name: "Weekly Picks", desc: "2 curated idea sets / week", progress: 100 },
      { name: "Model Selected Picks", desc: "5 model-filtered picks", progress: 100 },
      { name: "Horizon Behaviour", progress: 0 },
      { name: "Time-Frame View", progress: 0 },
      { name: "Yearly Quant Metrics", progress: 0 },
    ],
  },
  {
    name: "GreyOak Horizon",
    description: "Built for momentum and timing",
    priceAnnual: 17999,
    priceQuarterly: 5999,
    normallyAnnual: 23999,
    saveAmountAnn: 6000,
    savePercentAnn: 25,
    isPopular: true,
    buttonText: "Get GreyOak Horizon",
    features: [
      { name: "Weekly Picks", desc: "2 curated idea sets / week", progress: 100 },
      { name: "Model Selected Picks", desc: "5 model-filtered picks", progress: 100 },
      { name: "Horizon Behaviour", progress: 100 },
      { name: "Time-Frame View", progress: 100 },
      { name: "Yearly Quant Metrics", progress: 0 },
    ],
  },
  {
    name: "GreyOak Horizon Max",
    description: "Full access for serious users",
    priceAnnual: 24999,
    priceQuarterly: 8999,
    normallyAnnual: 35999,
    saveAmountAnn: 11000,
    savePercentAnn: 31,
    buttonText: "Get GreyOak Horizon Max",
    features: [
      { name: "Weekly Picks", desc: "2 curated idea sets / week", progress: 100 },
      { name: "Model Selected Picks", desc: "5 model-filtered picks", progress: 100 },
      { name: "Horizon Behaviour", progress: 100 },
      { name: "Time-Frame View", progress: 100 },
      { name: "Yearly Quant Metrics", progress: 100 },
    ],
  },
];

export const PricingSection = () => {
  const [billing, setBilling] = useState<"annual" | "quarterly">("annual");

  return (
    <section className="py-6 md:py-12 px-4 md:px-12 max-w-[1400px] mx-auto overflow-x-hidden md:overflow-visible">
      <div className="flex flex-col items-center">
        <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex items-center relative gap-1">
          <button
            onClick={() => setBilling("annual")}
            className={`px-4 md:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative z-10 flex items-center gap-2 ${
              billing === "annual" ? "text-white" : "text-white/40 hover:text-white"
            }`}
          >
            Annual
            <span className="bg-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border border-blue-500/30">
              Save up to 31%
            </span>
            {billing === "annual" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>

          <button
            onClick={() => setBilling("quarterly")}
            className={`px-5 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
              billing === "quarterly" ? "text-white" : "text-white/40 hover:text-white"
            }`}
          >
            Quarterly
            {billing === "quarterly" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        </div>
        <p className="text-white/30 text-[10px] md:text-[11px] tracking-tight mt-3">GST added at checkout</p>
      </div>

      {/* Grid Container with Snap Scroll on Mobile */}
      <div className="relative">
        <motion.div 
          className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible pt-12 md:pt-16 pb-16 lg:pb-0 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} billing={billing} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, billing }: { plan: Plan; billing: "annual" | "quarterly" }) => {
  const price = billing === "annual" ? plan.priceAnnual : plan.priceQuarterly;
  const normally = billing === "annual" ? plan.normallyAnnual : plan.normallyQuarterly;
  const monthly = Math.floor(price / (billing === "annual" ? 12 : 3));

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      // Disable hover lift on mobile/touch using a CSS class check or just relying on media queries
      className={`min-w-[80%] sm:min-w-[340px] lg:min-w-0 snap-center flex-shrink-0 relative group rounded-[32px] border transition-all duration-300 flex flex-col h-full ${
        plan.isPopular
          ? "bg-[#1E1E1E] border-amber-400/40 shadow-[0_0_40px_rgba(234,179,8,0.08)]"
          : "bg-[#121212] border-white/5 hover:border-white/10"
      } p-6 md:p-8 [&:not(:hover)]:translate-y-0`}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10 whitespace-nowrap">
          ✦ Most Popular ✦
        </div>
      )}

      {/* Header with fixed min-height for alignment */}
      <div className="mb-6 md:mb-8 min-h-[90px] md:min-h-[110px]">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{plan.name}</h3>
        <p className="text-white/60 text-xs md:text-[14px] leading-relaxed line-clamp-2 md:line-clamp-none">{plan.description}</p>
      </div>

      {/* Pricing with fixed min-height for alignment */}
      <div className="mb-8 min-h-[90px] md:min-h-[100px]">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC]">₹{price.toLocaleString()}</span>
          <span className="text-white/40 text-xs md:text-sm">/{billing === "annual" ? "yr" : "qtr"}</span>
          {normally && (
            <span className="text-white/30 text-[10px] md:text-xs line-through ml-1">₹{normally.toLocaleString()}</span>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between gap-1 flex-wrap min-h-[24px]">
          <div>
            <span className="text-white/70 text-[10px] md:text-xs font-medium">₹{monthly.toLocaleString()}</span>
            <span className="text-white/40 text-[9px] md:text-[10px] ml-1">/mo billable</span>
          </div>
          {billing === "annual" && plan.saveAmountAnn && (
            <span className="bg-amber-400/10 text-amber-400 text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-amber-400/20 flex-shrink-0">
              Save ₹{plan.saveAmountAnn.toLocaleString()} (–{plan.savePercentAnn}%)
            </span>
          )}
        </div>
      </div>

      {/* Features - Growing to push button to bottom */}
      <div className="space-y-6 mb-10 flex-grow">
        {plan.features.map((feature, fIdx) => (
          <div key={fIdx} className="space-y-3">
            <div className="flex items-start gap-3">
              <div className={`mt-0.5 rounded-full p-0.5 border ${feature.progress > 0 ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/5" : "text-white/10 border-white/5 bg-white/5"}`}>
                <Check className="w-3 md:w-3.5 h-3 md:h-3.5" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <span className={`text-sm md:text-base font-bold ${feature.progress > 0 ? "text-white/95" : "text-white/30"}`}>
                    {feature.name}
                  </span>
                  <Info className="w-3.5 md:w-4 h-3.5 md:h-4 text-white/10 hover:text-white/30 transition-colors" />
                </div>
                {feature.desc && (
                  <p className="text-[11px] md:text-[12px] text-white/50 mt-1 leading-relaxed font-medium">{feature.desc}</p>
                )}
              </div>
            </div>
            
            {/* Progress Bar with animation */}
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative group/progress">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${feature.progress}%` }}
                transition={{ duration: 1.2, delay: 0.1 + fIdx * 0.08, ease: "circOut" }}
                className={`absolute top-0 left-0 h-full rounded-full ${
                  feature.progress === 100 
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-400" 
                  : "bg-gradient-to-r from-amber-500/80 to-amber-400/80"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA - Uniform height and width */}
      <div className="mt-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full h-12 md:h-14 rounded-2xl font-bold text-xs md:text-sm transition-all flex items-center justify-center ${
            plan.isPopular
              ? "bg-amber-400 text-black shadow-[0_8px_16px_rgba(234,179,8,0.15)]"
              : "bg-white/5 text-white/90 border border-white/10 hover:bg-white/10"
          }`}
        >
          {plan.buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};
