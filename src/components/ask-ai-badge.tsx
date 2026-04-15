"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface AskAiBadgeProps {
  href?: string;
  className?: string;
}

export function AskAiBadge({ href = "/ai", className = "" }: AskAiBadgeProps) {
  return (
    <Link href={href} className={`inline-block group ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          flex items-center gap-3 p-1 overflow-hidden
          bg-white/5 border border-white/10 rounded-full
          backdrop-blur-md transition-all duration-300
          hover:bg-white/10 hover:border-white/20
        "
      >
        {/* New Tag */}
        <div className="bg-[#FF6B00] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg shadow-orange-500/20 uppercase tracking-tight">
          New
        </div>

        {/* Middle Text */}
        <span className="text-white/80 text-sm font-medium tracking-tight pr-1">
          Ask GreyOak AI
        </span>

        {/* Divider and Link */}
        <div className="flex items-center gap-2 pl-3 border-l border-white/10 py-1 pr-3">
          <span className="text-white/40 text-sm font-medium transition-colors group-hover:text-white/60">
            Join Us Now
          </span>
          <ChevronRight className="w-4 h-4 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white/60" />
        </div>
      </motion.div>
    </Link>
  );
}
