"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { photoCategories, photos, type PhotoCategory } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { TornEdge } from "./TornEdge";
import { WhatsAppButton } from "./WhatsAppButton";

type Filter = "todas" | PhotoCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("todas");
  const [open, setOpen] = useState<number | null>(null);

  // Só mostra filtros de categorias que já têm fotos
  const tabs = useMemo(
    () => photoCategories.filter((c) => photos.some((p) => p.category === c.id)),
    [],
  );
  const visible = useMemo(
    () => (filter === "todas" ? photos : photos.filter((p) => p.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : visible[open];
  const label = (c: PhotoCategory) => photoCategories.find((x) => x.id === c);

  return (
    <section id="galeria" className="relative bg-petrol-800 py-24 sm:py-28">
      <TornEdge color="text-petrol-800" seed={23} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          dark
          script="Galeria"
          scriptFirst
          title="de fotos reais do passeio"
          sub="Nada de banco de imagens: é exatamente esse mar que você vai encontrar no Patacho."
        />

        {/* Filtros */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {[{ id: "todas" as Filter, label: "Todas", note: undefined }, ...tabs].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setFilter(t.id)}
              aria-pressed={filter === t.id}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === t.id
                  ? "bg-sun-500 text-petrol-950"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              {t.label}
              {t.note && <span className="ml-1.5 text-xs font-normal opacity-70">({t.note})</span>}
            </button>
          ))}
        </Reveal>

        {/* Grade em colunas (masonry) */}
        <ul key={filter} className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {visible.map((p, i) => (
              <motion.li
                key={p.src}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={i === 0 && visible.length > 4 ? "col-span-2 row-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block size-full min-h-full overflow-hidden rounded-2xl border-4 border-white/90 shadow-lg sm:rounded-3xl"
                  aria-label={`Ampliar foto: ${p.alt}`}
                >
                  <span className="relative block aspect-[4/5] size-full">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes={i === 0 ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 33vw, 50vw"}
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-petrol-900 shadow">
                    {label(p.category)?.label}
                    {label(p.category)?.note && ` · ${label(p.category)?.note}`}
                  </span>
                </button>
              </motion.li>
            ))}
        </ul>

        <Reveal className="mt-14 text-center">
          <WhatsAppButton location="gallery" size="lg" variant="sun">
            Quero viver isso — falar no WhatsApp
          </WhatsAppButton>
        </Reveal>
      </div>

      <TornEdge color="text-petrol-800" position="bottom" seed={29} />

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Foto ampliada"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative h-[85svh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
            <p className="pointer-events-none absolute bottom-5 left-1/2 w-[90%] max-w-xl -translate-x-1/2 text-center text-sm text-white/75">
              {current.alt}
            </p>
            <button type="button" onClick={close} aria-label="Fechar" className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20">
              <X className="size-6" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Foto anterior" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:left-6">
              <ChevronLeft className="size-7" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Próxima foto" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-6">
              <ChevronRight className="size-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
