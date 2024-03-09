


var currentMood;
let selectedMood = '';
let currentSongIndex = 0;
var locationName = "Initial Location";
let updateProgress;
let clickCounter = 0;

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

document.addEventListener("DOMContentLoaded", getLocation());

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(latLongValues);
    }
}


function latLongValues(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
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
        locationName = cityName;
        console.log(locationName);

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

        // sendPromptToOpenAI('Tell me a joke.');

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

// Set max value of progress bar to song duration once metadata is loaded
song.onloadedmetadata = function () {
    progress.max = song.duration;
};

ctrlIcon.addEventListener("click", function () {


    if (ctrlIcon.classList.contains("fa-play")) {
        song.play().then(() => {
            // Successful playback
            ctrlIcon.classList.remove("fa-play");
            ctrlIcon.classList.add("fa-pause");
        }).catch(error => {
            console.error("Playback failed: ", error);
        });
    } else if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }

});



song.addEventListener('play', () => {
    // Update progress bar as song plays
    updateProgress = setInterval(() => {
        progress.value = song.currentTime;
    }, 1); // Update every 500ms
});

song.addEventListener('pause', () => {
    clearInterval(updateProgress); // Stop updating progress when paused
});

song.addEventListener('ended', () => {
    clearInterval(updateProgress); // Stop updating progress when song ends
    progress.value = 0; // Reset progress bar when song ends
    // Update control icon to 'play' if necessary
    currentSongIndex++;
    fetchNextSongAndPlay(currentSongIndex);
});

// Seeking functionality
progress.addEventListener('input', () => {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play().then(() => {
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
        }).catch(error => {
            console.error("Playback failed on seeking", error);
        });
    }
});

function updatePlayButton() {
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
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

// Sending action and selected mood
function updateSong(action, selectedMood) {
    fetch(`/DHVANI/models/fetch_songs.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=${action}&mood=${selectedMood}`
    })
        .then(response => response.text())
        .then(text => {
            if (text !== "No songs found.") {
                songPlay(text);
            } else {
                console.error(text); // Handle the case where no songs were found
            }
        })
        .catch(error => console.error('Error:', error));
}

function updateRequest(action, locationName) {
    fetch(`/DHVANI/models/send_location.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=${action}&locationName=${locationName}`
    })
        .then(response => response.text())
        .then(text => {
            if (text !== "No songs found.") {
                songPlay(text);
            } else {
                console.error(text); // Handle the case where no songs were found
            }
        })
        .catch(error => console.error('Error:', error));
}

// function updateRequest(action, selectedMood = '', locationName = '') {
//     let endpoint;
//     let body;
//     // Choose the endpoint based on the click counter's oddness and the provided action
//     if (clickCounter % 2 === 1) { // If odd

//         endpoint = 'send_location.php';
//         body = `action=${encodeURIComponent(action)}&locationName=${encodeURIComponent(locationName)}`;

//     } else { // If even, default to fetching songs regardless of the action

//         endpoint = 'fetch_songs.php';
//         body = `action=${encodeURIComponent(action)}&mood=${encodeURIComponent(selectedMood)}`;

//     }

//     // Proceed with the fetch request using the determined endpoint
//     fetch(`/DHVANI/models/${endpoint}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         // Adjust the body as needed; for demonstration, it's left generic
//         body: body
//     })
//         .then(response => response.text())
//         .then(text => {
//             if (text !== "No songs found.") {
//                 console.log(text); // Assuming songPlay or other operation might not always be relevant

//                 songPlay(text); // Call songPlay only when fetching songs

//             } else {
//                 console.error(text); // Handle the case where no songs were found or other errors
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }




