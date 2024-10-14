#!/bin/bash
sourcePath="$HOME/Downloads/sophiebauhaus/*.jpg"

# note: install magick via 
# magick mogrify -resize 300x -quality 90 -path ../images/small "$sourcePath"
#magick mogrify -resize 500x -quality 70 -path ../images/medium "$sourcePath"
#magick mogrify -resize 2000x -quality 80 -path ../images/tests/high-res "$sourcePath"

# cwebp docu: https://developers.google.com/speed/webp/docs/cwebp?hl=de
for file in $sourcePath
do
  filename="${file##*/}"
  echo "${filename}" #Just some bugfixing code. Can be ignored.
  cwebp -short -resize 2000 0 -q 90 "$file" -o "../images/large/${filename%.*}.webp"
done