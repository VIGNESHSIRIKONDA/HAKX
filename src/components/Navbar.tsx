"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, FORM_URLS } from "@/lib/constants";
import { Button } from "./ui/Button";
import { ShieldIcon, MenuIcon, CloseIcon } from "./ui/Icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors">
              <ShieldIcon className="text-white" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-tight tracking-tight">
                HAKX
              </span>
              <span className="text-[10px] font-semibold text-red-600 leading-none tracking-widest uppercase">
                ED TECH
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-slate-600 hover:text-red-600 transition-colors font-medium text-sm px-4 py-2 rounded-lg hover:bg-red-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button href={FORM_URLS.workshopEnquiry} variant="ghost" size="sm">
              Talk to Us
            </Button>
            <Button href={FORM_URLS.enrollment} variant="primary" size="sm">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="text-slate-700" size={20} />
            ) : (
              <MenuIcon className="text-slate-700" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 animate-fade-in-down">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-slate-600 hover:text-red-600 transition-colors font-medium py-3 px-3 rounded-lg hover:bg-red-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
                <Button href={FORM_URLS.workshopEnquiry} variant="outline" size="sm" className="w-full">
                  Talk to Us
                </Button>
                <Button href={FORM_URLS.enrollment} variant="primary" size="sm" className="w-full">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
