// //Lazy loading function
// window.addEventListener('load', function () {
//     var header = document.querySelector('.introHeader');
//     var introSection = document.querySelector('.intro');
//     if (header) {
//         header.style.visibility = 'visible';
//     }
//     if (introSection) {
//         introSection.style.visibility = 'visible';
//     }
// });

// // Hero intro transistion function
// window.addEventListener('click', function () {

//     var introSection = document.querySelector('.intro');
//     if (introSection) {
//         introSection.style.opacity = '1';
//         introSection.style.pointerEvents = 'all';
//         introSection.style.transition = 'opacity 1s ease';
//     }
//     var header = document.querySelector('header');
//     if (header) {
//         header.style.opacity = '1';
//         header.style.pointerEvents = 'all';
//     }
// }, { once: true });

//Swiper script for carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});


// music player functionality

let progress








/////////////////////////////////////////////    Fetching  weather    ///////////////////////////////////////////////////

//Finding the latitudes and longitudes of the device

const weather = document.getElementById("circle1");

document.addEventListener("DOMContentLoaded", getLocation());

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(latLongValues);
    }
}


function latLongValues(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // temperature.innerHTML = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    fetchWeather(lat, lon);
}

//Refactoring the JSON data i.e., coverting tinto text data

async function fetchData(apiEndPoint) {
    try {
        const response = await fetch(apiEndPoint);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.text(); // Read the response as text

        // Check if the response data is empty or doesn't start with '{' (indicating valid JSON).
        if (!responseData || responseData.trim().charAt(0) !== '{') {
            throw new Error('Invalid or empty JSON data received');
        }

        return JSON.parse(responseData);
    } catch (error) {
        console.error('Please check your network connection and try again.', error);
        throw error; // Re-throw the error to let the calling code handle it
    }
}

//Fetching the weather and temperature data
async function fetchWeather(lat, lon) {
    try {
        const apiKey = "410371bdd8392802b5a97ad8e847ebb9";
        const apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const forecastData = await fetchData(apiEndPoint);

        console.log(forecastData);

        // Extract the current temperature data
        const currentTemperature = Math.round(forecastData.main.temp_max) + 1;

        //Extract the weather data like rain, snow etc.,
        const weatherData = forecastData.weather[0].description;
        console.log(`current temperature: ${currentTemperature}`);
        console.log(`current weather: ${weather}`);

        weather.innerHTML = "<h1>" + currentTemperature + "&degC" + "</h1>" + "<p>" + weatherData + "</p>";

    }
    catch (error) {
        throw new Error("Failed to fetch data. Please check your network connection and try again.");
    }

}