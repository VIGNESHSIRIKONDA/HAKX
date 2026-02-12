import { WHO_SHOULD_JOIN } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { UserIcon, UsersIcon, SchoolIcon, BuildingIcon } from "./ui/Icons";

const iconMap = {
  student: UserIcon,
  curious: UserIcon,
  college: UsersIcon,
  institution: BuildingIcon,
};

export function WhoShouldJoin() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={WHO_SHOULD_JOIN.title}
          subtitle={WHO_SHOULD_JOIN.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_SHOULD_JOIN.audiences.map((audience, index) => {
            const IconComponent = iconMap[audience.icon as keyof typeof iconMap] || UserIcon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-green/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center mb-4 group-hover:bg-cyber-green/20 transition-colors">
                  <IconComponent className="text-cyber-green" size={24} />
                </div>
                <p className="text-gray-300 font-medium">{audience.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
