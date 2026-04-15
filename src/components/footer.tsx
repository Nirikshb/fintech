"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "GreyOak Compass", href: "/product" },
      { name: "GreyOak Horizon", href: "/product" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Intelligence",
    links: [
      { name: "Research", href: "/research" },
      { name: "Whitepapers", href: "/whitepapers" },
      { name: "Articles", href: "/blogs" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0D0D0D] via-[#3d190b] to-[#b85c34] pt-24 md:pt-32 pb-8 overflow-hidden border-t border-white/5">
      {/* Subtle Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Desktop & Mobile Grid Layout */}
        <div className="flex flex-col md:flex-row justify-between mb-24 md:mb-32">
          
          {/* Logo & Copyright Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col mb-16 md:mb-0"
          >
            <Link href="/" className="mb-4 inline-block hover:scale-105 transition-transform origin-left">
              <Image
                src="/grey-logo.webp"
                alt="GreyOak Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-white/40 text-sm font-medium mt-2">
              © {new Date().getFullYear()} GreyOak Capital
            </p>
          </motion.div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 border-t md:border-none border-white/5 pt-12 md:pt-0">
            {footerLinks.map((column, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="flex flex-col space-y-6"
              >
                <h4 className="text-white/40 text-sm font-semibold tracking-wider uppercase">
                  {column.title}
                </h4>
                <ul className="flex flex-col space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="text-white/80 hover:text-white transition-colors text-sm font-medium inline-block hover:translate-x-1 duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Giant Floor Typography with Subtle Lift */}
      <div className="w-full relative flex justify-center items-end select-none pointer-events-none mt-12 perspective-[1000px]">
        <motion.h1 
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, margin: "50px" }}
          transition={{ 
            type: "spring", 
            stiffness: 60, 
            damping: 20,
            duration: 0.8 
          }}
          className="text-[18vw] md:text-[18vw] font-black text-[#0D0D0D]/60 tracking-[0.02em] leading-[0.75] m-0 p-0 text-center uppercase"
          style={{ 
            textShadow: '0px 4px 20px rgba(0,0,0,0.5)',
            transform: 'scaleY(0.9)',
            transformOrigin: "bottom center"
          }}
        >
          GREYOAK
        </motion.h1>
      </div>
    </footer>
  );
}
