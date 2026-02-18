"use client";

import { WORK_WITH_US, FORM_URLS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ui/ScrollReveal";
import { BuildingIcon, ArrowRightIcon } from "./ui/Icons";

export function WorkWithUs() {
  return (
    <section id="workshops" className="py-20 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title={WORK_WITH_US.title}
            subtitle={WORK_WITH_US.subtitle}
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyber-green/20 rounded-3xl blur-xl opacity-50 animate-pulse" />
              
              <div className="relative p-6 md:p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-white/10 hover:border-cyber-green/20 transition-colors duration-300">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
                  {WORK_WITH_US.institutions.map((institution, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-white/5 border border-white/10 hover:border-cyber-green/30 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <BuildingIcon className="text-cyber-green shrink-0 group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-gray-300 text-xs md:text-sm font-medium">
                        {institution}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
                  {WORK_WITH_US.note}
                </p>

                <div className="text-center">
                  <Button
                    href={FORM_URLS.workshopEnquiry}
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    {WORK_WITH_US.cta}
                    <ArrowRightIcon
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
