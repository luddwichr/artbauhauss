#!/bin/bash
sourcePath="$HOME/Downloads/artbauhauss/*.jpg"
magick mogrify -resize 300x -quality 70 -path ../images/small "$sourcePath"
magick mogrify -resize 500x -quality 70 -path ../images/medium "$sourcePath"
magick mogrify -resize 1500x -quality 70 -path ../images/large "$sourcePath"
