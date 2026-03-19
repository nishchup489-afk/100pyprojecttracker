/* =========================================
CARD CREATION
========================================= */

function createProjectCard(project, savedData = {}) {

    const template = document.getElementById("projectCardTemplate").content.cloneNode(true);

    const wrapper = template.querySelector(".project-card-wrapper");
    const number = template.querySelector(".project-card-number");
    const card = template.querySelector(".project-card");
    const title = template.querySelector(".project-title");
    const description = template.querySelector(".project-description");
    const githubInput = template.querySelector(".github-input");
    const liveInput = template.querySelector(".live-input");
    const starsContainer = template.querySelector(".stars");
    const notes = template.querySelector(".notes");
    const status = template.querySelector(".status");
    const saveBtn = template.querySelector('.save-btn');

    number.textContent = project.id;
    title.textContent = project.name;
    description.textContent = project.description;
    wrapper.dataset.id = project.id;
    starsContainer.dataset.projectId = project.id;

    if (project.type === 'mega') {
        card.classList.add('glorified');
    } else if (project.type === 'capstone') {
        card.classList.add('glorified', 'marvellous', 'extraordinary');
    }


    /* =========================================
    LOAD SAVED DATA
    ========================================= */

    if (savedData.github) {
        githubInput.value = savedData.github;
        status.textContent = "✔";
        status.classList.add("text-green-500");
    }

    if (savedData.live) {
        liveInput.value = savedData.live;
    }

    if (savedData.notes) {
        notes.value = savedData.notes;
    }

    if (savedData.stars) {
        updateStars(starsContainer, savedData.stars);
    }


    /* =========================================
    STAR RATING INTERACTION
    ========================================= */

    const stars = starsContainer.querySelectorAll('span');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.dataset.star;
            const projectId = starsContainer.dataset.projectId;
            let tracker = loadTracker();
            if (!tracker[projectId]) {
                tracker[projectId] = {};
            }
            tracker[projectId].stars = rating;
            saveTracker(tracker);
            updateStars(starsContainer, rating);
        });
    });


    return wrapper;
}



/* =========================================
STAR VISUALS
========================================= */

function updateStars(starsContainer, rating) {
    const stars = starsContainer.querySelectorAll('span');
    stars.forEach(star => {
        if (parseInt(star.dataset.star) <= rating) {
            star.classList.add('text-yellow-400');
            star.classList.remove('text-gray-600');
        } else {
            star.classList.remove('text-yellow-400');
            star.classList.add('text-gray-600');
        }
    });
}



/* =========================================
SMOOTH SCROLL HELPERS
========================================= */

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================================
TOAST NOTIFICATION
========================================= */

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "fixed bottom-5 right-5 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
    }, 50);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}