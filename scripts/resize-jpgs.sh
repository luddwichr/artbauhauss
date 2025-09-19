#!/bin/bash
sourcePath="$HOME/Downloads/sophiebauhaus/*.jpg"

echo "converting the following files"
echo $sourcePath

# cwebp documentation: https://developers.google.com/speed/webp/docs/cwebp?hl=de
# install cwebp via `sudo apt install webp`
for file in $sourcePath
do
  filename="${file##*/}"
  echo "${filename}" #Just some bugfixing code. Can be ignored.
  cwebp -short -resize 2000 0 -q 90 "$file" -o "../images/large/${filename%.*}.webp"
done