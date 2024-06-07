import moment from "moment";
export const weatherEmoji = {
  temperature: 127777,
  humidity: 128167,
  rain: 127783,
};

export function getWeatherIconURL(iconId) {
  return `https://www.weather.gov.hk/images/HKOWxIconOutline/pic${iconId}.png`;
}

/* From an array of hourly forecast, find the index of current time forecast in that array */
/* timeStrings: string representation of Hong Kong time fetched from meteoAPI */
export function getTimeIdx(timeStrings) {
  const times = timeStrings.map((time) => moment(time));
  const now = moment();
  const timeIdx = times.findIndex((time) => time >= now);
  return timeIdx;
}
