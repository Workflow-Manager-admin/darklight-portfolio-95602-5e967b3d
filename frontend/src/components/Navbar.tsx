"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import React, { useState } from "react";

// PUBLIC_INTERFACE
export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 z-30 bg-background/80 backdrop-blur sticky top-0 border-b border-black/5 dark:border-white/5">
      <div className="text-xl font-bold text-accent">
        <Link href="/" aria-label="Go to home">Portfolio</Link>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`hover:text-accent transition-colors font-medium ${
              pathname === link.href
                ? "text-accent"
                : "text-foreground"
            }`}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
      {/* Mobile menu */}
      <div className="md:hidden flex items-center">
        <ThemeToggle />
        <button
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-2 p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-foreground">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-y border-black/10 dark:border-white/10 shadow-lg z-40 flex flex-col items-center animate-in fade-in slide-in-from-top approx-gap-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 px-6 w-full text-center transition-colors ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-foreground"
                } font-medium hover:text-accent`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
