"use client";

import Image from "next/image";
import { motion, type PanInfo } from "motion/react";
import { ArrowLeft, ArrowRight, Camera, Check, Sailboat } from "lucide-react";
import { useState } from "react";
import { photoPackages, photos } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * Pacotes de fotos feitos DURANTE o passeio de jangada (não são passeios separados).
 * Carrossel em destaque (card central maior), inspirado nos "Popular Tours" da referência.
 */
export function PhotoPackages() {
  const [active, setActive] = useState(0);
  const n = photoPackages.length;
  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  return (
    <section id="pacotes-de-fotos" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-petrol-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-petrol-600">
            <Camera className="size-3.5" /> Dentro do passeio de jangada
          </span>
        </Reveal>
        <SectionTitle
          script="Pacotes de fotos"
          scriptFirst
          title="do seu passeio no Patacho"
          sub="Durante o passeio de jangada, você escolhe o pacote de fotos que quer levar para casa. São 4 pacotes, todos feitos nas piscinas naturais, no mesmo passeio."
        />

        <Reveal delay={0.05} className="mx-auto mt-6 flex max-w-2xl items-start gap-3 rounded-2xl bg-sun-100 px-5 py-4 text-left text-sm text-petrol-900">
          <Sailboat className="mt-0.5 size-5 shrink-0 text-sun-600" />
          <p>
            <strong>Importante:</strong> os pacotes de fotos não são passeios separados. Eles acontecem
            dentro do passeio de jangada às piscinas naturais. É só dizer no WhatsApp qual pacote você quer.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 h-[480px] max-w-5xl select-none sm:h-[520px]" aria-roledescription="carrossel">
            {photoPackages.map((m, i) => {
              let offset = i - active;
              if (offset > n / 2) offset -= n;
              if (offset < -n / 2) offset += n;
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const photo = photos.find((p) => p.src === m.photo);

              return (
                <motion.article
                  key={m.title}
                  aria-label={`Pacote de fotos ${m.title}`}
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

                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-sun-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-petrol-950 shadow">
                      <Camera className="size-3.5" /> Pacote {i + 1}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-300">Pacote de fotos</p>
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
                          location="photo_packages"
                          variant="light"
                          className="w-full"
                          message={`Olá! Vi o site e quero saber mais sobre o pacote de fotos "${m.title}" do passeio de jangada no Patacho.`}
                        >
                          Saber mais
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
            aria-label="Pacote anterior"
            className="inline-flex size-12 items-center justify-center rounded-full border border-petrol-200 text-petrol-700 transition hover:bg-petrol-50"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {photoPackages.map((m, i) => (
              <button
                key={m.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver pacote ${m.title}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-sun-500" : "w-2.5 bg-petrol-200"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo pacote"
            className="inline-flex size-12 items-center justify-center rounded-full border border-petrol-800 bg-petrol-800 text-white transition hover:bg-petrol-700"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
