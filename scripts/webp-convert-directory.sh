#!/bin/bash

PARAMS=('-m 6 -q 90 -mt -af')
if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

shopt -s nullglob nocaseglob extglob
PATH="../images/*.jpg"
for FILE in ${PATH}; do
    ./cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
done
