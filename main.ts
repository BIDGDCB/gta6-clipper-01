// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the YouTube video itself: this program only hands the video's
// address to the gate. It reads VIDEO.json from the repository root, checks
// that it holds a string "url" field, and writes the same bytes to the
// output directory. It prints nothing on success and exits non-zero when
// VIDEO.json is missing or malformed.
//
// The clip this entry hands in is clip.mp4 in this repository: a vertical
// 9:16 cut of Rockstar's official GTA VI Launch Trailer, opening on the
// dirt-bike jump over Vice City and closing with make.fun's pitch. The
// video goes up on YouTube as a public Short; VIDEO.json names its address.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'VIDEO.json');
let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`VIDEO.json could not be read from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error('VIDEO.json is not valid JSON');
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be an object with a string "url" field');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'VIDEO.json'), raw);