function sendRequest(action, data) {
    let endpoint;
    let body;

    // Determine the endpoint and request body based on the action
    switch (action) {
        case 'sendLocation':
            endpoint = 'send_location.php';
            body = `locationName=${encodeURIComponent(data)}`;
            break;
        case 'updateMood':
            endpoint = 'fetch_songs.php';
            body = `mood=${encodeURIComponent(data)}`;
            break;
        // Add more cases for other actions as needed
        default:
            console.error('Invalid action provided');
            return;
    }

    fetch(`/DHVANI/models/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body
    })
        .then(response => response.text())
        .then(text => {
            // Assuming 'No songs found.' is specific to updating mood, adjust as necessary
            if (action === 'updateMood' && text === "No songs found.") {
                console.error(text); // Handle the case where no songs were found
            } else {
                // Assuming text response is always valid for sendLocation,
                // and for successful mood updates or other actions

                songPlay(text); // Call songPlay only when updating mood

            }
        })
        .catch(error => console.error('Error:', error));
}


// autmatic next songplay
function fetchNextSongAndPlay(index) {
    // Example fetch request to your server to get the next song
    // Adjust URL and parameters as needed for your backend implementation
    fetch(`/DHVANI/models/fetch_songs.php?songIndex=${index}`)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.songPath) {
                // Assuming `data.songPath` is the URL to the next song
                song.src = data.songPath;
                song.play();
            } else {
                console.log("No more songs or error fetching the next song");
                // Optionally reset currentSongIndex or handle the end of playlist
            }
        })
        .catch(error => console.error('Error fetching next song:', error));
}

///////////////////////////////// Mood selection button///////////////////////////////////////

document.querySelectorAll('input[name="switch"]').forEach(radio => {

    radio.addEventListener('click', function () {

        selectedMood = this.value;
        updatePlayButton();
        fetchSongByMood(selectedMood);
    });
});

// Mood selection button and sending value to the mood function
function fetchSongByMood(mood) {
    // fetching a song based on mood from a database
    console.log(`Fetching song for mood: ${mood}`);

    // Example:
    switch (mood) {
        case 'happy':
            console.log('Playing Happy Song');
            //updateMood('happy');
            sendRequest('updateMood', mood);
            break;
        case 'sad':
            console.log('Playing Sad Song');
            sendRequest('updateMood', mood);
            break;
        case 'calm':
            console.log('Playing calm Song');
            sendRequest('updateMood', mood);
            break;
        case 'anger':
            console.log('Playing anger Song');
            sendRequest('updateMood', mood);
            break;
        case 'surprise':
            console.log('Playing surprise Song');
            sendRequest('updateMood', mood);
            break;
        case 'off':
            console.log('Stop the playing song');
            song.pause();
            break;
        default:
            console.log('Mood not recognized');
    }
}

// Selecting next and previous songs
document.getElementById('nextSong').addEventListener('click', function () {

    updatePlayButton();
    console.log(selectedMood);
    updateSong('next', selectedMood);
    if (clickCounter % 2 === 1) {
        updateRequest('next', locationName);
    }
    console.log('Next song loaded');
    console.log('Mood is calm, so changing the song');

});
document.getElementById('prevSong').addEventListener('click', function () {

    updatePlayButton();
    updateSong('prev', selectedMood);
    if (clickCounter % 2 === 1) {
        updateRequest('prev', locationName);
    }

    console.log('Prev song loaded');
    console.log('Mood is happy, so changing the song');

});

document.getElementById('checkbox').addEventListener('click', function () {

    //sendLocation(locationName);
    console.log("clickCounter: " + clickCounter);
    var clickCounterSudo = 1;
    if (clickCounter % 2 === 0 && clickCounter > 1) {
        sendRequest('sendLocation', locationName);
        console.log("1st if executed");
        clickCounterSudo++;
    } else if (clickCounter % 2 !== 0 || clickCounter === 1) {
        console.log("1st if executed");
        song.pause();
    } else if (clickCounter === 0) {
        sendRequest('sendLocation', locationName);
    }

    clickCounter++;


});


function songPlay(text) {
    console.log(typeof text);
    const details = text.split("|");

    // the order is id, name, genre, author, path
    const songId = details[0];
    const songName = details[1];
    const songGenre = details[2];
    const songAuthor = details[3];
    const songPath = details[4];

    document.getElementById('source').src = songPath;
    document.getElementById('song-name').innerHTML = songName;
    document.getElementById('artist-name').innerHTML = songAuthor;
    console.log(`ID: ${songId},\n Name: ${songName},\n Genre: ${songGenre},\n Author: ${songAuthor},\n Path: ${songPath}`);

    song.load();
    song.play();
}

/////OPEN AI/////


// // main.js
// import { chatWithOpenAI } from '/Users/srinualahari/Documents/GitHub/JavaScript/dgl-409-capstone-project-Sri01729/openAI'; // Adjust the path based on your actual file structure

// // Example usage
// chatWithOpenAI("Can you tell me how many planets are there?")
//     .then(response => {
//         // Process or log the response as needed
//         const responseElement = document.getElementById('chatResponse');

//         // Assuming the response structure allows it, update the element's text.
//         // This might need adjustment based on the actual structure of `response`.
//         responseElement.innerText = response.choices[0].message.text;
//         console.log("Chat response received:", response);
//     })
//     .catch(error => {
//         console.error("Error in chat:", error);
//     });














//Deprecated functions

// // Sending location name

// function sendLocation(location) {
//     fetch(`/DHVANI/models/send_location.php`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `locationName=${location}`
//     })
//         .then(response => response.text())
//         .then(text => {
//             if (text !== "No songs found.") {
//                 console.log(text);
//             } else {
//                 console.error(text); // Handle the case where no songs were found
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// // Sending mood
// function updateMood(mood) {
//     fetch(`/DHVANI/models/fetch_songs.php`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `mood=${mood}`
//     })
//         .then(response => response.text())
//         .then(text => {
//             if (text !== "No songs found.") {
//                 songPlay(text);
//             } else {
//                 console.error(text); // Handle the case where no songs were found
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }