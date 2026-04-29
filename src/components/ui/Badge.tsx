import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`font-mono text-xs text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded ${className}`}
    >
      {children}
    </span>
  );
}
