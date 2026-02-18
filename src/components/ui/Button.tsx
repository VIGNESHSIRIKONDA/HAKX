"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md focus:ring-red-500",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md focus:ring-slate-500",
    outline:
      "bg-white text-slate-700 border-2 border-slate-200 hover:border-red-300 hover:text-red-600 focus:ring-red-500",
    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
