import { Plus } from "lucide-react";
import { faq } from "@/lib/site";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function Faq() {
  return (
    <section id="duvidas" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <Reveal>
          <span className="rounded-full bg-petrol-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-petrol-600">
            Dúvidas frequentes
          </span>
          <h2 className="mt-5 text-3xl leading-tight font-bold text-petrol-800 text-balance sm:text-[2.6rem]">
            Tudo sobre o passeio <span className="font-script font-normal text-sun-500">de jangada</span> no Patacho
          </h2>
          <p className="mt-5 text-lg text-ink/65">Não encontrou sua resposta? Fale com a gente.</p>
          <WhatsAppButton location="faq" className="mt-7">
            Tirar dúvida no WhatsApp
          </WhatsAppButton>
        </Reveal>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05} y={16}>
              <details className="group rounded-2xl bg-cream px-5 py-1 ring-1 ring-petrol-900/5 open:bg-petrol-50 open:ring-petrol-200" name="faq">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-semibold text-petrol-900 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base sm:text-lg">{item.q}</h3>
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-sun-500 text-petrol-950 transition-transform duration-300 group-open:rotate-45">
                    <Plus className="size-4" strokeWidth={3} />
                  </span>
                </summary>
                <p className="pb-5 pr-12 leading-relaxed text-ink/70">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
