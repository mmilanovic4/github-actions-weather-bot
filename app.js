const fetch = require('node-fetch');
const telegram = require('node-telegram-bot-api');

require('dotenv').config();

const weatherToken = process.env.OPEN_WEATHER_API_TOKEN;

const bot = new telegram(process.env.TELEGRAM_TOKEN);

const weatherURL = new URL('http://api.openweathermap.org/data/2.5/weather');
weatherURL.searchParams.set('APPID', weatherToken);
weatherURL.searchParams.set('q', 'Belgrade,RS');
weatherURL.searchParams.set('units', 'metric');

const getWeatherData = async () => {
	const resp = await fetch(weatherURL.toString());
	const body = await resp.json();
	return body;
};

const generateWeatherMessage = weatherData => {
	const windSpeedRatio = 3.6; // 1 m/s = 3.6 km/h

	return `

Температура: ${weatherData.main.temp}°C

Минимална дневна: ${weatherData.main.temp_min}°C

Максимална дневна: ${weatherData.main.temp_max}°C

Влажност ваздуха: ${weatherData.main.humidity}%

Ветар: ${weatherData.wind.speed * windSpeedRatio} km/h

	`.trim();
};

const main = async () => {
	const weatherData = await getWeatherData();
	const weatherString = generateWeatherMessage(weatherData);

	bot.sendMessage(process.env.TELEGRAM_CHAT_ID, weatherString);
};

main();
