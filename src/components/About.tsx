import Image from "next/image";
import { Check } from "lucide-react";
import { included, photoCategories, photos, site } from "@/lib/site";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

const stats = [
  { value: 100, prefix: "+", suffix: " km", label: "de Maceió, no litoral norte" },
  { value: 4, suffix: "", label: "pacotes de fotos no passeio" },
  { value: 100, suffix: "%", label: "fotos reais do passeio" },
  { value: 1, suffix: " clique", label: "até o WhatsApp" },
];

/** Bloco "Sobre" em grade (bento), inspirado na segunda referência. */
export function About() {
  const featured = photos.find((p) => p.src.includes("jangada-a-vela-patacho-2")) ?? photos[0];
  const counts = photoCategories
    .map((c) => ({ ...c, n: photos.filter((p) => p.category === c.id).length }))
    .filter((c) => c.n > 0);

  return (
    <section id="sobre" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal>
            <span className="rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-petrol-600 shadow-sm">
              Sobre o Patacho
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-2xl leading-snug font-semibold text-petrol-900 text-balance sm:text-3xl md:ml-auto">
              O Patacho é mais que uma praia: é a{" "}
              <span className="font-script font-normal text-sun-500">água mais clara de Alagoas</span>, com
              piscinas naturais que surgem na maré baixa no coração da {site.location.region}.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Card escuro */}
          <Reveal className="flex flex-col justify-between rounded-[1.75rem] bg-petrol-900 p-7 text-white shadow-xl">
            <div>
              <p className="text-lg leading-relaxed text-white/85">
                Um passeio tradicional de jangada pelo mar calmo da {site.location.beach}, no seu ritmo:
                flutuar, ver os peixinhos de perto e{" "}
                <strong className="font-semibold text-white">voltar com as fotos mais bonitas da viagem.</strong>
              </p>
              <ul className="mt-6 space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-sun-400" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <WhatsAppButton location="about" variant="sun" className="mt-8 w-full">
              Quero reservar
            </WhatsAppButton>
          </Reveal>

          {/* Card com foto */}
          <Reveal delay={0.1} className="group relative min-h-[420px] overflow-hidden rounded-[1.75rem] shadow-xl">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(min-width:1024px) 33vw, 100vw"
              className="object-cover transition duration-1000 group-hover:scale-105"
            />
            <span className="absolute inset-x-5 top-5 rounded-full bg-white/25 py-3 text-center text-sm font-semibold text-white backdrop-blur-md">
              Feito para você
            </span>
          </Reveal>

          {/* Card de números */}
          <Reveal delay={0.2} className="rounded-[1.75rem] bg-white p-7 shadow-xl ring-1 ring-petrol-900/5">
            <p className="text-5xl font-bold text-petrol-800">
              <CountUp to={photos.length} />+
            </p>
            <p className="mt-1 font-semibold text-petrol-900">Fotos reais na galeria</p>
            <p className="mt-2 text-sm text-ink/60">
              Tiradas durante o passeio, para você ver exatamente o que vai encontrar.
            </p>
            <ul className="mt-6 space-y-3">
              {counts.map((c) => (
                <li key={c.id} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-3 text-sm">
                  <span className="truncate text-ink/70">{c.label}</span>
                  <span className="flex gap-1.5">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span key={i} className={`size-2.5 rounded-full ${i < c.n * 2 ? "bg-petrol-500" : "bg-petrol-100"}`} />
                    ))}
                  </span>
                  <span className="font-semibold text-petrol-800">{c.n}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Números em destaque */}
        <dl className="mt-16 grid grid-cols-2 gap-y-10 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-semibold tracking-tight text-petrol-900 sm:text-5xl">
                  {s.prefix}
                  <CountUp to={s.value} />
                  {s.suffix}
                </span>
                <span className="mt-2 block text-sm text-ink/60">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
