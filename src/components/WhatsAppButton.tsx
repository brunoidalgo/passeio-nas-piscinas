"use client";

import { trackWhatsAppClick } from "@/lib/tracking";
import { whatsappUrl, type CtaLocation } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  location: CtaLocation;
  children: React.ReactNode;
  message?: string;
  variant?: "primary" | "sun" | "light" | "petrol";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const variants = {
  primary:
    "bg-whatsapp text-white shadow-lg shadow-whatsapp/30 hover:bg-whatsapp-dark hover:shadow-xl hover:shadow-whatsapp/40",
  sun: "bg-sun-500 text-petrol-950 shadow-lg shadow-sun-500/30 hover:bg-sun-400",
  light: "bg-white text-petrol-800 shadow-lg hover:bg-petrol-50",
  petrol: "bg-petrol-700 text-white shadow-lg shadow-petrol-900/20 hover:bg-petrol-600",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function WhatsAppButton({
  location,
  children,
  message,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      data-cta-location={location}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-whatsapp ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      <span>{children}</span>
    </a>
  );
}
