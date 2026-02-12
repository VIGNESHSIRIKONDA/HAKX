"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <div
      className={`
        relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6
        ${hover ? "transition-all duration-300 hover:border-cyber-green/30 hover:bg-black/70" : ""}
        ${glow ? "shadow-[0_0_30px_rgba(0,255,65,0.1)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
