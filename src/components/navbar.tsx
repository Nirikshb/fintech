"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
];

const secondaryLinks = [
  { name: 'Dashboard', href: '/dashboard' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const pathname = usePathname();

  const isExpandingGlobal = process.env.NEXT_PUBLIC_NAVBAR_EXPANDING === 'true';
  const isAboutPage = pathname === '/about';
  const shouldExpand = isExpandingGlobal || isAboutPage;

  useEffect(() => {
    setActivePath(pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-[padding] duration-150 ${scrolled ? 'p-0' : 'p-4 md:p-6'} pointer-events-none`}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className={`
          pointer-events-auto
          relative flex items-center justify-between
          transition-all duration-500 ease-in-out
          w-full px-4 md:px-8
          ${(scrolled && shouldExpand)
            ? 'max-w-full h-[64px] rounded-none border-b border-white/10 bg-[#0D0D0D] shadow-xl'
            : `max-w-[1400px] h-[64px] md:h-[72px] border-white/10 backdrop-blur-md shadow-2xl ${scrolled ? 'bg-[#0D0D0D]/95 rounded-b-[40px] rounded-t-none border-x border-b' : 'bg-[#0D0D0D]/80 rounded-[100px] border'}`
          }
        `}
      >
        {/* Desktop Left Section */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${activePath === link.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              onClick={() => setActivePath(link.href)}
            >
              <div className="relative px-4 py-2">
                {activePath === link.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </div>
            </Link>
          ))}
        </div>

        {/* Logo Middle (Desktop) / Left (Mobile) */}
        <div className="flex justify-center lg:flex-1">
          <Link href="/" className="flex items-center w-[150px] md:w-[200px] lg:w-[250px]">
            <Image
              src="/grey-logo.webp"
              alt="GreyOak Logo"
              width={500}
              height={200}
              className="object-contain w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center justify-end gap-4 flex-1">
          {secondaryLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white px-4 py-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#FFFFFF] text-[#1A1A1A] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-white/90 transition-all active:scale-95"
          >
            Contact
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tablet/Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[80px] right-0 w-[280px] bg-[#0D0D0D] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-6 lg:hidden"
            >
              <div className="flex flex-col gap-4">
                {[...navLinks, ...secondaryLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white/60 hover:text-white px-4 py-2 rounded-xl hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="flex items-center justify-between bg-white text-[#1A1A1A] text-lg font-semibold px-5 py-3 rounded-2xl mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}

