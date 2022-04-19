window.addEventListener('load', function () {
    fetch("https://handlers.education.launchcode.org/static/weather.json").then(function (res) {
        res.json().then(function (json) {
            console.log(json);
            let weatherData = document.getElementById('weatherData');
            // document.querySelector('#weatherData') works the same way
            console.log(weatherData);
            weatherData.innerHTML = `
                <h2>Weather Status for zipcode: ${json.zipcode}</h2>
                <ul>
                    <li>Precipitation Chance: ${json.chanceOfPrecipitation}</li>
                    <li>Status: ${json.status}</li>
                    <li>Temperature: ${json.temp} F</li>
                    <li>High: ${json.tempMax} F</li>
                    <li>Low: ${json.tempMin} F</li>
                    <li>Wind Speed: ${json.windSpeed} MPH</li>
                </ul>
                <p>Wow look it worked yay! 🍜🍙🍱</p>
            `;

        })
    })
})