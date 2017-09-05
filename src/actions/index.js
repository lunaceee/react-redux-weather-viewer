import axios from 'axios';

const API_KEY = '9aed95cf8c0b9e56367135cbec038681';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log('request', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}