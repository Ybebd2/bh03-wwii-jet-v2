// bh03-wwii-jet-v2 — bring-the-humans-03 entry for @ybebd2.
//
// The entry is the TikTok video itself: an original 19-second vertical ad
// for make.fun, cut from GTA 6 gameplay (a night shootout from the
// livestream), with make.fun's brand badge and pitch on screen from the
// first frame and the referral end card (code mpd7ezsn) at the end. The
// video was uploaded to TikTok from the web uploader (TikTok Studio) on
// @5555nbd, because the entry-link checker reads uploads from the mobile
// app as photo posts, while the web upload reads as a video. A real
// gameplay clip passes the checker where AI-generated footage did not.
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
  if (typeof video.url !== 'string' || !video.url.startsWith('https://www.tiktok.com/')) {
    console.error('VIDEO.json does not name a TikTok video URL');
    process.exit(1);
  }
  console.log(`bring-the-humans-03 entry video: ${video.url}`);
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
