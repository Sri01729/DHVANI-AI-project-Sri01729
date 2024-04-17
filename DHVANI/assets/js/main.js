

var currentMood;
let selectedMood = '';
let currentSongIndex = 0;
var locationName = "Initial Location";
let updateProgress;
let clickCounter = 0;
var soundButton = document.getElementById('soundButton');
var soundIcon = document.getElementById('soundIcon');
var isSoundOn = false;
var shuffleClickCount = 0; // Starts at 0, meaning shuffle is initially off
const nextButton = document.getElementById("nextSong");
var controlLoop = document.querySelector('.controls div:nth-child(5)');



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






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
    setInterval(fetchWeather, 300000);
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
        minTemp.innerHTML = tempMin + "&deg";
        maxTemp.innerHTML = tempMax + "&deg";

        // Clear any existing icons and default text
        locationIcon.innerHTML = '';
        value.innerHTML = '';

        let weatherData, icon;

        // sendPromptToOpenAI('Tell me a joke.');

        if (forecastData.weather.length > 0) {
            const lastCondition = forecastData.weather[forecastData.weather.length - 1];
            weatherData = lastCondition.description;
            icon = lastCondition.icon;
            console.log("Weather conditions count: " + forecastData.weather.length);
        }

        // Extract and round the current temperature data
        const currentTemperature = Math.round(tempMin);
        temp.innerHTML = currentTemperature + "&deg";

        // Now set the innerHTML for both icon and value
        if (weatherData && icon) {
            locationIcon.innerHTML = `<img src="../assets/img/icons/${icon}.png" alt="${weatherData}">`;
            value.innerHTML = weatherData;
        }

        console.log(`Current temperature: ${currentTemperature}°C`);
        console.log(`Current weather: ${weatherData}`);

        ///////Sound icon butoon function/////////


        // soundIcon.textContent = '\u{1F507}';

        soundButton.addEventListener('click', function () {

            // soundIcon.textContent = isSoundOn ? '\u{1F507}' : '\u{1F50A}';
            this.style.backgroundColor = this.style.backgroundColor === 'black' ? 'white' : 'black';

            this.style.color = this.style.backgroundColor === 'black' ? 'white' : 'black';
            isSoundOn = !isSoundOn; // Toggle the sound state
            if (isSoundOn) {
                updatePlayButton();
                classifyMusicMood(weatherData);
            } else {
                song.pause(); //  pause the song when sound is turned off
                song.currentTime = 0; //  reset song to the start
                updatePauseButton();
            }
        });

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
            updatePlayButton();
            document.getElementById('loading').innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;;
        }).catch(error => {
            console.error("Playback failed: ", error);
        });
    } else if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        updatePauseButton();
        document.querySelectorAll('.load').forEach(function (element) {
            element.style.animation = 'none';
        });
        document.getElementById('loading').innerHTML = "<i class='fas fa-play' id='playIcon'></i>";
    }

});



song.addEventListener('play', () => {
    // Update progress bar as song plays
    updateProgress = setInterval(() => {
        progress.value = song.currentTime;
    }, 1);
});

song.addEventListener('pause', () => {
    clearInterval(updateProgress); // Stop updating progress when paused
});

// song.addEventListener('ended', () => {
//     clearInterval(updateProgress); // Stop updating progress when song ends
//     progress.value = 0; // Reset progress bar when song ends
//     currentSongIndex++;
//     fetchNextSongAndPlay(currentSongIndex);
// });

// Seeking functionality
progress.addEventListener('input', () => {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play().then(() => {
            updatePauseButton();
        }).catch(error => {
            console.error("Playback failed on seeking", error);
        });
    }
});

function updatePlayButton() {
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    imageRotation();
}

function updatePauseButton() {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    //imageRotation();
}

/* =========================== Mood classification on weathertype======================================*/

