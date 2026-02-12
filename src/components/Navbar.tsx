"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, FORM_URLS } from "@/lib/constants";
import { Button } from "./ui/Button";
import { TerminalIcon, MenuIcon, CloseIcon } from "./ui/Icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center group-hover:bg-cyber-green/20 transition-colors">
              <TerminalIcon className="text-cyber-green" size={20} />
            </div>
            <span className="text-xl font-bold text-white">
              HAKX<span className="text-cyber-green">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button href={FORM_URLS.enrollment} variant="primary" size="sm">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="text-white" size={20} />
            ) : (
              <MenuIcon className="text-white" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-gray-400 hover:text-white transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button href={FORM_URLS.enrollment} variant="primary" size="sm" className="mt-2">
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
