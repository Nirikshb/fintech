"use client";

import { useRef } from "react";
import Image from "next/image";
import { AskAiBadge } from "@/components/ask-ai-badge";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
      <section className="flex flex-col items-center pt-48 md:pt-64 px-6 mb-32">
        <AskAiBadge className="mb-12" />
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold text-center tracking-tighter text-white mb-12 max-w-4xl leading-[0.9]"
        >
          Where Money Grows
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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

      {/* Spacing for scroll demo */}
      <div className="h-[100vh]" />
    </main>
  );
}
