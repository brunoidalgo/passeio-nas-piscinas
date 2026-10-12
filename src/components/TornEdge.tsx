import { tornPath } from "@/lib/torn";

type Props = {
  /** Cor do "papel" (classe de texto do Tailwind, ex.: "text-cream") */
  color: string;
  /** "top": borda no topo da seção; "bottom": borda invertida no fim da seção */
  position?: "top" | "bottom";
  seed?: number;
  className?: string;
};

/** Faixa de papel rasgado usada como transição entre seções. */
export function TornEdge({ color, position = "top", seed = 7, className = "" }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 z-10 h-6 w-full drop-shadow-[0_-3px_3px_rgba(0,0,0,0.08)] sm:h-10 ${
        position === "top" ? "bottom-full -mb-px" : "top-full -mt-px rotate-180"
      } ${color} ${className}`}
    >
      <path d={tornPath(seed)} fill="currentColor" />
    </svg>
  );
}
