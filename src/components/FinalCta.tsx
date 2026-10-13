import Image from "next/image";
import { photos, site } from "@/lib/site";
import { InstagramIcon } from "./InstagramIcon";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

/** Faixa de fotos + banda amarela de chamada final (como "Follow Instagram" + "Subscribe Now" da referência). */
export function FinalCta() {
  const strip = photos.filter((p) => p.category !== "por-do-sol").slice(0, 8);

  return (
    <section aria-labelledby="cta-final" className="bg-cream pt-20">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-petrol-600">Siga a gente no Instagram</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-2.5 font-semibold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5"
          >
            <InstagramIcon className="size-5" />
            {site.instagramHandle}
          </a>
        </div>
        <ul className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3">
          {strip.map((p, i) => (
            <li key={p.src} className={`relative aspect-square overflow-hidden rounded-xl ${i >= 4 ? "hidden sm:block" : ""}`}>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Ver mais fotos no Instagram ${site.instagramHandle}`} className="group block size-full">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:640px) 12vw, 25vw" className="object-cover transition duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 flex items-center justify-center bg-petrol-950/50 text-white opacity-0 transition group-hover:opacity-100">
                  <InstagramIcon className="size-7" />
                </span>
              </a>
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
