
const frontEl = document.getElementById("front");
const menuBtnEl = document.getElementById("menuBtn");
const monstercatEl = document.getElementById("monstercat");
const closeBtnEl = document.getElementById("closeBtn");
const layerEl = document.getElementById("layer");
const playBtnEls = document.querySelectorAll(".playBtn");
const songEl = document.getElementById("song");
const listenBtnEl = document.getElementById("listenBtn");
const pauseBtnEls = document.querySelectorAll(".pauseBtn");

const openModal = () => {
    monstercatEl.classList.remove("hidden")
    layerEl.classList.remove("hidden")
}

const closeModal = () => {
    monstercatEl.classList.add("hidden")
    layerEl.classList.add("hidden")
}

menuBtnEl.addEventListener("click", openModal);

const closeElements = [closeBtnEl, layerEl];
closeElements.forEach((closeElement)=> {
    closeElement.addEventListener("click", closeModal)
})


const fakeData = [
    {
        name: "smallThings",
        artist: "Conro",
        title: "SmallThings",
        duration: "4:10",
    },
    {
        name: "withoutyourLove",
        artist: "Conro",
        title: "WithoutyourLove",
        duration: "4:10",
    },
    {
        name: "therapy",
        artist: "Conro",
        title: "Therapy",
        duration: "4:10",
    },
    {
        name: "fighters",
        artist: "Conro",
        title: "Fighters",
        duration: "4:10",
    },
    {
        name: "wayUp",
        artist: "Conro",
        title: "WayUp",
        duration: "4:10",
    },
    {
        name: "waiting",
        artist: "Conro",
        title: "Waiting",
        duration: "4:10",
    },
    {
        name: "dreaming",
        artist: "Conro",
        title: "Dreaming",
        duration: "4:10",
    },
    {
        name: "tattoo",
        artist: "Conro",
        title: "Tattoo",
        duration: "4:10",
    },
    {
        name: "out for the Night",
        artist: "Conro",
        title: "Out for the Night",
        duration: "4:10",
    },
    {
        name: "overdue",
        artist: "Conro",
        title: "Overdue",
        duration: "4:10",
    },
    {
        name: "sayIt",
        artist: "Conro",
        title: "SayIt",
        duration: "4:10",
    },
    {
        name: "here to Stay",
        artist: "Conro",
        title: "Here to Stay",
        duration: "4:10",
    },
];

let isPlaying = false;
let songIndex = 0;

const playSong = () => {
    songEl.play();
    isPlaying = true;
   pauseBtnEls[songIndex].classList.remove("hidden")

   playBtnEls[songIndex].classList.add("hidden")
   listenBtnEl.innerHTML = `<i class="fa-solid fa-pause"></i> Listen Now`;
}

const pauseSong = () => {
    songEl.pause();
    isPlaying = false;
    pauseBtnEls[songIndex].classList.add("hidden")
    playBtnEls[songIndex].classList.remove("hidden")
    listenBtnEl.innerHTML = `<i class="fa-solid fa-play"></i> Listen Now`;
   
}

playBtnEls.forEach((playBtn, index) => {
    playBtn.addEventListener("click", () => {
        if (songIndex === index && isPlaying) {
            pauseSong();
        } else {
            songIndex = index;
            displaySong();
            playSong();
        }
    });
});


pauseBtnEls.forEach((pauseBtn, index) => {
    pauseBtn.addEventListener("click", () => {
        if (songIndex === index && isPlaying) {
            pauseSong();
        } else {
            songIndex = index;
            displaySong();
            pauseSong();
        }
    })
})

const displaySong = () => {
    songEl.src = `./songs/${fakeData[songIndex].name}.mp3`;
};

listenBtnEl.addEventListener("click", () => {
    if (isPlaying) {
        pauseSong();

    } 
    else {
        playSong();
    }
});
