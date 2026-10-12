"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Distância (px) que o bloco sobe ao aparecer */
  y?: number;
  as?: "div" | "li" | "section" | "article";
};

/** Faz o conteúdo surgir suavemente quando entra na tela durante a rolagem. */
export function Reveal({ children, className, delay = 0, y = 32, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