function classifyMusicMood(weatherType) {

    console.log(weatherType);
    if (weatherType.includes('clear') || weatherType.includes('scattered clouds')) {
        selectedMood = 'happy';
    } else if (weatherType.includes('overcast clouds') || weatherType.includes('light rain') || weatherType.includes('moderate rain') || weatherType.includes('snow')) {
        selectedMood = 'sad';
    } else if (weatherType.includes('heavy intensity rain') || weatherType.includes('very heavy rain') || weatherType.includes('extreme rain') || weatherType.includes('tornado')) {
        selectedMood = 'angry';
    } else if (weatherType.includes('thunderstorm')) {
        selectedMood = 'surprise';
    } else if (weatherType.includes('mist') || weatherType.includes('smoke') || weatherType.includes('haze') || weatherType.includes('dust') || weatherType.includes('fog')) {
        selectedMood = 'calm';
    } else {
        selectedMood = 'calm';
    }


    return fetchSongByMood(selectedMood);
}


// Sending action and selected mood

function updateSong(action, selectedMood, isShuffle) {
    // Determine the fetch path based on whether shuffle is enabled
    const fetchPath = isShuffle ? `/DHVANI/models/fetch_songs_shuffle.php` : `/DHVANI/models/fetch_songs.php`;

    fetch(fetchPath, {
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
                console.error(text);
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
                console.error(text);
            }
        })
        .catch(error => console.error('Error:', error));
}


function sendRequest(action, data) {
    let endpoint;
    let body;


    switch (action) {
        case 'sendLocation':
            endpoint = 'send_location.php';
            body = `locationName=${encodeURIComponent(data)}`;
            break;
        case 'updateMood':
            endpoint = 'fetch_songs.php';
            body = `mood=${encodeURIComponent(data)}`;
            break;

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
            if (action === 'updateMood' && text === "No songs found.") {
                console.error(text);
            } else {

                songPlay(text);

            }
        })
        .catch(error => console.error('Error:', error));
}

//////////////////////////// Shuffle functionality ///////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    // Select the first child of the controls container

    var control = document.querySelector('.controls div:nth-child(1)');

    control.addEventListener('click', function () {
        // Toggle the 'clicked' class to change the color
        this.classList.toggle('clicked');
        shuffleClickCount++;

    });
});

/////////////////////// Loop functionality ///////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    // Select the first child of the controls container



    controlLoop.addEventListener('click', function () {
        // Toggle the 'clicked' class to change the color
        this.classList.toggle('clicked');
        controlLoop.classList.toggle('active');  // Toggle 'active' class to reflect loop state

    });
});


///////////////// Local music ////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    // Select the first child of the controls container

    var control = document.querySelector('#local_music');

    control.addEventListener('click', function () {
        // Toggle the 'clicked' class to change the color

        alert('under construction');

    });
});





// autmatic next songplay
function fetchNextSongAndPlay(index) {

    fetch(`/DHVANI/models/fetch_songs.php?songIndex=${index}`)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.songPath) {

                song.src = data.songPath;
                song.play();
                imageRotation();
            } else {
                console.log("No more songs or error fetching the next song");
            }
        })
        .catch(error => console.error('Error fetching next song:', error));
}

////////Mous click sound effect/////

function mouseClickEffect() {
    var clickSound = document.getElementById('mySound');
    clickSound.play();
}

///////////////////////////////// Mood selection button///////////////////////////////////////

document.querySelectorAll('input[name="switch"]').forEach(radio => {


    radio.addEventListener('click', function () {

        mouseClickEffect();
        function myFunction() {
            fetchSongByMood(selectedMood);
        }
        selectedMood = this.value;
        updatePlayButton();
        setTimeout(myFunction, 100);

    });
});

// Mood selection button and sending value to the mood function
function fetchSongByMood(mood) {
    // fetching a song based on mood from a database
    console.log(`Fetching song for mood: ${mood}`);

    switch (mood) {
        case 'happy':
            console.log('Playing Happy Song');
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

        case 'angry':
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
            updatePauseButton();
            break;

        default:
            console.log('Mood not recognized');
    }
}


