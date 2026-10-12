import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/** Verifica no build se um arquivo existe em /public (ex.: "/fotos/patacho-01.jpg"). */
export function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}
