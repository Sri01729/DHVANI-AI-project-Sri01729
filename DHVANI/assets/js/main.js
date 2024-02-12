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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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

//Finding the latitudes and longitudes of the device

const temperature = document.getElementById("circle1");

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
}

