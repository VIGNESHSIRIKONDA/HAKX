"use client";

import { Button } from "./ui/Button";
import { TerminalIcon } from "./ui/Icons";
import { HERO_CONTENT, FORM_URLS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-green/5 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyber-cyan rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyber-green rounded-full animate-pulse delay-700" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-cyber-green/30 bg-cyber-green/5 text-cyber-green text-sm font-mono">
          <TerminalIcon size={16} />
          <span>HAKX ED TECH</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {HERO_CONTENT.headline}
          <span className="text-cyber-green">.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          {HERO_CONTENT.subheadline}
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {HERO_CONTENT.badges.map((badge, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-gray-300 border border-white/10 rounded-full bg-white/5"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={FORM_URLS.enrollment} variant="primary" size="lg">
            {HERO_CONTENT.ctaPrimary}
          </Button>
          <Button href={FORM_URLS.workshopEnquiry} variant="secondary" size="lg">
            {HERO_CONTENT.ctaSecondary}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-green rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
