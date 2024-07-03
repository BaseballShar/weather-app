## What is this ?
This is a [website](https://baseballshar.github.io/weather-app/) for displaying comprehensive weather information in your location.

## Features
- Hourly and daily weather forecast in high precision.
- Click on daily forecast for extended weather summary.
- Optimised layout according to screen sizes: phones, tablets and computers.
- Accurate moon phase widget.
- Support Traditional Chinese and English language.

## Why are you building it ?
I wanted to learn and practice more web development skills (especially frontend for now), I went to gather weather information and try to render them nicely for easy viewing.

## It is any useful ?
Yes! Surprisingly. You can use it for current weather report up to a few days in the future. The accuracy is as good as that from the Hong Kong Observatory.

## Any plans for the future ?
Many in fact, that being said, I will list out a few areas for immediate improvement.
- Light and dark mode
- More weather data types or even astronomical data, for example: Planetary data.

## Technical information
This is written using React and Next.js and hosted by GitHub pages. Tailwind is used to quickly prototype css styles and simplify syntax.

## Credits
- The weather data comes from [Hong Kong Observatory](https://www.hko.gov.hk/en/weatherAPI/doc/files/HKO_Open_Data_API_Documentation.pdf) (9 days forecast and solar and lunar data) and [Open-meteo API](https://open-meteo.com/). Much appreciated for releasing detailed weather information with zero cost!
- The reverse geocoding (Using latitude and longitude to find location) is provided by [Nominatim](https://nominatim.openstreetmap.org).
