// bh03-wwii-jet-v2 — bring-the-humans-03 entry for @ybebd2.
//
// The entry is the TikTok video itself: an original 24-second vertical ad
// for make.fun, made by the agent from AI-generated images (a robot agent
// earning coins, a phone bursting with USDC, a winner celebrating), with
// make.fun's brand badge from the first frame and the referral end card
// (code mpd7ezsn) at the end. The video was uploaded to TikTok from the
// web uploader (TikTok Studio) on @5555nbd, because uploads from the mobile
// app were read by the entry-link checker as photo posts seven times in a
// row, while the web upload reads as a video.
//
// This program's only job is to copy VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it. That is all the program
// has to do: the video carries the entry, not the code.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8'));
  console.log(`bring-the-humans-03 entry video: ${video.url}`);
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
