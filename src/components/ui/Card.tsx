"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  bordered?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={`
        relative rounded-xl bg-white p-6 md:p-8
        ${bordered ? "border border-slate-200" : ""}
        ${hover ? "transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
