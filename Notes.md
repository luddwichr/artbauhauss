# Backlog

- Determine font to use: https://fonts.google.com
- Smooth scrolling to target for browsers other than modern Chrome/Firefox?
- Make it clear to the user that gallery items can be clicked - e.g. show some info on mouse hover
- Run google lighthouse on page to check for problems
- Use CloudFlare as CDN for performance: https://gist.github.com/cvan/8630f847f579f90e0c014dc5199c337bs
- Links in image descriptions needed? if so, assign not to innerText but innerHtml

# Converting images from jpg to webp:

## Use script to converter entire directory

- Open a terminal, navigate to `scripts` directory.
- Run `./webp-convert-directory.sh` to convert all images in `images` directory.
- Adjust `PATH variable` to convert images in a different directory...

## Additional reading:

- get converter from here: https://developers.google.com/speed/webp/docs/precompiled
- instructions how to use the converter: https://developers.google.com/speed/webp/docs/usings