/*
Note:
This webpage utilizes the weatherbit.io API for temperature display and changes
the background image based on the weather status

API documentaion: https://www.weatherbit.io/api/weather-current
*/

var tempDesc1 = document.querySelector("#temp-desc1");
var tempDesc2 = document.querySelector("#temp-desc2");
var tempDesc3 = document.querySelector("#temp-desc3");
var tempDesc4 = document.querySelector("#temp-desc4");
var weatherLocation = document.querySelector("#location");
var fahrStatus = true;
var celsStatus = false;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let api = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=4288f9d357724d24a12834ea394e91f3`;
            fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                // fahrenheit
                fahrTemp = Math.floor(data.data[0].temp*1.8)+32;
                tempDesc1.textContent = fahrTemp;
                tempDesc2.textContent = data.data[0].weather.description.toLowerCase();
                // celsius
                tempDesc3.textContent = data.data[0].temp
                tempDesc4.textContent = data.data[0].weather.description.toLowerCase();

                weatherLocation.textContent = `${data.data[0].city_name}, ${data.data[0].state_code}`;

                // background: hot, warm, cool, cold, rain, thunderstorms, fog, cloudy, sunny, snow
                // if = rain, thunderstorms, fog, snow
                // elif = hot, warm, cool, cold
                let weatherCode = data.data[0].weather.code;
                let weatherTemp = fahrTemp;

                console.log(weatherCode);

                switch (weatherCode) {
                    // documentation: https://www.weatherbit.io/api/codes

                    // thunderstorm
                    case 200: // thunderstorm with light rain
                    case 201: // thunderstorm with with rain
                    case 202: // thunderstorm with heavy rain
                    case 230: // thunderstorm with light drizzle
                    case 231: // thunderstorm with drizzle
                    case 232: // thunderstorm with heavy drizzle
                    case 233: // thunderstorm with hail
                    document.body.style.backgroundImage = "url('thunderstorm.png')";
                    break;

                    // rainy
                    case 300: // light drizzle
                    case 301: // drizzle
                    case 302: // heavy drizzle
                    case 500: // light rain
                    case 501: // moserate rain
                    case 502: // moderate rain
                    case 511: // freezing rain
                    case 520: // light shower rain
                    case 521: // shower rain
                    case 522: // heavy shower rain
                    document.body.style.backgroundImage = "url('rainy.png')";
                    break;

                    // snow
                    case 600: // light snow
                    case 601: // snow
                    case 602: // heavy snow
                    case 610: // mix snow/rain
                    case 611: // sleet
                    case 612: // heavy sleet
                    case 621: // snow shower
                    case 622: // heavy snow shower
                    case 623: // flurries
                    document.body.style.backgroundImage = "url('snowy.png')";
                    break;

                    // fog
                    case 700: // mist
                    case 711: // smoke
                    case 721: // haze
                    case 731: // sand/dust
                    case 741: // fog
                    case 751: // frezing fog
                    document.body.style.backgroundImage = "url('foggy.png')";
                    break;

                    // nice, unknown, and default conditions
                    case 800: // clear sky
                    case 801: // few clouds
                    case 802: // scattered clouds
                    case 803: // broken clouds
                    case 804: // overcast clouds
                    case 900: // Unknown precipition
                    default:
                    if (weatherTemp <= 31) {
                        // cold
                        document.body.style.backgroundImage = "url('cold.png')";
                    } else if (32 <= weatherTemp && weatherTemp <= 70) {
                        // cool
                        document.body.style.backgroundImage = "url('cool.png')";
                    } else if (70 <= weatherTemp && weatherTemp <= 85) {
                        // warm
                        document.body.style.backgroundImage = "url('warm.png')";
                    } else if (86 <= weatherTemp) {
                        // sunny/hot
                        document.body.style.backgroundImage = "url('sunny.png')";
                    } 
                    break;
                };
            });
        });
    } else { 
        tempDesc1.textContent = "Geolocation is not supported by this browser.";
    }
});

const systemSwitch = () => {
    let tempF = document.getElementById("tempF");
    let tempC = document.getElementById("tempC");
    if (tempF.style.display === "none") {
        tempF.style.display = "block";
        tempC.style.display = "none";
    } else {
        tempF.style.display = "none";
        tempC.style.display = "block";
    }
};
