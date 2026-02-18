"use client";

import { OFFERINGS, FORM_URLS } from "@/lib/constants";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { LockIcon, GearIcon, SchoolIcon, CheckIcon, ClockIcon, TrendingUpIcon } from "./ui/Icons";

const iconMap = {
  lock: LockIcon,
  gear: GearIcon,
  school: SchoolIcon,
};

const colorMap = {
  lock: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100", tag: "bg-red-600" },
  gear: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", tag: "bg-blue-600" },
  school: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", tag: "bg-purple-600" },
};

export function Offerings() {
  return (
    <section id="offerings" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title="Explore our most popular programs"
            highlight="most popular"
            subtitle="Comprehensive cyber security training programs designed for every skill level"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Full Program Card */}
          <ScrollReveal direction="up" delay={0}>
            <Card className="flex flex-col h-full relative overflow-hidden" hover>
              {/* Tag */}
              <div className="absolute top-0 right-0">
                <span className={`${colorMap.lock.tag} text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl`}>
                  {OFFERINGS[0].tag}
                </span>
              </div>

              <div className={`w-12 h-12 rounded-xl ${colorMap.lock.bg} flex items-center justify-center mb-5`}>
                <LockIcon className={colorMap.lock.text} size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {OFFERINGS[0].title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{OFFERINGS[0].description}</p>

              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon className="text-slate-400 shrink-0" size={16} />
                  <span className="text-slate-600">{OFFERINGS[0].details?.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <TrendingUpIcon className="text-slate-400 shrink-0" size={16} />
                  <span className="text-slate-600">{OFFERINGS[0].details?.level}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckIcon className="text-green-500 shrink-0" size={16} />
                  <span className="text-slate-600">{OFFERINGS[0].details?.focus}</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 border border-green-100 rounded-lg mb-6">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Outcome:</span> {OFFERINGS[0].outcome}
                </p>
              </div>

              <Button href={FORM_URLS.enrollment} variant="primary" className="w-full">
                Enroll Now
              </Button>
            </Card>
          </ScrollReveal>

          {/* Mini Courses Card */}
          <ScrollReveal direction="up" delay={100}>
            <Card className="flex flex-col h-full relative overflow-hidden" hover>
              <div className="absolute top-0 right-0">
                <span className={`${colorMap.gear.tag} text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl`}>
                  {OFFERINGS[1].tag}
                </span>
              </div>

              <div className={`w-12 h-12 rounded-xl ${colorMap.gear.bg} flex items-center justify-center mb-5`}>
                <GearIcon className={colorMap.gear.text} size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {OFFERINGS[1].title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{OFFERINGS[1].description}</p>

              <div className="mb-6 flex-1">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">What you&apos;ll learn</p>
                <ul className="space-y-2.5">
                  {OFFERINGS[1].examples?.map((example, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckIcon className="text-blue-500 shrink-0" size={16} />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Perfect for</p>
                <div className="flex flex-wrap gap-2">
                  {OFFERINGS[1].perfectFor?.map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Button href={FORM_URLS.enrollment} variant="outline" className="w-full">
                Explore Courses
              </Button>
            </Card>
          </ScrollReveal>

          {/* Workshops Card */}
          <ScrollReveal direction="up" delay={200}>
            <Card className="flex flex-col h-full relative overflow-hidden" hover>
              <div className="absolute top-0 right-0">
                <span className={`${colorMap.school.tag} text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl`}>
                  {OFFERINGS[2].tag}
                </span>
              </div>

              <div className={`w-12 h-12 rounded-xl ${colorMap.school.bg} flex items-center justify-center mb-5`}>
                <SchoolIcon className={colorMap.school.text} size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {OFFERINGS[2].title}
              </h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{OFFERINGS[2].description}</p>

              <div className="mb-4 flex-1">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">For</p>
                <ul className="space-y-2">
                  {OFFERINGS[2].audiences?.map((audience, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" />
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-slate-500 mb-4">
                <span className="font-semibold text-slate-700">Duration:</span> {OFFERINGS[2].duration}
              </p>

              <div className="mb-6">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Each workshop includes</p>
                <ul className="space-y-2">
                  {OFFERINGS[2].includes?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckIcon className="text-purple-500 mt-0.5 shrink-0" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href={FORM_URLS.workshopEnquiry} variant="outline" className="w-full">
                Enquire for Workshop
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
