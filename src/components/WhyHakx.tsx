import { WHY_HAKX } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { CheckIcon, ShieldIcon } from "./ui/Icons";

export function WhyHakx() {
  return (
    <section id="why-hakx" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why HAKX ED TECH"
          subtitle="What sets us apart from traditional learning"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Points List */}
          <div className="space-y-6">
            {WHY_HAKX.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center shrink-0 group-hover:bg-cyber-green/20 transition-colors">
                  <CheckIcon className="text-cyber-green" size={20} />
                </div>
                <p className="text-lg text-gray-300 pt-2">{point}</p>
              </div>
            ))}
          </div>

          {/* Statement Box */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green/20 to-cyber-cyan/20 rounded-2xl blur-xl" />
            <div className="relative p-8 md:p-10 rounded-2xl bg-black border border-white/10">
              <div className="w-16 h-16 rounded-xl bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center mb-6">
                <ShieldIcon className="text-cyber-green" size={32} />
              </div>
              <p className="text-xl text-gray-400 mb-4">{WHY_HAKX.statement}</p>
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {WHY_HAKX.emphasis}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
