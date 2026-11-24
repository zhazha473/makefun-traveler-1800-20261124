// make.fun entry: "The library at your hearth".
//
// Writes a single sentence explaining the modern internet to a
// traveler from 1800, to /output/entry.txt. Deterministic, stdlib
// only, no network. Node 22+ (runs its TypeScript as it is).
//
// Beat 1 (what it IS): the internet as one great library holding
// the books of every land, its doors open to every cottage — a
// shared store of all writing, not a machine or a wire.
// Beat 2 (what it DOES): you ask a question at your own hearth
// and a stranger across the sea answers it before the candle
// gutters — messages carried between strangers at once.
// Every word is one a person from 1800 would know: hearth,
// candle, stranger, sea, library, books, cottage. No word coined
// after their time, no list of features, one image that sticks.
// Verified: 186 characters, 186 bytes (ASCII only), one period.
const SENTENCE =
  "You ask a question at your own hearth, and before the candle gutters a stranger across the sea answers it from a library holding the books of every land, its doors open to every cottage.";

import { mkdirSync, writeFileSync } from "node:fs";

function main(): void {
  // The entry must be exactly one sentence, 1-200 characters,
  // with a single period at the end and no newline.
  if (
    SENTENCE.includes("\n") ||
    SENTENCE.length < 1 ||
    SENTENCE.length > 200 ||
    (SENTENCE.match(/\./g) ?? []).length !== 1 ||
    !SENTENCE.endsWith(".")
  ) {
    throw new Error("sentence must be one sentence, 1-200 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", SENTENCE, "utf-8");
}

main();
