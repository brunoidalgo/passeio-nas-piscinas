/**
 * Gera bordas de "papel rasgado" (estilo da referência visual) de forma determinística,
 * para que o HTML do servidor e do navegador sejam sempre iguais.
 */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Caminho SVG (viewBox 0 0 1440 H) com a borda de cima rasgada e preenchido até embaixo. */
export function tornPath(seed = 7, height = 48, steps = 90) {
  const r = rng(seed);
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (1440 / steps) * i;
    const y = 6 + r() * (height * 0.55) + (i % 2 ? r() * 8 : 0);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M0,${height} L${pts.join(" L")} L1440,${height} Z`;
}

/**
 * clip-path em polígono com a borda DIREITA rasgada.
 * `base` = posição horizontal média da borda (em %).
 */
export function tornRightClip(seed = 3, base = 62, jitter = 4, steps = 40) {
  const r = rng(seed);
  const pts = ["0% 0%"];
  for (let i = 0; i <= steps; i++) {
    const y = (100 / steps) * i;
    const x = base + (r() - 0.5) * jitter * 2 + Math.sin(i / 3) * 1.5;
    pts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  pts.push("0% 100%");
  return `polygon(${pts.join(", ")})`;
}

/** clip-path com a borda de CIMA rasgada (usado no mobile). */
export function tornTopClip(seed = 5, base = 3, jitter = 2.5, steps = 30) {
  const r = rng(seed);
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (100 / steps) * i;
    const y = base + (r() - 0.5) * jitter * 2;
    pts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  pts.push("100% 100%", "0% 100%");
  return `polygon(${pts.join(", ")})`;
}
