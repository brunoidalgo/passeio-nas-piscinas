import { site } from "./site";

/** Onde o botão está na página — vira o parâmetro `cta_location` no GTM. */
export type CtaLocation =
  | "header"
  | "hero"
  | "steps"
  | "moments"
  | "about"
  | "gallery"
  | "why_us"
  | "sunset"
  | "faq"
  | "final_cta"
  | "floating"
  | "footer";

export function whatsappUrl(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
