const songs = [
    {
        id:1,
        name: "Bones",
        artist:"Imagine Dragons",
        img: "pics/Bones-English-2022-20220311113603-500x500.jpg",
        audio: "music/Bones(PaglaSongs).mp3"
    },
    {
        id:2,
        name: "Baby",
        artist: "Justin Bieber",
        img: "pics/Babycoverart.jpg",
        audio: "music/Baby(PaglaSongs).mp3"
    },
    {
        id:3,
        name: "Let Me Down Slowly",
        artist:"Alec Benjamin",
        img: "pics/download.jpeg",
        audio: "music/Let-Me-Down-Slowly(PaglaSongs).mp3"
    },
        {
        id:4,
        name: "Heat Waves",
        artist:"Glass Animals",
        img: "pics/Glass Animals - Heat Waves.jpeg",
        audio: "music/Heat Waves.mp3"
    }

] 

const image = document.querySelector(".img-area");
const songName = document.querySelector(".song-name");
const artist = document.querySelector(".artist");
const musicLength = document.querySelector(".progress");
const audio = document.querySelector("audio")
const fav = document.querySelector("#favorite");
const prev = document.querySelector("#periviousbtn");
const play = document.querySelector("#playbtn");
const next = document.querySelector("#nextsongbtn");
const loop = document.querySelector("#loop");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");
let current = document.querySelector("#current")
let full = document.querySelector("#full")

window.addEventListener("DOMContentLoaded",()=>{
    audio.src = songs[0].audio
    image.src = songs[0].img
    songName.innerText = songs[0].name
    artist.innerText = songs[0].artist
})

play.addEventListener("click",()=>{
    time()
    if (play.classList.contains("fa-pause")) {
        audio.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play")
    }
    else{
        audio.play()
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
    setInterval(()=>{
        musicLength.value = audio.currentTime
    },500)
})


audio.onloadeddata=()=>{
    musicLength.max = audio.duration;
}

let count = 0
next.addEventListener("click",()=>{
    count++

    if (count == songs.length){
        count = 0
    }
    audio.src = songs[count].audio
    image.src = songs[count].img
    songName.innerText = songs[count].name
    artist.innerText = songs[count].artist
    time()
    audio.play()

})

prev.addEventListener("click",()=>{
    count--
    
    if (count == 0){
        count = songs.length
    }

    audio.src = songs[count].audio
    image.src = songs[count].img
    songName.innerText = songs[count].name
    artist.innerText = songs[count].artist
    audio.play()

    console.log(count);
})

musicLength.addEventListener("input",()=>{
    audio.play()
    audio.currentTime=musicLength.value;
    play.classList.add("fa-pause")
    play.classList.remove("fa-play")
    time()
})

backward.addEventListener("click",()=>{
    audio.currentTime = audio.currentTime-10
})
forward.addEventListener("click",()=>{
    audio.currentTime = audio.currentTime+10
})

function time(){
    setInterval(()=>{
        show()
    },1000)
}

function show(){
    CurrenntMin = Math.floor(audio.currentTime / 60)
    curretSec = Math.floor(audio.currentTime - (CurrenntMin * 60))

    durationMin = Math.floor(audio.duration / 60)
    durationSec = Math.floor(audio.duration - (durationMin * 60))

    if(CurrenntMin < 10){
        CurrenntMin = "0" + CurrenntMin
    }
    if(curretSec < 10){
        curretSec = "0" + curretSec
    }
    if(durationMin < 10){
        durationMin = "0" + durationMin
    }
    if(durationSec < 10){
        durationSec = "0" + durationSec
    }
    current.innerText = `${CurrenntMin}:${curretSec}`
    full.innerText = `${durationMin}:${durationSec}`
}