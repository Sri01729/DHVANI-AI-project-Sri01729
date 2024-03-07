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


var currentMood;
let selectedMood = '';

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

////////////////////////////////////////////////////////////////Mood button //////////////////////////////////////////////////////////////////

// const moods = ['Energetic', 'Calm', 'Anger', 'Sad', 'Happy']; // The list of moods
// let currentIndex = 0; // Starting index
// const scrollArea = document.getElementById('scrollArea');
// let startY;
// let isDragging = false;

// // Add a transition for smooth scrolling
// scrollArea.style.transition = 'transform 0.3s ease-out';

// // Function to update the mood and animate
// function updateMood(newIndex) {
//     const height = scrollArea.offsetHeight;
//     const offset = (currentIndex - newIndex) * height;
//     scrollArea.style.transform = `translateY(${offset}px)`;

//     setTimeout(() => {
//         scrollArea.classList.remove('animated');
//         scrollArea.style.transform = '';
//         scrollArea.innerText = moods[newIndex];
//         currentIndex = newIndex;
//     }, 300); // The timeout should match the CSS transition time
// }

// scrollArea.addEventListener('mousedown', (event) => {
//     startY = event.clientY;
//     isDragging = true;
//     // Disable the transition when starting to drag for instant response
//     scrollArea.style.transition = '';
//     event.preventDefault();
// });

// document.addEventListener('mousemove', (event) => {
//     if (isDragging) {
//         const currentY = event.clientY;
//         const diffY = currentY - startY;
//         scrollArea.style.transform = `translateY(${diffY}px)`;
//     }
// });

// document.addEventListener('mouseup', (event) => {
//     if (isDragging) {
//         const endY = event.clientY;
//         isDragging = false;
//         // Re-enable the transition for the smooth animation effect
//         scrollArea.style.transition = 'transform 0.3s ease-out';

//         // Determine direction and update mood
//         if (endY - startY > 0) {
//             updateMood((currentIndex + 1) % moods.length);
//         } else {
//             updateMood((currentIndex - 1 + moods.length) % moods.length);
//         }
//     }
// });




/////////////////////////////////////////////    Fetching  weather    ///////////////////////////////////////////////////

//Finding the latitudes and longitudes of the device



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

        let locationIcon = document.querySelector('.weather-icon');
        let value = document.querySelector('.default-value');
        let city = document.querySelector('.city');
        let minTemp = document.querySelector('.minTemp');
        let maxTemp = document.querySelector('.maxTemp');
        let temp = document.querySelector('.temp');

        //city name
        const cityName = forecastData.name;
        city.innerHTML = cityName;

        //min and max temp
        const tempMin = forecastData.main.temp_min;
        const tempMax = forecastData.main.temp_max;

        console.log(tempMin, tempMax);

        //Temp assign
        minTemp.innerHTML = tempMin;
        maxTemp.innerHTML = tempMax;

        // Clear any existing icons and default text
        locationIcon.innerHTML = '';
        value.innerHTML = '';

        let weatherData, icon;

        if (forecastData.weather.length > 0) {
            // Assuming you want the last weather condition
            const lastCondition = forecastData.weather[forecastData.weather.length - 1];
            weatherData = lastCondition.description;
            icon = lastCondition.icon;
            console.log("Weather conditions count: " + forecastData.weather.length);
        }

        // Extract and round the current temperature data
        const currentTemperature = Math.round(forecastData.main.temp);
        temp.innerHTML = currentTemperature + "&deg";

        // Now set the innerHTML for both icon and value
        if (weatherData && icon) { // Ensure these are defined
            locationIcon.innerHTML = `<img src="assets/img/icons/${icon}.png" alt="${weatherData}">`;
            value.innerHTML = weatherData;
        }

        console.log(`Current temperature: ${currentTemperature}°C`);
        console.log(`Current weather: ${weatherData}`);


        const mood = classifyMusicMood(currentTemperature, weatherData);

        currentMood = mood;
        console.log("Mood set to:", currentMood);

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

// //Progress bar functionality

// if (song.play().then(() => {
//     // If playback was successful, set up an interval to update the progress bar.
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 500);
// }).catch(error => {
//     // Handle error (e.g., playback was not allowed).
//     console.error("Playback failed: ", error);
// }));


// progress.oninput = function () {
//     song.currentTime = progress.value;
//     song.play().then(() => {
//         ctrlIcon.classList.add("fa-pause");
//         ctrlIcon.classList.remove("fa-play");
//     }).catch(error => {
//         console.error("Playback failed on seeking", error);
//     });

// }

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
        return 'calm';

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

// Sending action
function updateSong(action, selectedMood) {
    fetch(`/DHVANI/models/fetch_songs.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=${action}&mood=${selectedMood}`
    })
        .then(response => response.text())
        .then(songPath => {
            console.log(songPath);
            console.log("Back from php function");
            document.getElementById('source').src = songPath;
            song.load();
            song.play();
        })
        .catch(error => console.error('Error:', error));
}

// Sending mood
function updateMood(mood) {
    fetch(`/DHVANI/models/fetch_songs.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `mood=${mood}`
    })
        .then(response => response.text())
        .then(songPath => {
            console.log(songPath);
            console.log("Back from php function");
            document.getElementById('source').src = songPath;
            song.load();
            song.play();
        })
        .catch(error => console.error('Error:', error));
}


///////////////////////////////// Mood selection button///////////////////////////////////////

document.querySelectorAll('input[name="switch"]').forEach(radio => {

    radio.addEventListener('click', function () {

        selectedMood = this.value;
        fetchSongByMood(selectedMood);
    });
});


function fetchSongByMood(mood) {
    // fetching a song based on mood from a database
    console.log(`Fetching song for mood: ${mood}`);

    // Example:
    switch (mood) {
        case 'happy':
            console.log('Playing Happy Song');
            updateMood('happy');
            break;
        case 'sad':
            console.log('Playing Sad Song');
            updateMood('sad');
            break;
        case 'calm':
            console.log('Playing calm Song');
            updateMood('calm');
            break;
        case 'anger':
            console.log('Playing anger Song');
            updateMood('anger');
            break;
        case 'surprise':
            console.log('Playing surprise Song');
            updateMood('surprise');
            break;
        default:
            console.log('Mood not recognized');
    }
}

// Selecting next and previous songs
document.getElementById('nextSong').addEventListener('click', function () {

    updateSong('next', selectedMood);
    console.log('Next song loaded');
    console.log('Mood is calm, so changing the song');

});
document.getElementById('prevSong').addEventListener('click', function () {

    updateSong('prev', selectedMood);
    console.log('Prev song loaded');
    console.log('Mood is happy, so changing the song');

});