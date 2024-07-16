// anugrah play pause js
let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon = document.getElementById("ctrlIcon")

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
// anugrah progress bar js
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}
// anugrah progress bar par click karne par play hone wale js
progress.onchange = function (){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
}

//anugrah volume kam zyada karne ki js
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the range input, audio player, and mute button
    const volumeControl = document.getElementById('volume-control');
    const song = document.getElementById('song');
    const muteButton = document.getElementById('mute-button');
    const fullButton = document.getElementById('full-button');
  
    // Set the initial volume of the audio player
    song.volume = volumeControl.value / 100;

    // Add an event listener to the range input
    volumeControl.addEventListener('input', function() {
        // Update the audio player's volume based on the range input's value
        song.volume = this.value / 100;
        
    });
    

    // Add an event listener to the mute button
    muteButton.addEventListener('click', function() {
        // Set the audio player's volume to 0 (mute)
        song.volume = 0;
        //icon change
        
        // Update the range input's value to 0 to reflect the mute state
        volumeControl.value = 0;
    });
    fullButton.addEventListener('click', function() {
        // Set the audio player's volume to 100 
        song.volume = 1;
        //icon change
        
        // Update the range input's value to 0 to reflect the mute state
        volumeControl.value = 100;
    });
});
const audioSource = document.getElementById('audioSource');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Array of song file paths
const songs = [
    'songs/baby.mp3',
    'songs/peaches.mp3',
    'songs/borntoshine.mp3',
    'songs/blueeyes.mp3',
    'songs/gypsy.mp3',
    'songs/haryanahood.mp3',
    'songs/chaska.mp3',
    'songs/sohigh.mp3'
];

// Current song index
let currentSongIndex = 0;

// Function to load and play a song by its index
function loadAndPlaySong(index) {
    audioSource.src = songs[index];
    song.load();
    song.play();
}

// Event listener for the Previous button
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadAndPlaySong(currentSongIndex);
});

// Event listener for the Next button
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadAndPlaySong(currentSongIndex);
});

// Load and play the first song initially
loadAndPlaySong(currentSongIndex);






