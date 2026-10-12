"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { trackWhatsAppClick } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Botão fixo de WhatsApp: aparece depois que o visitante passa do hero. */
export function FloatingWhatsApp() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > window.innerHeight * 0.7));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("floating")}
          data-cta-location="floating"
          aria-label="Reservar pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/40 sm:bottom-8 sm:right-8 sm:size-16"
        >
          <span className="absolute inset-0 -z-10 animate-ping-slow rounded-full bg-whatsapp" />
          <WhatsAppIcon className="size-7 sm:size-8" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
