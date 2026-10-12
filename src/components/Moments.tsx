"use client";

import Image from "next/image";
import { motion, type PanInfo } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { moments, photos } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { WhatsAppButton } from "./WhatsAppButton";

/** Carrossel em destaque (card central maior), inspirado nos "Popular Tours" da referência. */
export function Moments() {
  const [active, setActive] = useState(1);
  const n = moments.length;
  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  return (
    <section id="momentos" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-4 flex justify-center">
          <span className="rounded-full bg-petrol-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-petrol-600">
            O passeio
          </span>
        </Reveal>
        <SectionTitle
          script="Momentos"
          scriptFirst
          title="que você vai viver no Patacho"
          sub="Cada parada é um cenário pronto para a foto mais bonita da sua viagem."
        />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 h-[460px] max-w-5xl select-none sm:h-[500px]" aria-roledescription="carrossel">
            {moments.map((m, i) => {
              let offset = i - active;
              if (offset > n / 2) offset -= n;
              if (offset < -n / 2) offset += n;
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const photo = photos.find((p) => p.src === m.photo);

              return (
                <motion.article
                  key={m.title}
                  className="absolute left-1/2 top-0 h-full w-[250px] -ml-[125px] sm:w-[300px] sm:-ml-[150px]"
                  initial={false}
                  animate={{
                    x: `${offset * 68}%`,
                    scale: isActive ? 1 : 0.84 - (abs - 1) * 0.08,
                    opacity: abs > 2 ? 0 : 1,
                    zIndex: 10 - abs,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={onDragEnd}
                  onClick={() => !isActive && setActive(i)}
                  aria-hidden={!isActive}
                >
                  <div
                    className={`relative size-full overflow-hidden rounded-[1.75rem] border-4 bg-petrol-900 shadow-2xl transition-[border-color] duration-500 ${
                      isActive ? "border-white shadow-petrol-900/30" : "cursor-pointer border-white/60"
                    }`}
                  >
                    <Image
                      src={m.photo}
                      alt={photo?.alt ?? m.title}
                      fill
                      draggable={false}
                      sizes="300px"
                      className="pointer-events-none object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/95 via-petrol-950/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <h3 className="text-2xl font-bold">{m.title}</h3>
                      <p className={`mt-2 text-sm leading-relaxed text-white/80 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                        {m.text}
                      </p>
                      <ul className={`mt-3 space-y-1 text-xs transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                        {m.items.map((it) => (
                          <li key={it} className="flex items-center gap-2">
                            <Check className="size-3.5 text-sun-400" strokeWidth={3} /> {it}
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-4 transition-opacity duration-500 ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                        <WhatsAppButton
                          location="moments"
                          variant="light"
                          className="w-full"
                          message={`Olá! Vi o site e quero fazer o passeio de jangada no Patacho (gostei do momento "${m.title}"). Quais datas vocês têm?`}
                        >
                          Reservar
                        </WhatsAppButton>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Momento anterior"
            className="inline-flex size-12 items-center justify-center rounded-full border border-petrol-200 text-petrol-700 transition hover:bg-petrol-50"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {moments.map((m, i) => (
              <button
                key={m.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver ${m.title}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-sun-500" : "w-2.5 bg-petrol-200"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo momento"
            className="inline-flex size-12 items-center justify-center rounded-full border border-petrol-800 bg-petrol-800 text-white transition hover:bg-petrol-700"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
