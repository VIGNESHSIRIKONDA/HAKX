"use client";

import { useState, useEffect } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { ScrollReveal } from "./ui/ScrollReveal";
import { StarIcon } from "./ui/Icons";

const TESTIMONIALS = [
  {
    quote: "HAKX's hands-on approach completely transformed my understanding of cyber security. The practical labs and real-world scenarios prepared me for my career better than any theoretical course could.",
    name: "Rahul Sharma",
    role: "Security Analyst",
    institution: "Graduate, IIT Delhi",
    avatar: "RS",
    rating: 5,
  },
  {
    quote: "The workshop conducted at our college was eye-opening. Students learned about actual cyber threats and defense mechanisms. Highly recommended for any institution serious about cyber awareness.",
    name: "Dr. Priya Patel",
    role: "HOD, Computer Science",
    institution: "VIT University",
    avatar: "PP",
    rating: 5,
  },
  {
    quote: "From knowing nothing about security to landing my first job in the field — HAKX made it possible. The trainers are incredibly knowledgeable and supportive throughout the journey.",
    name: "Amit Kumar",
    role: "Junior Pentester",
    institution: "Cleared CEH Certification",
    avatar: "AK",
    rating: 5,
  },
  {
    quote: "What sets HAKX apart is their customized syllabus for different streams. As a non-CS student, I appreciated how they made complex concepts accessible and practical.",
    name: "Sneha Reddy",
    role: "IT Security Intern",
    institution: "B.Com Graduate",
    avatar: "SR",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title="Hear from our graduates first hand"
            highlight="graduates"
            subtitle="Success stories from students and partner institutions"
          />
        </ScrollReveal>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-slate-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 leading-relaxed text-base flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">{testimonial.name}</p>
                    <p className="text-red-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-slate-400 text-xs">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <StarIcon key={i} className="text-yellow-400" size={16} />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-600 leading-relaxed text-sm flex-1 mb-5">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-xs">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-red-600 text-xs font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-red-600 w-7"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
