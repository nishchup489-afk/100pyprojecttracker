/* =========================================
   CHART VARIABLES
========================================= */

let progressChart
let categoryChart


/* =========================================
   INIT CHARTS
========================================= */

function initCharts(tracker){

    createProgressChart(tracker)
    createCategoryChart()

}


/* =========================================
   UPDATE CHARTS
========================================= */

function updateCharts(tracker){

    updateProgressChart(tracker)

}


/* =========================================
   PROGRESS CHART
========================================= */

function createProgressChart(tracker){

    const completed = getCompletedCount()
    const total = projects.length
    const remaining = total - completed

    const ctx = document
        .getElementById("progressChart")
        .getContext("2d")

    progressChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: ["Completed", "Remaining"],

            datasets: [{

                data: [completed, remaining],

                backgroundColor: [
                    "#22c55e",
                    "#ef4444"
                ]

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "bottom"
                }

            }

        }

    })

}



function updateProgressChart(tracker){

    const completed = getCompletedCount()
    const total = projects.length
    const remaining = total - completed

    progressChart.data.datasets[0].data = [
        completed,
        remaining
    ]

    progressChart.update()

}



/* =========================================
   CATEGORY CHART
========================================= */

function createCategoryChart(){

    const categoryCounts = {}

    projects.forEach(project => {

        if(!categoryCounts[project.category]){
            categoryCounts[project.category] = 0
        }

        categoryCounts[project.category]++

    })


    const labels = Object.keys(categoryCounts)
    const values = Object.values(categoryCounts)

    const ctx = document
        .getElementById("categoryChart")
        .getContext("2d")


    categoryChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: "Projects per Category",

                data: values,

                backgroundColor: "#3b82f6"

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                y: {
                    beginAtZero: true
                }

            }

        }

    })

}