"use client";

import { CERTIFICATION } from "@/lib/constants";
import { CertificateIcon } from "./ui/Icons";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Certification() {
  return (
    <section className="py-20 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyber-green/10 via-cyber-cyan/10 to-cyber-green/10 rounded-3xl blur-2xl animate-pulse" />
            
            <div className="relative text-center p-8 md:p-12 lg:p-16 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black border-2 border-white/10 hover:border-cyber-green/30 transition-colors duration-300">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-2xl bg-cyber-green/10 border-2 border-cyber-green/30 flex items-center justify-center">
                <CertificateIcon className="text-cyber-green animate-glow-pulse" size={44} />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                {CERTIFICATION.title}
                <span className="text-cyber-green">.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {CERTIFICATION.description}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
