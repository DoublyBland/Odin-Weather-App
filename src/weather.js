/* eslint-disable no-use-before-define */
// giphy api 'https://api.giphy.com/v1/gifs/translate?api_key=1L38tSodp5FjiQMzPw0scOynPBz3pJcy&s=cats'
// weather api 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

import { displayWeather } from './DOM';

function weatherAPI() {
  async function getWeather(search, unit) {
    const weatherKey = '94c6fe5bb7d5b91a97c4a52a524f40b9';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${weatherKey}&units=${unit}`);
      const responseRead = await response.json();
      console.log(responseRead);
      const weather = weatherObject(responseRead);
      displayWeather(weather);
    } catch (err) {
      console.log(err);
    }
  }

  function weatherObject(json) {
    const weather = {
      name: json.name,
      main: json.weather[0].main,
      skies: json.weather[0].description,
      temp: json.main.temp,
      feelsLike: json.main.feels_like,
      low: json.main.temp_min,
      high: json.main.temp_max,
      wind: json.wind.speed,
    };

    return weather;
  }

  function flipUnit(unit) {
    if (unit === 'imperial') {
      unit = 'metric';
    } else {
      unit = 'imperial';
    }
    return unit;
  }

  const searchBar = document.getElementById('search-bar');
  const searchBtn = document.getElementById('search-btn');
  const degreeBtn = document.getElementById('CtF');
  let unit = 'imperial';
  searchBtn.addEventListener('click', () => {
    const input = searchBar.value;
    if (input) {
      getWeather(input, unit);
    } else {
      console.log('no info');
    }
  });
  degreeBtn.addEventListener('click', () => {
    unit = flipUnit(unit);
    const input = document.getElementById('city').textContent;
    getWeather(input, unit);
  });
}

export { weatherAPI };
