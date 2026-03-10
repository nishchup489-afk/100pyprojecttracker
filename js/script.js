document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("projectsContainer")
const template = document.getElementById("projectCardTemplate")

const searchInput = document.getElementById("search")
const categoryFilter = document.getElementById("categoryFilter")

let tracker = loadTracker()

renderProjects(projects)

updateStats()

initCharts(tracker)



function renderProjects(projectList){

container.innerHTML = ""

projectList.forEach(project => {

const clone = template.content.cloneNode(true)

const card = clone.querySelector(".projectCard")
const title = clone.querySelector(".projectTitle")
const desc = clone.querySelector(".projectDescription")

const githubInput = clone.querySelector(".githubInput")
const liveInput = clone.querySelector(".liveInput")

const saveBtn = clone.querySelector(".saveBtn")
const stars = clone.querySelectorAll(".stars span")

const notes = clone.querySelector(".notes")
const status = clone.querySelector(".status")

title.textContent = project.name
desc.textContent = project.description

card.dataset.id = project.id

const saved = tracker[project.id] || {}

githubInput.value = saved.github || ""
liveInput.value = saved.live || ""
notes.value = saved.notes || ""

if(saved.github){
status.textContent = "✔"
}

if(saved.stars){
stars.forEach(s => {
if(Number(s.dataset.star) <= saved.stars){
s.classList.add("active")
}
})
}



saveBtn.addEventListener("click", () => {

const github = githubInput.value.trim()
const live = liveInput.value.trim()

if(!github){
alert("GitHub repo is required")
return
}

tracker[project.id] = {

github,
live,
notes: notes.value,
stars: saved.stars || 0

}

saveTracker(tracker)

status.textContent = "✔"

updateStats()
updateCharts(tracker)

})



stars.forEach(star => {

star.addEventListener("click", () => {

const rating = Number(star.dataset.star)

tracker[project.id] = tracker[project.id] || {}

tracker[project.id].stars = rating

saveTracker(tracker)

stars.forEach(s => {

s.classList.remove("active")

if(Number(s.dataset.star) <= rating){
s.classList.add("active")
}

})

})

})



notes.addEventListener("blur", () => {

tracker[project.id] = tracker[project.id] || {}

tracker[project.id].notes = notes.value

saveTracker(tracker)

})



container.appendChild(clone)

})

}



function updateStats(){

const total = projects.length

const completed = Object.values(tracker).filter(p => p.github).length

const remaining = total - completed

const percent = Math.round((completed / total) * 100)

document.getElementById("completedProjects").textContent = completed
document.getElementById("remainingProjects").textContent = remaining
document.getElementById("completionPercent").textContent = percent + "%"

}



searchInput.addEventListener("input", () => {

const query = searchInput.value.toLowerCase()

const filtered = projects.filter(p =>
p.name.toLowerCase().includes(query)
)

renderProjects(filtered)

})



categoryFilter.addEventListener("change", () => {

const category = categoryFilter.value

if(category === "all"){
renderProjects(projects)
return
}

const filtered = projects.filter(p =>
p.category === category
)

renderProjects(filtered)

})

})