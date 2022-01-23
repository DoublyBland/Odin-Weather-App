function displayWeather(weather) {
  console.log(weather);
  const cityDisplay = document.getElementById('city');
  const tempDisplay = document.getElementById('temp');
  const feelDisplay = document.getElementById('feel');
  const highLowDisplay = document.getElementById('high-low');
  const skyDisplay = document.getElementById('skies');
  const windDisplay = document.getElementById('wind');

  cityDisplay.textContent = weather.name;
  tempDisplay.textContent = `Temp: ${weather.temp}`;
  feelDisplay.textContent = `Feels Like: ${weather.feelsLike}`;
  highLowDisplay.textContent = `High/Low: ${weather.high}/${weather.low}`;
  skyDisplay.textContent = `Skies: ${weather.skies}`;
  windDisplay.textContent = `Wind: ${weather.wind}`;
  getGIF(weather.skies);
}

async function getGIF(search) {
  const img = document.querySelector('img');
  try {
    img.style.display = 'block';
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1L38tSodp5FjiQMzPw0scOynPBz3pJcy&s=${search}`, {
      mode: 'cors',
    });
    const imageData = await response.json();
    img.src = imageData.data.images.original.url;
  } catch (err) {
    img.style.display = 'none';
    console.log(err);
  }
}

export { displayWeather };
