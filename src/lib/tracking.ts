"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import type { CtaLocation } from "./whatsapp";

/**
 * Evento de conversão enviado ao dataLayer quando alguém clica para ir ao WhatsApp.
 *
 * No GTM:
 *  - Acionador: "Evento personalizado" com nome `whatsapp_click`
 *  - Variável de camada de dados: `cta_location`
 *  - Tags: Conversão do Google Ads + evento GA4 (veja PLANEJAMENTO.md)
 */
export function trackWhatsAppClick(location: CtaLocation) {
  if (!process.env.NEXT_PUBLIC_GTM_ID) {
    if (process.env.NODE_ENV === "development") {
      console.info("[GTM desativado] whatsapp_click", { cta_location: location });
    }
    return;
  }
  sendGTMEvent({
    event: "whatsapp_click",
    cta_location: location,
    link_url: "wa.me",
  });
}
