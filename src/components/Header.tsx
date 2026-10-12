"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Sailboat } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "#como-reservar", label: "Como reservar" },
  { href: "#momentos", label: "O passeio" },
  { href: "#galeria", label: "Fotos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 60));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-petrol-800/95 shadow-lg shadow-black/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#topo" className="flex items-center gap-2 text-white">
          <Sailboat className="size-6 text-sun-400" />
          <span className="font-script text-xl sm:text-2xl">{site.name}</span>
        </a>
        <nav aria-label="Seções" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition-colors hover:text-sun-400">
              {l.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton location="header" size="sm" className="sm:!px-5 sm:!py-2.5 sm:!text-sm">
          Reservar
        </WhatsAppButton>
      </div>
    </motion.header>
  );
}
