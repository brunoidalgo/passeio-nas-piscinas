import Image from "next/image";
import { site } from "@/lib/site";
import { InstagramIcon } from "./InstagramIcon";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "#como-reservar", label: "Como reservar" },
  { href: "#pacotes-de-fotos", label: "Pacotes de fotos" },
  { href: "#galeria", label: "Fotos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Footer() {
  const { location } = site;
  return (
    <footer className="bg-petrol-800 pb-28 pt-16 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image src={site.logo.src} alt={site.name} width={site.logo.width} height={site.logo.height} className="h-16 w-auto" />
          <address className="mt-4 text-sm not-italic leading-relaxed">
            Passeio de jangada nas piscinas naturais
            <br />
            {location.beach}, {location.city} – {location.state}
            <br />
            {location.region}, {location.stateName}
          </address>
          {site.instagram && (
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sun-400"
            >
              <InstagramIcon className="size-5" />
              {site.instagramHandle}
            </a>
          )}
        </div>

        <nav aria-label="Rodapé">
          <p className="font-semibold text-white">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-sun-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-white">Reservas</p>
          <p className="mt-4 text-sm">Atendimento e reservas pelo WhatsApp.</p>
          <WhatsAppButton location="footer" className="mt-4">
            {site.whatsapp.display}
          </WhatsAppButton>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8">
        © {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
