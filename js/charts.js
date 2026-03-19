let progressChart, categoryChart, timeChart;

function initCharts() {
    createProgressChart();
    createCategoryChart();
    createTimeChart();
}

function updateCharts() {
    updateProgressChart();
    updateCategoryChart();
    updateTimeChart();
}

function createProgressChart() {
    const completed = getCompletedCount();
    const remaining = projects.length - completed;

    const ctx = document.getElementById("progressChart").getContext("2d");
    progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [completed, remaining],
                backgroundColor: ['#22c55e', '#4b5563'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#f3f4f6'
                    }
                },
                title: {
                    display: true,
                    text: 'Project Completion Status',
                    color: '#f3f4f6'
                }
            }
        }
    });
}

function updateProgressChart() {
    const completed = getCompletedCount();
    const remaining = projects.length - completed;
    progressChart.data.datasets[0].data = [completed, remaining];
    progressChart.update();
}

function createCategoryChart() {
    const categoryCounts = {};
    projects.forEach(p => {
        if (!categoryCounts[p.category]) {
            categoryCounts[p.category] = 0;
        }
        categoryCounts[p.category]++;
    });

    const ctx = document.getElementById("categoryChart").getContext("2d");
    categoryChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: Object.keys(categoryCounts),
            datasets: [{
                data: Object.values(categoryCounts),
                backgroundColor: [
                    '#3b82f6', '#16a34a', '#ef4444', '#f97316', '#8b5cf6', '#fde047', '#ec4899', '#64748b'
                ].slice(0, Object.keys(categoryCounts).length),
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#f3f4f6'
                    }
                },
                title: {
                    display: true,
                    text: 'Projects by Category',
                    color: '#f3f4f6'
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#4b5563'
                    },
                    angleLines: {
                        color: '#4b5563'
                    },
                    ticks: {
                        color: '#f3f4f6',
                        backdropColor: 'transparent'
                    }
                }
            }
        }
    });
}

function updateCategoryChart() {
    // This chart is static for now
}

function createTimeChart() {
    const projectNames = projects.map(p => p.name);
    const projectTimes = projects.map(p => (getProjectData(p.id).time / 3600).toFixed(2));

    const ctx = document.getElementById("timeChart").getContext("2d");
    timeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: projectNames,
            datasets: [{
                label: 'Time Spent (hours)',
                data: projectTimes,
                backgroundColor: '#3b82f6',
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Time Spent per Project',
                    color: '#f3f4f6'
                }
            },
            scales: {
                x: {
                    grid: {
                        color: '#4b5563'
                    },
                    ticks: {
                        color: '#f3f4f6'
                    }
                },
                y: {
                    grid: {
                        color: '#4b5563'
                    },
                    ticks: {
                        color: '#f3f4f6'
                    }
                }
            }
        }
    });
}

function updateTimeChart() {
    timeChart.data.datasets[0].data = projects.map(p => ((getProjectData(p.id).time || 0) / 3600).toFixed(2));
    timeChart.update();
}
