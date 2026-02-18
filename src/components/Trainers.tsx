import { TRAINERS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { UserIcon } from "./ui/Icons";

export function Trainers() {
  return (
    <section id="trainers" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title="Learn from renowned faculty"
            highlight="renowned faculty"
            subtitle="Industry experts dedicated to your cyber security career success"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TRAINERS.map((trainer, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 pb-16 relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <UserIcon className="text-white" size={40} />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="pt-16 pb-8 px-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-red-600 font-semibold text-sm mb-1">
                    {trainer.title}
                  </p>
                  {trainer.experience && (
                    <p className="text-slate-500 text-sm mb-4">
                      {trainer.experience}
                    </p>
                  )}
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {trainer.description}
                  </p>

                  {/* Specializations */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {trainer.specializations?.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-100"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
