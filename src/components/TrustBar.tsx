import { TRUST_ITEMS } from "@/lib/constants";
import {
  ShieldIcon,
  BuildingIcon,
  UsersIcon,
  CertificateIcon,
} from "./ui/Icons";
import { ScrollReveal } from "./ui/ScrollReveal";

const iconMap = {
  shield: ShieldIcon,
  building: BuildingIcon,
  users: UsersIcon,
  certificate: CertificateIcon,
};

export function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by Leading Institutions
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TRUST_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <div className="flex flex-col items-center text-center group p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-red-600" size={26} />
                  </div>
                  <h3 className="text-slate-900 font-semibold mb-1.5 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
