"use client";

import { AnimatedCounter } from "./ui/AnimatedCounter";
import { ScrollReveal } from "./ui/ScrollReveal";

const STATS = [
  { value: 50, suffix: "+", label: "Workshops Delivered", icon: "📚" },
  { value: 1000, suffix: "+", label: "Students Trained", icon: "👨‍🎓" },
  { value: 15, suffix: "+", label: "Partner Institutions", icon: "🏛️" },
  { value: 4, suffix: "+", label: "Years Experience", icon: "⭐" },
];

export function Stats() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Numbers that speak for themselves
            </h2>
            <p className="text-slate-400 text-sm md:text-base">Our impact across India&apos;s educational landscape</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                <p className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
