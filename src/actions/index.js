import axios from 'axios';

const API_KEY = '4b614cdd2d47d0b14d3eb1dd90c3a095';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pe`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}