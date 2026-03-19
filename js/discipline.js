document.addEventListener("DOMContentLoaded", () => {
    const weeklyGoalInput = document.getElementById('weekly-goal');
    const setWeeklyGoalBtn = document.getElementById('set-weekly-goal');
    const estimatedCompletionDateEl = document.getElementById('estimated-completion-date');
    const dailyTrackerEl = document.getElementById('daily-tracker');
    const consistencyGridEl = document.getElementById('consistency-grid');

    let tracker = loadTracker();
    let disciplineData = loadDisciplineData();

    setWeeklyGoalBtn.addEventListener('click', setWeeklyGoal);

    renderDailyTracker();
    renderConsistencyGrid();
    updateEstimatedCompletionDate();

    function setWeeklyGoal() {
        const goal = parseInt(weeklyGoalInput.value);
        if (goal > 0) {
            disciplineData.weeklyGoal = goal;
            saveDisciplineData(disciplineData);
            updateEstimatedCompletionDate();
            showToast('Weekly goal updated!');
        } else {
            showToast('Please enter a valid number for the weekly goal.');
        }
    }

    function updateEstimatedCompletionDate() {
        const remaining = projects.length - Object.values(tracker).filter(p => p.github).length;
        if (disciplineData.weeklyGoal > 0) {
            const weeks = Math.ceil(remaining / disciplineData.weeklyGoal);
            const completionDate = new Date();
            completionDate.setDate(completionDate.getDate() + weeks * 7);
            estimatedCompletionDateEl.textContent = completionDate.toDateString();
        } else {
            estimatedCompletionDateEl.textContent = "Set a weekly goal to estimate.";
        }
    }

    function renderDailyTracker() {
        dailyTrackerEl.innerHTML = '';
        const today = new Date().toISOString().slice(0, 10);

        for (let i = 0; i < 7; i++) {
            const day = new Date();
            day.setDate(day.getDate() - i);
            const dayString = day.toISOString().slice(0, 10);
            const isCompleted = disciplineData.dailyProgress[dayString];

            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.className = 'flex items-center';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `day-${dayString}`;
            checkbox.checked = isCompleted;
            checkbox.className = 'form-checkbox h-5 w-5 text-blue-600';
            checkbox.addEventListener('change', () => {
                disciplineData.dailyProgress[dayString] = checkbox.checked;
                saveDisciplineData(disciplineData);
                renderConsistencyGrid();
            });

            const label = document.createElement('label');
            label.htmlFor = `day-${dayString}`;
            label.className = 'ml-2 text-gray-400';
            label.textContent = day.toDateString();

            checkboxWrapper.appendChild(checkbox);
            checkboxWrapper.appendChild(label);
            dailyTrackerEl.appendChild(checkboxWrapper);
        }
    }

    function renderConsistencyGrid() {
        consistencyGridEl.innerHTML = '';
        const today = new Date();
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(today.getFullYear(), today.getMonth(), i);
            const dayString = day.toISOString().slice(0, 10);
            const isCompleted = disciplineData.dailyProgress[dayString];

            const dayCell = document.createElement('div');
            dayCell.className = `w-8 h-8 rounded-md flex items-center justify-center ${isCompleted ? 'bg-green-500' : 'bg-gray-700'}`;
            dayCell.textContent = i;
            consistencyGridEl.appendChild(dayCell);
        }
    }


    function loadDisciplineData() {
        const data = localStorage.getItem('disciplineData');
        const defaultData = {
            weeklyGoal: 5,
            dailyProgress: {}
        };
        return data ? JSON.parse(data) : defaultData;
    }

    function saveDisciplineData(data) {
        localStorage.setItem('disciplineData', JSON.stringify(data));
    }
});

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