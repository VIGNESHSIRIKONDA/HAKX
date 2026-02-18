"use client";

import { Button } from "./ui/Button";
import { HERO_CONTENT, FORM_URLS } from "@/lib/constants";
import { ShieldIcon, CheckCircleIcon, PlayIcon } from "./ui/Icons";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50/30" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-50 border border-red-100">
              <ShieldIcon className="text-red-600" size={16} />
              <span className="text-sm font-semibold text-red-700">
                India&apos;s Leading Cyber Security Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Master{" "}
              <span className="text-red-600">cyber security</span>{" "}
              skills today
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl">
              {HERO_CONTENT.subheadline}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {HERO_CONTENT.badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="text-green-500 shrink-0" size={18} />
                  <span className="text-sm text-slate-600 font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button href={FORM_URLS.enrollment} variant="primary" size="lg">
                {HERO_CONTENT.ctaPrimary}
              </Button>
              <Button href={FORM_URLS.workshopEnquiry} variant="outline" size="lg">
                {HERO_CONTENT.ctaSecondary}
              </Button>
            </div>

            {/* Stats Mini */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-slate-900">50+</p>
                <p className="text-sm text-slate-500">Workshops</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl font-bold text-slate-900">1000+</p>
                <p className="text-sm text-slate-500">Students</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl font-bold text-slate-900">4+</p>
                <p className="text-sm text-slate-500">Years</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              {/* Featured Program Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <ShieldIcon className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Featured Program</p>
                      <p className="text-white font-bold text-lg">Full Cyber Security Program</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">End-to-end training from fundamentals to advanced</p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500 text-sm">Duration</span>
                    <span className="text-slate-900 font-semibold text-sm">45–90 Days</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500 text-sm">Level</span>
                    <span className="text-slate-900 font-semibold text-sm">Beginner to Advanced</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500 text-sm">Mode</span>
                    <span className="text-slate-900 font-semibold text-sm">Recorded (Instant Access)</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-slate-500 text-sm">Certification</span>
                    <span className="text-green-600 font-semibold text-sm">Industry Recognized</span>
                  </div>

                  <Button href={FORM_URLS.enrollment} variant="primary" size="md" className="w-full mt-2">
                    Enroll Now — Get Instant Access
                  </Button>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float">
                ⭐ Most Popular
              </div>

              {/* Video Preview Floating Card */}
              <div className="absolute -bottom-6 -left-8 bg-white rounded-xl shadow-xl border border-slate-100 p-4 flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <PlayIcon className="text-red-600 ml-0.5" size={20} />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">Watch Demo</p>
                  <p className="text-slate-500 text-xs">See what you&apos;ll learn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
