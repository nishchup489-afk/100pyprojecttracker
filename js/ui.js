/* =========================================
CARD CREATION
========================================= */

function createProjectCard(project, savedData = {}) {

const template = document
.getElementById("projectCardTemplate")
.content.cloneNode(true)

const card = template.querySelector(".projectCard")

const title = template.querySelector(".projectTitle")
const description = template.querySelector(".projectDescription")

const githubInput = template.querySelector(".githubInput")
const liveInput = template.querySelector(".liveInput")

const stars = template.querySelectorAll(".stars span")
const notes = template.querySelector(".notes")
const status = template.querySelector(".status")

title.textContent = project.name
description.textContent = project.description

card.dataset.id = project.id


/* =========================================
LOAD SAVED DATA
========================================= */

if(savedData.github){

githubInput.value = savedData.github
status.textContent = "✔"
status.classList.add("completed")

}

if(savedData.live){

liveInput.value = savedData.live

}

if(savedData.notes){

notes.value = savedData.notes

}

if(savedData.stars){

stars.forEach(star => {

if(Number(star.dataset.star) <= savedData.stars){

star.classList.add("active")

}

})

}


/* =========================================
STAR RATING ANIMATION
========================================= */

stars.forEach(star => {

star.addEventListener("mouseenter", () => {

animateStars(stars, star.dataset.star)

})

star.addEventListener("mouseleave", () => {

resetStars(stars, savedData.stars)

})

})



/* =========================================
CARD ENTRANCE ANIMATION
========================================= */

requestAnimationFrame(() => {

card.classList.add("card-enter")

})


return card

}



/* =========================================
STAR ANIMATION
========================================= */

function animateStars(stars, rating){

stars.forEach(star => {

star.classList.remove("active")

if(Number(star.dataset.star) <= rating){

star.classList.add("active")

}

})

}



function resetStars(stars, rating){

stars.forEach(star => {

star.classList.remove("active")

if(Number(star.dataset.star) <= rating){

star.classList.add("active")

}

})

}



/* =========================================
COMPLETION ANIMATION
========================================= */

function animateCompletion(card){

card.classList.add("completed-flash")

setTimeout(() => {

card.classList.remove("completed-flash")

}, 800)

}



/* =========================================
CARD HOVER EFFECT
========================================= */

function enableHoverEffects(){

const cards = document.querySelectorAll(".projectCard")

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-6px) scale(1.02)"

})

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0) scale(1)"

})

})

}



/* =========================================
SMOOTH SCROLL HELPERS
========================================= */

function scrollToTop(){

window.scrollTo({

top:0,
behavior:"smooth"

})

}



/* =========================================
TOAST NOTIFICATION
========================================= */

function showToast(message){

const toast = document.createElement("div")

toast.className = "toast"

toast.textContent = message

document.body.appendChild(toast)

setTimeout(() => {

toast.classList.add("visible")

}, 50)

setTimeout(() => {

toast.classList.remove("visible")

setTimeout(() => toast.remove(), 300)

}, 2500)

}