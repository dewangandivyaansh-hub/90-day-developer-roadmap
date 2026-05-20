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