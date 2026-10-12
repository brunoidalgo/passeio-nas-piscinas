import { CalendarCheck, MessageCircle, Sailboat, Waves } from "lucide-react";
import { steps } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { WhatsAppButton } from "./WhatsAppButton";

const icons = [MessageCircle, CalendarCheck, Sailboat];

export function Steps() {
  return (
    <section id="como-reservar" className="relative bg-cream pb-24 pt-20 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="3 passos fáceis"
          script="para reservar"
          sub="Do primeiro “oi” no WhatsApp até o mergulho nas piscinas naturais."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 0.12}
                className="group relative rounded-3xl bg-white p-7 shadow-[0_12px_40px_-12px_rgba(11,74,68,0.18)] ring-1 ring-petrol-900/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-16px_rgba(11,74,68,0.3)]"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-petrol-700 text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="inline-flex size-14 items-center justify-center rounded-full border-2 border-dashed border-sun-500 text-sun-600 transition duration-700 group-hover:rotate-[360deg]">
                    <Icon className="size-6" />
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-petrol-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
              </Reveal>
            );
          })}
        </ol>

        {/* Faixa amarela (como o banner "48% off" da referência) */}
        <Reveal delay={0.1} className="mt-12">
          <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-gradient-to-r from-sun-500 to-sun-400 px-6 py-7 text-center shadow-xl shadow-sun-500/20 sm:flex-row sm:justify-between sm:px-10 sm:text-left">
            <Waves aria-hidden="true" className="absolute -left-6 -top-6 size-32 text-white/20" />
            <div className="relative flex flex-col items-center gap-4 sm:flex-row">
              <span className="text-5xl font-extrabold text-white drop-shadow-sm sm:text-6xl">100%</span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-petrol-900/70">Fotos reais do passeio</span>
                <span className="block font-script text-2xl text-petrol-900 sm:text-3xl">O mar que você vê é o mar que você vai viver</span>
              </span>
            </div>
            <WhatsAppButton location="steps" variant="petrol" className="relative shrink-0">
              Consultar datas
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
