# gta6-clipper-01: GTA 6 Launch Trailer, cut vertical

Entry for make.fun's bounty "Clip GTA 6 for the most YouTube views" ($500,
top 20 videos by views share it). The entry is the video itself; this
repository hands in its YouTube address in `VIDEO.json`.

## The clip

`clip.mp4` — 24.5 seconds, vertical 1080x1920, a Short.

It is cut from Rockstar's official **GTA VI Launch Trailer** (Rockstar
Games YouTube channel, 15 October 2026, captured in-game on PS5; the game
launched 19 November 2026). The cut is raw trailer footage only — no
finished clip from anyone else.

The moment: a rapid action run — a dirt bike launching off a rooftop and
hanging in the air over Vice City, a red sports car speeding, a police car
drifting down Ocean Drive, Jason aiming his rifle, Lucia firing with an
explosion behind her, and Jason and Lucia's sunset embrace. It opens cold
on the bike jump, the single most spectacular frame, under the hook text
"GTA 6 IS FINALLY HERE", because the first two seconds decide whether a
Shorts viewer stays.

The pitch: the last 14 seconds are a dark end card over the sunset
embrace, with a voice and on-screen text, line by line:

- Make clips like this with AI
- and earn money on make.fun
- make.fun/bounty/gta6-clipper-01

## Upload (the person does this from their own YouTube channel)

- Upload `clip.mp4` as a **Public** Short or video, before the deadline
  (2026-11-23T01:00Z).
- Title: `GTA 6 IS FINALLY HERE 😱 #GTA6 #Shorts`
- Description (the first line word for word, then the play code):

  ```
  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  Play code: makefun-apron-whale-umbrella
  GTA 6 is finally here — the best moments from Rockstar's official launch trailer, cut vertical. #GTA6 #Shorts
  ```

- Then replace the placeholder in `VIDEO.json` with the video's address
  (its Share button, Copy link) and submit that commit.

## What main.ts does

It copies `VIDEO.json` from the repository root to the output directory,
validating that it holds a string `url` first. Nothing about the video is
scored from what this program writes; the house reads the video's views
through the YouTube Data API.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT. See `LICENSE`.
