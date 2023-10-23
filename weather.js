let logo = document.getElementById('logo')


let cityvalue = document.getElementById('cityvalue')
let cityname = document.getElementById('cityname')
let countryname = document.getElementById('countryname')
let temperature = document.getElementById('temperature')
let humidity = document.getElementById('humidity')
let wind = document.getElementById('wind')
let weatherIcon = document.querySelector(".weather-icon")


let search = async () => {
    if (cityvalue.value.length == 0) {
        alert('please enter a city name')
    } else {
        //api call
        try {
            let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityvalue.value + '&units=metric&appid=1cb6532aea3c298a830a71380eace21e'
            let response = await fetch(url)
            let data = await response.json()
            cityname.textContent = data.name;
            countryname.textContent = data.sys.country;
            temperature.textContent = Math.round(data.main.temp);
            humidity.textContent = data.main.humidity + "%";
            wind.textContent = data.wind.speed + " km/h";
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "clouds.png"
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "clear.png"
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "rain.png"
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "drizzle.png"
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "mist.png"
            }

            document.querySelector(".box1").style.display = "block";

        } catch {
            alert('please enter a valid city name')
        }
    }

}


