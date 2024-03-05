<main>
    <!-- <div class="background"> -->
    <div class="hero-container">
        <div class="circle" id="circle1">
            <span class="weather-icon"></span>
            <p class="default-value">loading</p>
        </div>

        <div class="player-container">
            <div class="music-player">
                <nav class="player-nav">
                    <div class="player-circle">
                        <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <div class="player-circle">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </nav>
                <img src="/DHVANI/assets/img/michael.png" alt="" class="song-img">
                <h1 id="song-name" style="color: aliceblue;">Dangerous</h1>
                <p id="artist-name" style="color: aliceblue;">Michael jackson</p>

                <audio id="song">
                    <source type="audio/mpeg" id="source"
                        src="/DHVANI/assets/audio/calm/2019-04-06_-_Deep_Meditation_-_David_Fesliyan.mp3">
                    <!-- src = "/path/examplesong.mp3" in above line -->
                </audio>

                <input type="range" value="0" id="progress">

                <div class="controls">
                    <div><i class="fa-solid fa-backward" id="prevSong"></i></div>
                    <div><i class="fa-solid fa-play" id="ctrlIcon"></i></div>
                    <div><i class="fa-solid fa-play" id="play" onclick="playVAE()"></i></div>
                    <div><i class="fa-solid fa-forward" id="nextSong"></i></div>
                </div>
            </div>
        </div>
        <!-- <div id="circularMenu" class="circular-menu">
                <div id="scrollArea" class="scroll-area">
                    <h5>Click here to select mood</h5>
                </div>
            </div> -->
        <div class="container">


            <div class="de">


                <div class="den">


                    <hr class="line">
                    <hr class="line">
                    <hr class="line">


                    <div class="switch">


                        <label for="switch_off"><span>OFF</span></label>
                        <label for="switch_1"><span>Happy</span></label>
                        <label for="switch_2"><span>Sad</span></label>
                        <label for="switch_3"><span>Calm</span></label>
                        <label for="switch_4"><span>Anger</span></label>
                        <label for="switch_5"><span>Surprise</span></label>


                        <input type="radio" checked="" name="switch" id="switch_off">
                        <input type="radio" name="switch" id="switch_1">
                        <input type="radio" name="switch" id="switch_2">
                        <input type="radio" name="switch" id="switch_3">
                        <input type="radio" name="switch" id="switch_4">
                        <input type="radio" name="switch" id="switch_5">


                        <div class="light"><span></span></div>


                        <div class="dot"><span></span></div>


                        <div class="dene">
                            <div class="denem">
                                <div class="deneme">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- New released songs carousel -->
    <div class="carousel-container">
        <h2>New Releases</h2>
        <div class="carousel swiper mySwiper">
            <div class="carousel-slides swiper-wrapper">
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/DHVANI.svg" alt=""></div>
                    <div class="card-info">
                        <p class="song-name">Song name</p>
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/DHVANI.svg" alt=""></div>
                    <div class="card-info">
                        <p class="song-name">Song name</p>
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/DHVANI.svg" alt=""></div>
                    <div class="card-info">
                        <p class="song-name">Song name</p>
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/DHVANI.svg" alt=""></div>
                    <div class="card-info">
                        <p class="song-name">Song name</p>
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/DHVANI.svg" alt=""></div>
                    <div class="card-info">
                        <p class="song-name">Song name</p>
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/DHVANI.svg" alt=""></div>
                    <div class="card-info">
                        <p class="song-name">Song name</p>
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/DHVANI.svg" alt=""></div>
                    <div class="card-info">
                        <p class="song-name">Song name</p>
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
    <!-- Artists carousel -->
    <div class="carousel-container">
        <h2>Artists</h2>
        <div class="carousel swiper mySwiper">
            <div class="carousel-slides swiper-wrapper">
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/harry.png" alt=""></div>
                    <div class="card-info">
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/michael.png" alt=""></div>
                    <div class="card-info">
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/justin.png" alt=""></div>
                    <div class="card-info">
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/bruno.png" alt=""></div>
                    <div class="card-info">
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/michael.png" alt=""></div>
                    <div class="card-info">
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/justin.png" alt=""></div>
                    <div class="card-info">
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
                <div class="card swiper-slide">
                    <div class="card-image"> <img src="/DHVANI/assets/img/harry.png" alt=""></div>
                    <div class="card-info">
                        <p class="artist-name">Artist name</p>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <!-- </div> -->
</main>
<div class="overlay"></div>
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/0uBxXIG6l8H5kzwi/scene.splinecode"></spline-viewer>
<script src="/DHVANI/assets/js/main.js"></script>