// Selecting next and previous songs
document.getElementById('nextSong').addEventListener('click', function () {

    updatePlayButton();
    console.log(selectedMood);
    mouseClickEffect();
    function myFunction() {
        updateRequest('next', locationName);
    }

    console.log("shuffle click counter is " + shuffleClickCount);
    var isShuffleOn = shuffleClickCount % 2 !== 0;
    updateSong('next', selectedMood, isShuffleOn);
    // updateSong('next', selectedMood);
    if (clickCounter % 2 === 1) {
        setTimeout(myFunction, 10);
    }
    console.log('Next song loaded');
});
document.getElementById('prevSong').addEventListener('click', function () {

    updatePlayButton();
    mouseClickEffect();
    function myFunction() {
        updateRequest('prev', locationName);
    }
    console.log("shuffle click counter is " + shuffleClickCount);
    var isShuffleOn = shuffleClickCount % 2 !== 0;
    updateSong('prev', selectedMood, isShuffleOn);
    if (clickCounter % 2 === 1) {
        setTimeout(myFunction, 10);
    }

    console.log('Prev song loaded');
});

document.getElementById('checkbox').addEventListener('click', function () {

    //sendLocation(locationName);
    updatePlayButton();
    mouseClickEffect();
    console.log("clickCounter: " + clickCounter);
    var clickCounterSudo = 1;
    if (clickCounter % 2 === 0 && clickCounter > 1) {
        sendRequest('sendLocation', locationName);
        console.log("1st if executed");
        clickCounterSudo++;
    } else if (clickCounter % 2 !== 0 || clickCounter === 1) {
        console.log("1st if executed");
        song.pause();
        updatePauseButton();
    } else if (clickCounter === 0) {
        sendRequest('sendLocation', locationName);
    }

    clickCounter++;


});


function songPlay(text) {
    console.log(typeof text);
    const details = text.split("|");

    const songId = details[0];
    const songName = details[1];
    const songGenre = details[2];
    const songAuthor = details[3];
    const songPath = details[4];

    var songNameElement = document.querySelector('.currentsong-name');
    var songArtistElement = document.querySelector('.currentsong-artist');

    songNameElement.textContent = songName;
    songArtistElement.textContent = songAuthor;

    document.getElementById('source').src = songPath;
    document.getElementById('song-name').innerHTML = songName;
    document.getElementById('artist-name').innerHTML = songAuthor;
    console.log(`ID: ${songId},\n Name: ${songName},\n Genre: ${songGenre},\n Author: ${songAuthor},\n Path: ${songPath}`);

    song.load();
    song.play();
    imageRotation();

    if (details.length >= 10) { // Checks if there are enough details for at least the next song
        const nextSongName = details[6];
        const nextSongAuthor = details[8];
        var nextSongNameElement = document.querySelector('.nextsong-name');
        var nextSongArtistElement = document.querySelector('.nextsong-artist');
        nextSongNameElement.textContent = nextSongName;
        nextSongArtistElement.textContent = nextSongAuthor;
    }

    if (details.length > 14) { // Checks if there are enough details for another song
        const nextNextSongName = details[11];
        const nextNextSongAuthor = details[13];
        var nextNextSongNameElement = document.querySelector('.nextnextsong-name');
        var nextNextSongArtistElement = document.querySelector('.nextnextsong-artist');
        nextNextSongNameElement.textContent = nextNextSongName;
        nextNextSongArtistElement.textContent = nextNextSongAuthor;
    }
}

///Music player image rotating funtionality////

function imageRotation() {
    document.getElementById('ctrlIcon').addEventListener('click', function () {
        var image = document.querySelector('.song-img');
        if (image.classList.contains('song-img-pause')) {
            image.classList.remove('song-img-pause');
        } else {
            image.classList.add('song-img-pause');
        }
    });

}


////////////Website Intro//////////////////

