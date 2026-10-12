import Image from "next/image";
import { photos } from "@/lib/site";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

/** Faixa de fotos + banda amarela de chamada final (como "Follow Instagram" + "Subscribe Now" da referência). */
export function FinalCta() {
  const strip = photos.filter((p) => p.category !== "por-do-sol").slice(0, 8);

  return (
    <section aria-labelledby="cta-final" className="bg-cream pt-20">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-petrol-600">Momentos reais no Patacho</p>
        <ul className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3">
          {strip.map((p, i) => (
            <li key={p.src} className={`relative aspect-square overflow-hidden rounded-xl ${i >= 4 ? "hidden sm:block" : ""}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:640px) 12vw, 25vw" className="object-cover transition duration-500 hover:scale-110" />
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="relative mt-14 overflow-hidden bg-gradient-to-r from-sun-500 via-sun-400 to-sun-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
          <Reveal>
            <h2 id="cta-final" className="font-script text-4xl text-white drop-shadow-[0_2px_0_rgba(8,59,54,0.35)] sm:text-5xl">
              Reserve agora!
            </h2>
            <p className="mt-2 max-w-md font-medium text-petrol-900">
              Diga a data da sua viagem e quantas pessoas vão. Respondemos com o melhor horário de maré.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <WhatsAppButton location="final_cta" variant="petrol" size="lg" className="animate-float">
              Reservar meu passeio
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
