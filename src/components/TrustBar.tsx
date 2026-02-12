import { TRUST_ITEMS } from "@/lib/constants";
import {
  ShieldIcon,
  BuildingIcon,
  UsersIcon,
  CertificateIcon,
} from "./ui/Icons";

const iconMap = {
  shield: ShieldIcon,
  building: BuildingIcon,
  users: UsersIcon,
  certificate: CertificateIcon,
};

export function TrustBar() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-950 to-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center mb-4 group-hover:bg-cyber-green/20 group-hover:border-cyber-green/40 transition-all duration-300">
                  <IconComponent className="text-cyber-green" size={28} />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