function startTour() {
    introJs().setOptions({
        steps: [{
            title: 'Welcome to Dhvani!',
            intro: 'Dive into a musical journey that dances to your mood, the beat of your environment, and the essence of your location. Let’s get started!'
        },
        {
            element: document.querySelector('.weather-card'),
            intro: 'Peek at this card for the current weather and your location. Dhvani cleverly tailors music to match the vibe of the weather. Cool, right?',
            position: 'right'
        },
        {
            element: document.querySelector('.de'),
            intro: 'Feeling happy, calm, or adventurous? Choose your mood here and watch Dhvani curate the perfect playlist for you on the fly!',
            position: 'right'
        },
        {
            element: document.querySelector('#locationButton'),
            intro: 'Tap this icon for a musical tour, featuring local artists and cultural vibes.<strong> Remember to turn this off if you switch to mood or weather based music! </strong>',
            position: 'left'
        },
        {
            element: document.querySelector('.music-player'),
            intro: 'This is your music command center! Play, pause, skip, or replay to your heart’s content. Your wish is its command.',
            position: 'bottom'
        },
        {
            element: document.querySelector('.playlist'),
            intro: 'Curious about what’s playing and what’s next? Here’s your musical lineup, all set for your listening pleasure.',
            position: 'bottom'
            },

            {
                element: document.querySelector('#toggleListening'),
                intro: 'Click this button to start the voice recognition. You can say commands like "play happy music" or "play calm music" or "play *mood* music" to listen to music that matches your current mood.',
                position: 'bottom'
            },
        {
            element: document.querySelector('#soundButton'),
            intro: 'Hit this button and let the Dhvani tunes sweep you off your feet. It’s time to groove!',
            position: 'bottom'
        }],
        'skipLabel': 'Exit tour',
        'nextLabel': 'Next',
        'prevLabel': 'Back',
        'doneLabel': 'Done',
        showBullets: false,
        showStepNumbers: false,
        exitOnOverlayClick: true
    }).start();
}

document.addEventListener('DOMContentLoaded', function () {
    startTour();
});

document.querySelector(".guide").onclick = function () {
    startTour();
};




/////OPEN AI/////
document.addEventListener('DOMContentLoaded', function () {
    sendMessageToOpenAI("Hello ChatGPT, what is the capital of India?");
});


song.addEventListener('ended', () => {
    if (controlLoop.classList.contains('active')) {
        // If the loop button is active, restart the song
        song.currentTime = 0;
        progress.click();
    } else {
        // If not looping, click the 'Next' button to fetch the next song
        nextButton.click();
    }
});

loopButton.addEventListener('click', () => {
    this.classList.toggle('clicked');
    loopButton.classList.toggle('active');  // Toggle 'active' class to reflect loop state
});

// Voice assistant

document.addEventListener('DOMContentLoaded', function () {
    if (annyang) {
        // Define the commands
        const commands = {
            'play happy music': () => {
                console.log("Playing happy music...");
                fetchSongByMood('happy');
                selectedMood = 'happy';
                updatePlayButton();
            },
            'play sad music': () => {
                console.log("Playing sad music...");
                fetchSongByMood('sad');
                selectedMood = 'sad';
                updatePlayButton();
            },
            'play angry music': () => {
                console.log("Playing angry music...");
                fetchSongByMood('angry');
                selectedMood = 'angry';
                updatePlayButton();
            },
            'play calm music': () => {
                console.log("Playing calm music...");
                fetchSongByMood('calm');
                selectedMood = 'calm';
                updatePlayButton();
            },
            'play surprise music': () => {
                console.log("Playing surprise music...");
                fetchSongByMood('surprise');
                selectedMood = 'surprise';
                updatePlayButton();
            }
        };

        // Add commands to Annyang
        annyang.addCommands(commands);

        // Toggle button setup
        var listening = false;
        var toggleButton = document.getElementById('toggleListening');

        toggleButton.addEventListener('click', function () {
            if (listening) {
                annyang.abort();  // Stop Annyang from listening
                toggleButton.style.backgroundColor = this.style.backgroundColor === 'orange' ? 'black' : 'orange';
                console.log("Dhvani has stopped listening.");
            } else {
                annyang.start({ continuous: false });  // Start Annyang listening
                toggleButton.style.backgroundColor = this.style.backgroundColor === 'orange' ? 'black' : 'orange';
                console.log("Dhvani is now listening.");
            }
            listening = !listening;  // Toggle the listening state
        });
    } else {
        console.log("Dhvani voice assistant is not supported by this browser.");
    }
});








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

//////////////////////////  Sidebar functionality  //////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('.open-nav').onclick = function () {
//         openNav();
//     };
// });

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('.closebtn').onclick = function () {
//         closeNav();
//     };
// });


// //Sidebar navigaation working functionality
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("navlist").style.marginLeft = "250px";
//     document.getElementById("mySidenav").style.borderRight = "2px solid #604cff";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("navlist").style.marginLeft = "0";
//     document.getElementById("mySidenav").style.border = "none";
// }
