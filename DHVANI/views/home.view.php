<main>
    <div class="hero-container">

        <div class="player-container">
            <div class="music-player">

                <div class="music">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                    <span class="line line4"></span>
                    <span class="line line5"></span>
                </div>


                <h3 id="song-name">Get ready </h3>
                <p id="artist-name">for DHVANI</p>

                <audio id="song" preload="metadata">
                    <source type="audio/mpeg" id="source"
                        src="/DHVANI/assets/audio/calm/2019-04-06_-_Deep_Meditation_-_David_Fesliyan.mp3">
                    <!-- src = "/path/examplesong.mp3" in above line -->
                </audio>

                <input type="range" value="0" id="progress">

                <div class="controls">
                    <!-- Shuffle -->
                    <div id="shuffleButton" onclick="toggleShuffle()">
                        <i id="shuffleIcon" class="fas fa-random fa-sm" aria-hidden="true"></i>
                    </div>
                    <div id="prevSong"><i class="fa-solid fa-backward"></i></div>
                    <div><i class="fa-solid fa-play" id="ctrlIcon"></i></div>
                    <div id="nextSong"><i class="fa-solid fa-forward"></i></div>
                    <div><i class="fas fa-circle-notch fa-sm" aria-hidden="true"></i></div>
                </div>
            </div>
            <div class="sound-button-container">

                <button class="sound-button" id="soundButton">
                    <span class="sound-icon" id="soundIcon">
                        Weather tunes
                    </span>
                </button>
            </div>
        </div>
        <div class="parameters-container">
            <div class="small-cards">
                <div class="cardContainer">
                    <div class="weather-card">
                        <p class="city">Loading city name</p>
                        <p class="default-value">loading weather</p>

                        <span class="weather-icon"></span>

                        <span class="temp"></span>
                        <div class="minmaxContainer">
                            <div class="min">
                                <p class="minHeading">Min</p>
                                <p class="minTemp">loading</p>
                            </div>
                            <div class="max">
                                <p class="maxHeading">Max</p>
                                <p class="maxTemp">loading</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cardContainer">
                    <div class="playlist">
                        <div class="currentplaying">
                            <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg" fill="#ff8800"
                                class="soundcloud">
                                <path
                                    d="M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z">
                                </path>
                            </svg>
                            <p class="playlist-heading">Currently Playing</p>
                        </div>
                        <div class="loader">
                            <div class="song">
                                <p class="currentsong-name">----------------</p>
                                <p class="currentsong-artist">------</p>
                            </div>
                            <div class="albumcover"><img src="/DHVANI/assets/img/DHVANI_logo.png"
                                    alt="album_cover_image"></div>
                            <div class="loading" id="loading">
                                <div class="load"></div>
                                <div class="load"></div>
                                <div class="load"></div>
                                <div class="load"></div>
                            </div>
                        </div>
                        <div class="loader">
                            <div class="song">
                                <p class="nextsong-name">--------------</p>
                                <p class="nextsong-artist">-----</p>
                            </div>
                            <div class="albumcover"><img src="/DHVANI/assets/img/DHVANI_logo.png"
                                    alt="album_cover_image"></div>
                            <div class="play"><i class='fas fa-music'></i></div>
                        </div>
                        <div class="loader">
                            <div class="song">
                                <p class="nextnextsong-name">----------------</p>
                                <p class="nextnextsong-artist">------</p>
                            </div>
                            <div class="albumcover"><img src="/DHVANI/assets/img/DHVANI_logo.png"
                                    alt="album_cover_image"></div>
                            <div class="play"><i class='fas fa-music'></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <audio id="mySound" src="/DHVANI/assets/audio/mouse-click-153941.mp3"></audio>
            <div class="mood-button">


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


                            <input type="radio" checked="" name="switch" value="off" id="switch_off">
                            <input type="radio" name="switch" value="happy" id="switch_1">
                            <input type="radio" name="switch" value="sad" id="switch_2">
                            <input type="radio" name="switch" value="calm" id="switch_3">
                            <input type="radio" name="switch" value="angry" id="switch_4">
                            <input type="radio" name="switch" value="surprise" id="switch_5">


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
    </div>

    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>

            <div class="content">
                <section class="content-section">
                    <div class="container">
                        <article class="content-block">
                            <h2 class="heading">Who We Are</h2>
                            <p class="text">Dhvani, a revolutionary music streaming service designed to provide you with
                                personalized soundtracks that match your mood, weather, and location through the power
                                of
                                AI. I've
                                built Dhvani to be more than just a service; it's a testament to the transcendent power
                                of
                                music and
                                its ability to resonate with our innermost emotions. For me, Dhvani is a community where
                                every note
                                plays a part in the symphony of life.</p>
                        </article>

                        <hr class="divider">

                        <article class="content-block">
                            <h2 class="heading">Our Vision</h2>
                            <p class="text">To redefine music streaming by integrating emotional intelligence through
                                artificial
                                intelligence. My vision for Dhvani is to craft an experience where music becomes an
                                extension of
                                your emotions and environment. I see a future where your music is as unique as you are,
                                adapting in
                                real-time to your world and the rhythm of your life. I aim to create a seamless blend of
                                melody and
                                technology, making your every moment resonate with the perfect soundtrack.</p>
                        </article>

                        <hr class="divider">

                        <article class="content-block">
                            <h2 class="heading">Our Mission</h2>
                            <p class="text">I am on a mission to personalize your music experience in a way that's never
                                been done
                                before. With Dhvani, I want to connect the dots between your feelings, your
                                surroundings,
                                and the
                                music that surrounds you. Leveraging the latest in AI, I am working to ensure that your
                                music is a
                                companion that understands you, offering solace, excitement, and motivation right when
                                you
                                need it.
                            </p>
                        </article>

                        <hr class="divider">

                        <article class="content-block">
                            <h2 class="heading">How It Works</h2>
                            <p class="text">It's a system that's sensitive to your moods and settings, selecting music
                                that
                                speaks
                                to where you are, both physically and emotionally. My algorithms are the bridge between
                                your
                                experiences and the music that fits them, curating your personal playlist in real-time.
                            </p>
                        </article>

                        <hr class="divider">

                        <article class="content-block">
                            <h2 class="heading">The Story of Dhvani</h2>
                            <p class="text">The idea for Dhvani came from my own life, from my need for a music service
                                that
                                doesn't
                                just play songs but plays the right songs for how I'm feeling and where I am. I wanted
                                to
                                build
                                something that brought music closer to the heart, that understood the listener, and
                                Dhvani
                                is the
                                realization of that dream—a service that adapts to you, creating a personalized
                                soundscape
                                for every
                                moment.</p>
                        </article>

                        <hr class="divider">

                        <article class="content-block">
                            <h2 class="heading">Future Features</h2>
                            <p class="text">The future of Dhvani is about pioneering the next step in music streaming. I
                                am
                                currently working on automating AI music creation to provide a dynamic, ever-evolving
                                stream
                                of
                                melodies composed on-the-fly, instead of a database of
                                pre-saved songs, ensuring that your music is as alive and ever-changing as the world
                                around
                                you.
                                It's not just about discovering music; it's about creating a living soundtrack for your
                                life.</p>
                        </article>
                    </div>
                </section>
            </div>
        </div>

    </div>

</main>