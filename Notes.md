# Backlog

- Determine font to use: https://fonts.google.com
- Make it clear to the user that gallery items can be clicked - e.g. show some info on mouse hover
- Use CloudFlare as CDN for performance: https://gist.github.com/cvan/8630f847f579f90e0c014dc5199c337b
    - configuration for domaindiscount24: https://www.domaindiscount24.com/faq/cname-eintrag
- Potential Domain registrars:
    - domaindiscount24: 2.32 € p.a., cf. https://www.domaindiscount24.com/de/de-domain
    - INWX: transfer fee: 4.54€, renew: 4.54€ c.f. https://www.inwx.de/de/domain/pricelist for .de
- for dare to express: is new layout of information ok?

# Converting images from jpg to webp

## Use script to converter entire directory

- Open a terminal, navigate to `scripts` directory.
- Run `./webp-convert-directory.sh` to convert all images in `images` directory.
- Adjust `PATH variable` to convert images in a different directory...

## Additional reading:

- get converter from here: https://developers.google.com/speed/webp/docs/precompiled
- instructions how to use the converter: https://developers.google.com/speed/webp/docs/usings