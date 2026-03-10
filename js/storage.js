/* =========================================
   LOCAL STORAGE KEY
========================================= */

const STORAGE_KEY = "python100Tracker"


/* =========================================
   LOAD TRACKER DATA
========================================= */

function loadTracker(){

    try{

        const data = localStorage.getItem(STORAGE_KEY)

        if(!data){
            return {}
        }

        return JSON.parse(data)

    }catch(err){

        console.error("Error loading tracker:", err)

        return {}

    }

}



/* =========================================
   SAVE TRACKER DATA
========================================= */

function saveTracker(data){

    try{

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        )

    }catch(err){

        console.error("Error saving tracker:", err)

    }

}



/* =========================================
   CLEAR ALL PROGRESS
========================================= */

function resetTracker(){

    const confirmReset = confirm(
        "Are you sure you want to reset all progress?"
    )

    if(confirmReset){

        localStorage.removeItem(STORAGE_KEY)

        location.reload()

    }

}



/* =========================================
   EXPORT DATA (backup)
========================================= */

function exportTracker(){

    const data = loadTracker()

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: "application/json" }
    )

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")

    a.href = url
    a.download = "python100-progress.json"

    a.click()

}



/* =========================================
   IMPORT DATA (restore backup)
========================================= */

function importTracker(file){

    const reader = new FileReader()

    reader.onload = function(e){

        try{

            const data = JSON.parse(e.target.result)

            saveTracker(data)

            alert("Progress imported successfully")

            location.reload()

        }catch(err){

            alert("Invalid file")

        }

    }

    reader.readAsText(file)

}



/* =========================================
   CHECK IF PROJECT COMPLETED
========================================= */

function isCompleted(projectId){

    const tracker = loadTracker()

    if(!tracker[projectId]){
        return false
    }

    return Boolean(tracker[projectId].github)

}



/* =========================================
   GET COMPLETION COUNT
========================================= */

function getCompletedCount(){

    const tracker = loadTracker()

    return Object.values(tracker)
        .filter(p => p.github)
        .length

}