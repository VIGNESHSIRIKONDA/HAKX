import { OFFERINGS, FORM_URLS } from "@/lib/constants";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { LockIcon, GearIcon, SchoolIcon, CheckIcon } from "./ui/Icons";

const iconMap = {
  lock: LockIcon,
  gear: GearIcon,
  school: SchoolIcon,
};

export function Offerings() {
  return (
    <section id="offerings" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Offer"
          subtitle="Comprehensive cyber security training programs designed for every skill level"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Full Program Card */}
          <Card className="flex flex-col" glow>
            <div className="w-12 h-12 rounded-lg bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center mb-6">
              <LockIcon className="text-cyber-green" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {OFFERINGS[0].title}
            </h3>
            <p className="text-gray-400 mb-6">{OFFERINGS[0].description}</p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Duration</span>
                <span className="text-white">{OFFERINGS[0].details?.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Level</span>
                <span className="text-white">{OFFERINGS[0].details?.level}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Mode</span>
                <span className="text-white">{OFFERINGS[0].details?.mode}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Focus</span>
                <span className="text-cyber-green">{OFFERINGS[0].details?.focus}</span>
              </div>
            </div>

            <div className="p-4 bg-cyber-green/5 border border-cyber-green/20 rounded-lg mb-6">
              <p className="text-sm text-gray-300">
                <span className="text-cyber-green font-semibold">Outcome:</span>{" "}
                {OFFERINGS[0].outcome}
              </p>
            </div>

            <div className="mt-auto">
              <Button href={FORM_URLS.enrollment} variant="primary" className="w-full">
                Enroll Now
              </Button>
            </div>
          </Card>

          {/* Mini Courses Card */}
          <Card className="flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center mb-6">
              <GearIcon className="text-cyber-cyan" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {OFFERINGS[1].title}
            </h3>
            <p className="text-gray-400 mb-6">{OFFERINGS[1].description}</p>

            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3">Examples:</p>
              <ul className="space-y-2">
                {OFFERINGS[1].examples?.map((example, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckIcon className="text-cyber-cyan" size={16} />
                    {example}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3">Perfect for:</p>
              <ul className="space-y-2">
                {OFFERINGS[1].perfectFor?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <Button href={FORM_URLS.enrollment} variant="secondary" className="w-full">
                Explore Courses
              </Button>
            </div>
          </Card>

          {/* Workshops Card */}
          <Card className="flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <SchoolIcon className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {OFFERINGS[2].title}
            </h3>
            <p className="text-gray-400 mb-4">{OFFERINGS[2].description}</p>

            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">For:</p>
              <ul className="space-y-1">
                {OFFERINGS[2].audiences?.map((audience, index) => (
                  <li key={index} className="text-sm text-gray-300">
                    • {audience}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              <span className="text-white">Duration:</span> {OFFERINGS[2].duration}
            </p>

            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Each workshop includes:</p>
              <ul className="space-y-2">
                {OFFERINGS[2].includes?.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckIcon className="text-purple-400 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <Button href={FORM_URLS.workshopEnquiry} variant="outline" className="w-full">
                Enquire for Workshop
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
