"use client";

import { WHO_SHOULD_JOIN } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { UserIcon, UsersIcon, SchoolIcon, BuildingIcon } from "./ui/Icons";

const iconMap = {
  student: UserIcon,
  curious: UserIcon,
  college: UsersIcon,
  institution: BuildingIcon,
};

export function WhoShouldJoin() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title={WHO_SHOULD_JOIN.title}
            subtitle={WHO_SHOULD_JOIN.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {WHO_SHOULD_JOIN.audiences.map((audience, index) => {
            const IconComponent = iconMap[audience.icon as keyof typeof iconMap] || UserIcon;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div
                  className="p-5 md:p-6 rounded-xl bg-white/5 border-2 border-white/10 hover:border-cyber-green/40 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center h-full"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-cyber-green/10 border-2 border-cyber-green/20 flex items-center justify-center mb-4 group-hover:bg-cyber-green/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-cyber-green" size={24} />
                  </div>
                  <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">{audience.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
