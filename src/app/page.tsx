"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AskAiBadge } from "@/components/ask-ai-badge";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <main className="min-h-screen bg-[#0D0D0D] selection:bg-white/10 overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center pt-36 md:pt-64 px-6 mb-32">
        <AskAiBadge className="mb-12" />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-5xl md:text-8xl font-bold text-center tracking-tighter text-white mb-12 max-w-4xl leading-[0.9]"
        >
          Where Money Grows
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-xl text-center text-white/40 text-lg md:text-xl leading-relaxed mb-16"
        >
          Quantitative intelligence for disciplined market participants.
          Advanced analytics powered by proprietary AI.
        </motion.p>

        {/* Perspective Image Block */}
        <div ref={containerRef} className="w-full max-w-6xl perspective-[1000px] px-4 md:px-0">
          <motion.div
            style={{
              rotateX: springRotateX,
              scale: springScale,
              opacity: opacity,
            }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl"
          >
            <Image
              src="/dashboard.png"
              alt="Dashboard Preview"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 border border-white/5 rounded-[inherit]" />
          </motion.div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              The GreyOak Framework
            </h2>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all active:scale-95 group"
            >
              Explore Products
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
              At GreyOak, we believe in clarity over noise. We deliver research-backed market frameworks and systematic insights.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our independent capital-intelligence firm simplifies complex market data into usable intelligence. We help you interpret market structure and shortlist opportunities with a disciplined, data-driven lens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Large (Capital that grows) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative group rounded-[40px] overflow-hidden bg-[#161616] border border-white/5 h-[450px] md:h-[700px]"
          >
            <div className="absolute inset-0">
              <Image
                src="/capital-growth.png"
                alt="Capital Growth"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition-colors duration-500" />
            </div>
            
            <div className="relative h-full flex flex-col justify-between p-8 md:p-16">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Capital that grows
              </h3>
              <div className="max-w-md">
                <p className="text-lg md:text-2xl text-white group-hover:text-white transition-colors font-extrabold mb-4">
                  GreyOak Compass
                </p>
                <p className="text-white/80 group-hover:text-white transition-colors leading-relaxed font-medium text-lg md:text-xl">
                  Deep intelligence for interpreting market structure and identifying core alpha opportunities in the Indian equity markets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            {/* Card 2: Small */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 bg-[#121212] border border-white/5 p-8 md:p-10 rounded-[40px] flex flex-col justify-between hover:bg-[#1A1A1A] transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-white leading-tight">
                Systematic<br />Horizons
              </h3>
              <p className="text-white/80 leading-relaxed mt-4 transition-colors group-hover:text-white font-medium">
                Horizon provides multi-horizon price inference for precision-led trading decisions and structural market views.
              </p>
            </motion.div>

            {/* Card 3: Small */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-[#121212] border border-white/5 p-8 md:p-10 rounded-[40px] flex flex-col justify-between hover:bg-[#1A1A1A] transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-white leading-tight">
                Independent<br />Intelligence
              </h3>
              <p className="text-white/80 leading-relaxed mt-4 transition-colors group-hover:text-white font-medium">
                Proprietary research designed for clarity over noise in complex market cycles. Clarity for disciplined participants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacing for scroll demo */}
      <div className="h-[20vh]" />
    </main>
  );
}

