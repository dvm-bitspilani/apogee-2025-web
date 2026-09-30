#!/bin/sh
set -eu
for file in public/videos/*.mov; do
  stem=${file%.mov}
  ffmpeg -hide_banner -loglevel error -y -i "$file" -vf 'scale=640:-2' -c:v libx264 -crf 27 -preset medium -movflags +faststart -an "$stem.mp4"
  ffmpeg -hide_banner -loglevel error -y -i "$file" -frames:v 1 -vf 'scale=640:-2' "$stem.png"
done
