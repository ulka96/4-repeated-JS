
const btn25El = document.getElementById("btn25");
const btn100El = document.getElementById("btn100");
const btn200El = document.getElementById("btn200");
const btn300El = document.getElementById("btn300");
const btn400El = document.getElementById("btn400");

const text25El = document.getElementById("text25");
const text100El = document.getElementById("text100");
const text200El = document.getElementById("text200");
const text300El = document.getElementById("text300");
const text400El = document.getElementById("text400");


btn25El.addEventListener("click", () => {
    text25El.classList.remove("hidden");
    text100El.classList.add("hidden");
    text200El.classList.add("hidden");
    text300El.classList.add("hidden");
    text400El.classList.add("hidden");
})


btn100El.addEventListener("click", () => {
    text100El.classList.remove("hidden")
    text25El.classList.add("hidden");
})

btn200El.addEventListener("click", () => {
    text200El.classList.remove("hidden")
    text25El.classList.add("hidden");
    text100El.classList.add("hidden");
    text300El.classList.add("hidden");
    text400El.classList.add("hidden");
})

btn300El.addEventListener("click", () => {
    text300El.classList.remove("hidden")
    text25El.classList.add("hidden");
    text100El.classList.add("hidden");
    text200El.classList.add("hidden");
    text400El.classList.add("hidden");
})

btn400El.addEventListener("click", () => {
    text400El.classList.remove("hidden")
    text25El.classList.add("hidden");
    text100El.classList.add("hidden");
    text200El.classList.add("hidden");
    text300El.classList.add("hidden");
})
