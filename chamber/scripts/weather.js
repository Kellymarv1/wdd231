// scripts/weather.js

// Select HTML elements in the weather card
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const forecastContainer = document.querySelector('#forecast-container');

// TODO: Replace with your own OpenWeatherMap API Key and your city's latitude/longitude
const apiKey = '1dea3dff3452d4a9af13c4857e8fa402';
const lat = 16.7735; // Example latitude (Change to your city)
const lon = -3.0074; // Example longitude (Change to your city)

// API URLs for current weather and 5-day / 3-hour forecast
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
   try {
       // 1. Fetch Current Weather
       const responseCurrent = await fetch(currentWeatherUrl);
       if (responseCurrent.ok) {
           const dataCurrent = await responseCurrent.json();
           displayCurrentWeather(dataCurrent);
       } else {
           throw new Error(await responseCurrent.text());
       }

       // 2. Fetch Forecast Data
       const responseForecast = await fetch(forecastUrl);
       if (responseForecast.ok) {
           const dataForecast = await responseForecast.json();
           displayForecast(dataForecast);
       } else {
           throw new Error(await responseForecast.text());
       }
   } catch (error) {
       console.error('Error fetching weather data:', error);
   }
}

function displayCurrentWeather(data) {
   const temp = Math.round(data.main.temp);
   currentTemp.textContent = temp;
   
   const desc = data.weather[0].description;
   // Capitalize each word in the description
   const capitalizedDesc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   captionDesc.textContent = capitalizedDesc;
   
   const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt', capitalizedDesc);
}

function displayForecast(data) {
   // OpenWeatherMap's free forecast endpoint returns 3-hour intervals (40 items for 5 days).
   // We filter for entries around 12:00 PM (12:00:00) each day to get a clean daily 3-day forecast.
   const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
   
   forecastContainer.innerHTML = '<h3>3-Day Forecast</h3>';
   
   forecastList.forEach(day => {
       const dateObj = new Date(day.dt * 1000);
       const options = { weekday: 'short', month: 'short', day: 'numeric' };
       const formattedDate = dateObj.toLocaleDateString('en-US', options);
       
       const temp = Math.round(day.main.temp);
       const desc = day.weather[0].description;
       
       const forecastDayElem = document.createElement('div');
       forecastDayElem.classList.add('forecast-item');
       forecastDayElem.innerHTML = `
           <p><strong>${formattedDate}:</strong> ${temp}&deg;C, ${desc}</p>
       `;
       forecastContainer.appendChild(forecastDayElem);
   });
}

// Run the fetch function
apiFetch();