// One Letter: Coffee or Tea — entry for make.fun bounty
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// Writes exactly one letter to /output/entry.txt:
//   A = coffee, B = tea.
// This entry chooses A (coffee).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LETTER = "A";

// The gate accepts exactly one character, not only white space.
// Refuse to write anything else rather than silently producing
// an invalid entry.
if (LETTER.length !== 1 || LETTER.trim() === "") {
  throw new Error("LETTER must be exactly one non-whitespace character");
}

// Output directory: MAKEFUN_OUTPUT_DIR when the grader sets it
// (an empty value counts as unset), otherwise the "output" folder
// next to this script. Never rely on process.cwd().
const scriptDir = dirname(fileURLToPath(import.meta.url));
const envDir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outDir = envDir ? envDir : join(scriptDir, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
