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


//Sidebar navigaation working functionality
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("navlist").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.borderRight = "2px solid #604cff";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navlist").style.marginLeft = "0";
    document.getElementById("mySidenav").style.border = "none";
}

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


/////////////////////////////////////////////    Fetching  weather    ///////////////////////////////////////////////////

//Finding the latitudes and longitudes of the device

const weather = document.getElementById("circle1");
const mood = document.getElementById("circle2");

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
        console.log(`current weather: ${weatherData}`);

        weather.innerHTML = "<h1>" + currentTemperature + "&degC" + "</h1>" + "<p>" + weatherData + "</p>";

        classifyMusicMood(currentTemperature, weatherData);
    }
    catch (error) {
        throw new Error("Failed to fetch data. Please check your network connection and try again.");
    }

}


// music player functionality

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let songTitle = document.getElementById("song-name");
let songDescription = document.getElementById("artist-name");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {

    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Playing and pausing the song function
ctrlIcon.addEventListener('click', function () {

    if (ctrlIcon.classList.contains("fa-pause")) {

        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {

        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }

})

//Progress bar functionality


if (song.play().then(() => {
    // If playback was successful, set up an interval to update the progress bar.
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}).catch(error => {
    // Handle error (e.g., playback was not allowed).
    console.error("Playback failed: ", error);
}));


progress.oninput = function () {
    song.currentTime = progress.value;
    song.play().then(() => {
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }).catch(error => {
        console.error("Playback failed on seeking", error);
    });

}

/* ===========================Mood classification======================================*/

function classifyMusicMood(temperature, weatherType) {
    if (weatherType.includes('sun')) {
        if (temperature > 25) {
            return 'happy';
        } else if (temperature > 15) {
            return 'energetic';
        } else {
            return 'calm';
        }
    } else if (weatherType.includes('rain')) {
        if (temperature < 10) {
            return 'sad';
        } else {
            return 'calm';
        }
    } else if (weatherType.includes('snow')) {
        return 'calm';
    } else if (weatherType.includes('overcast')) {
        return 'sad';
    } else if (weatherType.includes('cloud') || weatherType.includes('fog')) {
        console.log('calm');
        circle2.innerHTML = "<h1>calm</h1>";

    } else if (temperature >= 20 || (weatherType.includes('clear') || weatherType.includes('partly cloudy'))) {
        console.log('Happy');
        circle2.innerHTML = "<h1>Happy 😄</h1>";
        return 'happy';

    } else {
        // Default mood for any other conditions
        return 'energetic';
    }
}

// Navigating through songs loop front to back

document.getElementById('nextSong').addEventListener('click', function () {
    window.location.href = '?action=next';
});
document.getElementById('prevSong').addEventListener('click', function () {
    window.location.href = '?action=prev';
});