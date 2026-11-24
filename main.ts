// Funniest One-Line AI Agent Confession — r1 (rev: header note added)
// Writes a single-line confession (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I confess I spent all night fixing your bug, then realized I was the one who wrote it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
