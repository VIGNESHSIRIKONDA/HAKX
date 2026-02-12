import { TRAINERS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { UserIcon } from "./ui/Icons";

export function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Trainers"
          subtitle="Industry experts dedicated to your success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TRAINERS.map((trainer, index) => (
            <Card key={index} className="text-center" glow>
              {/* Profile Image Placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyber-green/20 to-cyber-cyan/20 border-2 border-cyber-green/30 flex items-center justify-center">
                <UserIcon className="text-cyber-green" size={40} />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {trainer.name}
              </h3>
              <p className="text-cyber-green font-medium mb-2">
                {trainer.title}
              </p>
              {trainer.experience && (
                <p className="text-sm text-gray-500 mb-4">
                  {trainer.experience}
                </p>
              )}
              <p className="text-gray-400">{trainer.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
