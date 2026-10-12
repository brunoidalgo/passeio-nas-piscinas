import { Reveal } from "./Reveal";

type Props = {
  /** Parte do título em fonte manuscrita amarela (como "For Bookings" na referência) */
  script: string;
  title: string;
  /** Se o trecho manuscrito vem antes ou depois do título */
  scriptFirst?: boolean;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
  id?: string;
};

export function SectionTitle({ script, title, scriptFirst = false, sub, align = "center", dark = false, id }: Props) {
  const s = <span className="font-script font-normal text-sun-500">{script}</span>;
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <h2
        id={id}
        className={`text-3xl leading-tight font-bold text-balance sm:text-[2.6rem] ${dark ? "text-white" : "text-petrol-800"}`}
      >
        {scriptFirst ? (
          <>
            {s} {title}
          </>
        ) : (
          <>
            {title} {s}
          </>
        )}
      </h2>
      {sub && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/75" : "text-ink/65"}`}>{sub}</p>}
    </Reveal>
  );
}
