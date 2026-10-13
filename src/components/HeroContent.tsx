"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { MapPin, Waves, Camera } from "lucide-react";
import { hero, site } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  { icon: MapPin, label: "Local", value: site.location.beach },
  { icon: Waves, label: "Passeio", value: "Jangada até as piscinas" },
  { icon: Camera, label: "Fotos", value: "4 pacotes de fotos" },
];

export function HeroContent() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-5xl px-4 pb-24 pt-28 text-center text-white sm:px-6">
      <motion.p
        {...fade(0.2)}
        className="mx-auto inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur sm:text-xs"
      >
        {hero.eyebrow}
      </motion.p>

      <motion.h1 {...fade(0.35)} className="mt-6 text-[2.5rem] leading-[1.05] font-bold [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] tracking-tight text-balance sm:text-6xl lg:text-7xl">
        Passeio de jangada nas{" "}
        <span className="font-script font-normal text-sun-400">piscinas naturais</span>{" "}
        do Patacho
      </motion.h1>

      <motion.p {...fade(0.55)} className="mx-auto mt-6 max-w-2xl text-base text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] sm:text-lg">
        {hero.sub}
      </motion.p>

      <motion.div {...fade(0.7)} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <WhatsAppButton location="hero" size="lg" className="w-full sm:w-auto">
          {hero.cta}
        </WhatsAppButton>
        <a
          href="#pacotes-de-fotos"
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 font-semibold uppercase tracking-wide text-petrol-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
        >
          Ver pacotes de fotos
        </a>
      </motion.div>

      {/* Cartão de informações (como a barra de busca da referência) */}
      <motion.ul
        {...fade(0.9)}
        className="mx-auto mt-12 grid max-w-3xl grid-cols-1 divide-y divide-petrol-100 rounded-2xl bg-white/95 text-left text-petrol-900 shadow-2xl backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {facts.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-center gap-3 px-5 py-4">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-sun-100 text-sun-600">
              <Icon className="size-5" />
            </span>
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-petrol-500">{label}</span>
              <span className="block text-sm font-semibold">{value}</span>
            </span>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
