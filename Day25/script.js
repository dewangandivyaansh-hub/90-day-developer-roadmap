const songs = [

    {
        title: "Dream Song",
        artist: "Artist One",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        title: "Night Vibes",
        artist: "Artist Two",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },

    {
        title: "Coding Beats",
        artist: "Artist Three",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }

];

let currentSong = 0;

const audio = document.getElementById("audio");

const songTitle = document.getElementById("songTitle");

const artist = document.getElementById("artist");

const progress = document.getElementById("progress");

const volume = document.getElementById("volume");

const currentTimeEl = document.getElementById("currentTime");

const durationEl = document.getElementById("duration");

function loadSong(song) {

    songTitle.innerText = song.title;

    artist.innerText = song.artist;

    audio.src = song.src;
}

loadSong(songs[currentSong]);

function playSong() {

    audio.play();
}

function pauseSong() {

    audio.pause();
}

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    playSong();
}

function prevSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);

    playSong();
}

/* 🎚️ UPDATE PROGRESS */

audio.addEventListener("timeupdate", () => {

    const progressPercent =
        (audio.currentTime / audio.duration) * 100;

    progress.value = progressPercent || 0;

    // CURRENT TIME

    let currentMinutes =
        Math.floor(audio.currentTime / 60);

    let currentSeconds =
        Math.floor(audio.currentTime % 60);

    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    currentTimeEl.innerText =
        `${currentMinutes}:${currentSeconds}`;

    // DURATION

    let durationMinutes =
        Math.floor(audio.duration / 60);

    let durationSeconds =
        Math.floor(audio.duration % 60);

    if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
    }

    durationEl.innerText =
        `${durationMinutes}:${durationSeconds}`;
});

/* 🎚️ SEEK BAR */

progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;
});

/* 🔊 VOLUME */

volume.addEventListener("input", () => {

    audio.volume = volume.value;
});

/* 🔁 AUTO NEXT SONG */

audio.addEventListener("ended", nextSong);