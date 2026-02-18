import { WHY_HAKX } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CodeIcon, TargetIcon, UserIcon, BookIcon } from "./ui/Icons";

const iconMap = {
  code: CodeIcon,
  customize: TargetIcon,
  expert: UserIcon,
  beginner: BookIcon,
};

const colorMap = [
  { bg: "bg-red-50", text: "text-red-600", num: "text-red-600" },
  { bg: "bg-blue-50", text: "text-blue-600", num: "text-blue-600" },
  { bg: "bg-green-50", text: "text-green-600", num: "text-green-600" },
  { bg: "bg-purple-50", text: "text-purple-600", num: "text-purple-600" },
];

export function WhyHakx() {
  return (
    <section id="why-hakx" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title="What gives us an edge?"
            highlight="edge"
            subtitle="What sets us apart from traditional learning platforms"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_HAKX.points.map((point, index) => {
              const IconComponent = iconMap[point.icon as keyof typeof iconMap];
              const colors = colorMap[index % colorMap.length];
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 group bg-white h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-lg ${colors.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={colors.text} size={22} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1.5">{point.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Statement Box */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <p className="text-lg text-white/80 mb-3 leading-relaxed">
                  {WHY_HAKX.statement}
                </p>
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  {WHY_HAKX.emphasis}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-red-100 rounded-full opacity-60 -z-10" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-red-200 rounded-full opacity-40 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
