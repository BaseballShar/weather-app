## What is this ?
This is a website for displaying comprehensive weather information in Hong Kong.

In the current stage, it has temperature, humidity, rain, wain, wind ... with hourly and daily forecast.

## Why are you building it ?
Originally wanted to learn and practice more web development skills (especially frontend for now), I went to gather weather information and try to render them nicely for easy viewing.

## It is any useful ?
Yes! Surprisingly. You can already use it for current weather report up to a few days in the future. The accuracy is as good as that from the Hong Kong Observatory.

## Any plans for the future ?
Many in fact, too many to write in this page. That being said, I will list out a few areas for immediate improvement.
1. Better direction indicator for wind: Perhaps an animated compass or format using bearing i.e. N35ºE
2. Weather according to user location: Instead of always retrieving for Hong Kong weather, user location can be inferred using IP address and fetch the corrosponding regional weather.
3. More language support: Traditional Chinese
4. More weather data types or even astronomical data, for example: Planetary data.

## Technical information
This is written using React and Next.js and hosted by GitHub pages. Tailwind is used to quickly prototype css styles and simplify syntax.

## Credits
The weather data comes from [Hong Kong Observatory](https://www.hko.gov.hk/en/weatherAPI/doc/files/HKO_Open_Data_API_Documentation.pdf) (9 days forecast and solar and lunar data) and [Open-meteo API](https://open-meteo.com/). Much appreciated for releasing detailed weather information with zero cost!
