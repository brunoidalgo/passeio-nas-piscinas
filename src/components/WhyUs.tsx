import { CheckCircle2, Waves } from "lucide-react";
import { site, tips, whyUs } from "@/lib/site";
import { Reveal } from "./Reveal";
import { TornEdge } from "./TornEdge";
import { WhatsAppButton } from "./WhatsAppButton";

/** Bloco verde com borda rasgada + telefone em destaque ("Why Choose Us / Call Us" da referência). */
export function WhyUs() {
  return (
    <section id="por-que" className="bg-cream pb-24 pt-32 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-b-[2rem] bg-petrol-700 px-6 pb-10 pt-8 text-white shadow-2xl shadow-petrol-900/20 sm:px-12 sm:pb-12">
            <TornEdge color="text-petrol-700" seed={41} />
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  <span className="font-script font-normal text-sun-400">Por que</span> reservar com a gente?
                </h2>
                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {whyUs.map((w) => (
                    <li key={w} className="flex items-center gap-2.5 text-white/90">
                      <CheckCircle2 className="size-5 shrink-0 text-sun-400" />
                      {w}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex gap-4 rounded-2xl bg-white/10 p-5">
                  <Waves className="mt-1 size-7 shrink-0 text-sun-400" />
                  <p className="text-sm leading-relaxed text-white/85">
                    <strong className="text-white">O passeio segue a maré.</strong> As piscinas naturais só
                    aparecem na maré baixa, então o horário muda a cada dia. Mande a data da sua viagem e
                    indicamos o melhor momento.
                  </p>
                </div>
              </div>

              <div className="text-center lg:border-l lg:border-white/15 lg:pl-10">
                <p className="font-script text-3xl text-sun-400">Chame no WhatsApp</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{site.whatsapp.display}</p>
                <WhatsAppButton location="why_us" variant="sun" size="lg" className="mt-6">
                  Falar agora
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Dicas */}
        <Reveal delay={0.1} className="mt-10">
          <h3 className="text-center text-lg font-bold text-petrol-800">Dicas para aproveitar o passeio</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {tips.map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl bg-white p-4 text-sm text-ink/75 shadow-sm ring-1 ring-petrol-900/5">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-sun-500" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
