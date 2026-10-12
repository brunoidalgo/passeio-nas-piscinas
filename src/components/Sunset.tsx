import Image from "next/image";
import { Sunset as SunsetIcon } from "lucide-react";
import { photos, sunset } from "@/lib/site";
import { Parallax } from "./Parallax";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function Sunset() {
  const pics = photos.filter((p) => p.category === "por-do-sol").slice(0, 2);
  if (pics.length === 0) return null;

  return (
    <section aria-labelledby="por-do-sol" className="relative isolate overflow-hidden bg-gradient-to-br from-petrol-900 via-[#b4584a] to-[#f5a524] py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              <SunsetIcon className="size-4" /> Passeio à parte
            </span>
            <h2 id="por-do-sol" className="mt-5 text-3xl leading-tight font-bold text-balance sm:text-5xl">
              Passeio do <span className="font-script font-normal text-sun-300">pôr do sol</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{sunset.text}</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-9">
            <WhatsAppButton location="sunset" message={sunset.message} variant="light" size="lg">
              Perguntar sobre o pôr do sol
            </WhatsAppButton>
          </Reveal>
        </div>

        <div className="relative grid h-[520px] grid-cols-2 gap-4">
          {pics.map((p, i) => (
            <Parallax key={p.src} offset={i === 0 ? 30 : -30} className={`relative overflow-hidden rounded-[2rem] shadow-2xl ${i === 1 ? "mt-16" : "mb-16"}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
