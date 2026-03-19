document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects");
    let tracker = loadTracker();
    
    // ========== NEW: Filter state ==========
    let currentFilters = {
        search: '',
        status: 'all',
        category: 'all',
        type: 'all',
        sort: 'default'
    };
    
    // ========== NEW: Initialize category filters ==========
    function initCategoryFilters() {
        const categories = [...new Set(projects.map(p => p.category))];
        const categoryContainer = document.getElementById('category-filters');
        
        if (!categoryContainer) return; // Safety check
        
        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn active';
        allBtn.dataset.category = 'all';
        allBtn.innerHTML = '<span class="mr-2">🎯</span> All Categories';
        categoryContainer.appendChild(allBtn);
        
        const categoryIcons = {
            numbers: '🔢', algorithms: '🧮', graph: '🕸️', data: '📊',
            text: '📝', network: '🌐', oop: '🏗️', concurrency: '⚡',
            web: '🌍', files: '📁', database: '🗄️', media: '🎨',
            security: '🔒', capstone: '👑'
        };
        
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.category = cat;
            const icon = categoryIcons[cat] || '📌';
            btn.innerHTML = `<span class="mr-2">${icon}</span> ${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
            categoryContainer.appendChild(btn);
        });
    }
    
    // ========== MODIFIED: Search with filter integration ==========
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        currentFilters.search = searchInput.value.toLowerCase();
        applyFilters();
    });
    
    // ========== NEW: Status filter ==========
    const statusFilters = document.getElementById('status-filters');
    if (statusFilters) {
        statusFilters.addEventListener('click', (e) => {
            if (e.target.closest('.filter-btn')) {
                const btn = e.target.closest('.filter-btn');
                document.querySelectorAll('#status-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilters.status = btn.dataset.status;
                applyFilters();
            }
        });
    }
    
    // ========== NEW: Category filter ==========
    const categoryFiltersEl = document.getElementById('category-filters');
    if (categoryFiltersEl) {
        categoryFiltersEl.addEventListener('click', (e) => {
            if (e.target.closest('.filter-btn')) {
                const btn = e.target.closest('.filter-btn');
                document.querySelectorAll('#category-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilters.category = btn.dataset.category;
                applyFilters();
            }
        });
    }
    
    // ========== NEW: Type filter ==========
    const typeFilters = document.getElementById('type-filters');
    if (typeFilters) {
        typeFilters.addEventListener('click', (e) => {
            if (e.target.closest('.filter-btn')) {
                const btn = e.target.closest('.filter-btn');
                document.querySelectorAll('#type-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilters.type = btn.dataset.type;
                applyFilters();
            }
        });
    }
    
    // ========== NEW: Sort options ==========
    const sortOptions = document.getElementById('sort-options');
    if (sortOptions) {
        sortOptions.addEventListener('click', (e) => {
            if (e.target.closest('.filter-btn')) {
                const btn = e.target.closest('.filter-btn');
                document.querySelectorAll('#sort-options .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilters.sort = btn.dataset.sort;
                applyFilters();
            }
        });
    }
    
    // ========== NEW: Clear filters ==========
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            currentFilters = {
                search: '',
                status: 'all',
                category: 'all',
                type: 'all',
                sort: 'default'
            };
            searchInput.value = '';
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.filter-btn[data-status="all"], .filter-btn[data-category="all"], .filter-btn[data-type="all"], .filter-btn[data-sort="default"]').forEach(btn => btn.classList.add('active'));
            applyFilters();
            showToast('🔄 Filters cleared', 'info');
        });
    }
    
    // ========== NEW: Collapse/Expand all ==========
    const collapseAllBtn = document.getElementById('collapse-all');
    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.category-content').forEach(content => {
                content.classList.add('collapsed');
            });
            showToast('➖ All categories collapsed', 'info');
        });
    }
    
    const expandAllBtn = document.getElementById('expand-all');
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.category-content').forEach(content => {
                content.classList.remove('collapsed');
            });
            showToast('➕ All categories expanded', 'info');
        });
    }
    
    // ========== NEW: Apply all filters ==========
    function applyFilters() {
        let filteredProjects = [...projects];
        
        // Search filter
        if (currentFilters.search) {
            filteredProjects = filteredProjects.filter(p => 
                p.name.toLowerCase().includes(currentFilters.search) || 
                p.description.toLowerCase().includes(currentFilters.search) ||
                p.category.toLowerCase().includes(currentFilters.search)
            );
        }
        
        // Status filter
        if (currentFilters.status !== 'all') {
            filteredProjects = filteredProjects.filter(p => {
                const saved = tracker[p.id];
                if (currentFilters.status === 'completed') return saved?.github;
                if (currentFilters.status === 'in-progress') return saved?.time && !saved?.github;
                if (currentFilters.status === 'not-started') return !saved;
            });
        }
        
        // Category filter
        if (currentFilters.category !== 'all') {
            filteredProjects = filteredProjects.filter(p => p.category === currentFilters.category);
        }
        
        // Type filter
        if (currentFilters.type !== 'all') {
            filteredProjects = filteredProjects.filter(p => p.type === currentFilters.type);
        }
        
        // Sort
        if (currentFilters.sort !== 'default') {
            filteredProjects.sort((a, b) => {
                if (currentFilters.sort === 'name') {
                    return a.name.localeCompare(b.name);
                }
                if (currentFilters.sort === 'progress') {
                    const aComplete = tracker[a.id]?.github ? 1 : 0;
                    const bComplete = tracker[b.id]?.github ? 1 : 0;
                    return bComplete - aComplete;
                }
                if (currentFilters.sort === 'time') {
                    const aTime = tracker[a.id]?.time || 0;
                    const bTime = tracker[b.id]?.time || 0;
                    return bTime - aTime;
                }
                if (currentFilters.sort === 'rating') {
                    const aRating = tracker[a.id]?.rating || 0;
                    const bRating = tracker[b.id]?.rating || 0;
                    return bRating - aRating;
                }
            });
        }
        
        updateActiveFiltersDisplay();
        renderProjects(filteredProjects);
        updateResultsCount(filteredProjects.length);
        
        // Show search results count
        if (currentFilters.search) {
            showToast(`🔍 Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''}`, 'info');
        }
    }
    
    // ========== NEW: Update active filters display ==========
    function updateActiveFiltersDisplay() {
        const activeFiltersSection = document.getElementById('active-filters');
        const activeFiltersList = document.getElementById('active-filters-list');
        
        if (!activeFiltersSection || !activeFiltersList) return;
        
        activeFiltersList.innerHTML = '';
        let hasFilters = false;
        
        if (currentFilters.search) {
            hasFilters = true;
            addFilterBadge('Search', currentFilters.search, () => {
                searchInput.value = '';
                currentFilters.search = '';
                applyFilters();
            });
        }
        
        if (currentFilters.status !== 'all') {
            hasFilters = true;
            addFilterBadge('Status', currentFilters.status, () => {
                currentFilters.status = 'all';
                document.querySelector('.filter-btn[data-status="all"]')?.click();
            });
        }
        
        if (currentFilters.category !== 'all') {
            hasFilters = true;
            addFilterBadge('Category', currentFilters.category, () => {
                currentFilters.category = 'all';
                document.querySelector('.filter-btn[data-category="all"]')?.click();
            });
        }
        
        if (currentFilters.type !== 'all') {
            hasFilters = true;
            addFilterBadge('Type', currentFilters.type, () => {
                currentFilters.type = 'all';
                document.querySelector('.filter-btn[data-type="all"]')?.click();
            });
        }
        
        if (currentFilters.sort !== 'default') {
            hasFilters = true;
            addFilterBadge('Sort', currentFilters.sort, () => {
                currentFilters.sort = 'default';
                document.querySelector('.filter-btn[data-sort="default"]')?.click();
            });
        }
        
        activeFiltersSection.classList.toggle('hidden', !hasFilters);
    }
    
    // ========== NEW: Add filter badge ==========
    function addFilterBadge(label, value, onRemove) {
        const activeFiltersList = document.getElementById('active-filters-list');
        if (!activeFiltersList) return;
        
        const badge = document.createElement('div');
        badge.className = 'active-filter-badge';
        badge.innerHTML = `
            <span>${label}: ${value}</span>
            <button>×</button>
        `;
        badge.querySelector('button').addEventListener('click', onRemove);
        activeFiltersList.appendChild(badge);
    }
    
    // ========== NEW: Update results count ==========
    function updateResultsCount(count) {
        const resultsCountEl = document.getElementById('results-count');
        if (resultsCountEl) {
            resultsCountEl.textContent = count;
        }
    }

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isDark = !document.body.classList.contains('light');
        
        if (!isDark) {
            localStorage.setItem('theme', 'light');
            document.body.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)';
            showToast('☀️ Light mode activated', 'success');
        } else {
            localStorage.setItem('theme', 'dark');
            document.body.style.background = 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)';
            showToast('🌙 Dark mode activated', 'success');
        }
    });

    // Load theme from local storage
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        document.body.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)';
    }

    // ========== MODIFIED: Initialize with filters ==========
    initCategoryFilters();
    applyFilters();
    updateStats();
    initCharts();
    renderNotesSummary();

    function renderProjects(projectList) {
        container.innerHTML = "";
        const categories = {};

        projectList.forEach(project => {
            if (!categories[project.category]) {
                categories[project.category] = {
                    normal: [],
                    mega: [],
                    capstone: []
                };
            }
            categories[project.category][project.type].push(project);
        });

        let categoryDelay = 0;
        for (const category in categories) {
            const categorySection = document.createElement('section');
            categorySection.id = category;
            categorySection.classList.add('mb-12', 'reveal');
            categorySection.style.animationDelay = `${categoryDelay * 0.1}s`;
            
            const totalProjects = categories[category].normal.length + 
                                 categories[category].mega.length + 
                                 categories[category].capstone.length;
            
            const completedInCategory = [...categories[category].normal, 
                                         ...categories[category].mega, 
                                         ...categories[category].capstone]
                                        .filter(p => tracker[p.id]?.github).length;
            
            const categoryProgress = Math.round((completedInCategory / totalProjects) * 100);
            
            // ========== MODIFIED: Category header with collapse functionality ==========
            categorySection.innerHTML = `
                <div class="category-header flex items-center justify-between mb-6 flex-wrap gap-4 cursor-pointer">
                    <div class="flex items-center gap-4 flex-1">
                        <span class="collapse-icon text-2xl transition-transform duration-300">▼</span>
                        <h2 class="text-3xl font-black gradient-text">${category.toUpperCase()}</h2>
                        <div class="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="glass-card px-4 py-2 rounded-full text-sm font-bold">
                            <span class="text-green-400">${completedInCategory}</span>
                            <span class="text-gray-500">/</span>
                            <span class="text-blue-400">${totalProjects}</span>
                        </span>
                        <div class="glass-card px-4 py-2 rounded-full">
                            <span class="text-sm font-bold gradient-text">${categoryProgress}%</span>
                        </div>
                    </div>
                </div>
            `;

            const projectsContainer = document.createElement('div');
            projectsContainer.className = 'category-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 overflow-hidden';

            const appendProjects = (projectList) => {
                projectList.forEach((project, index) => {
                    const card = createProjectCard(project, tracker[project.id], categoryDelay + index);
                    projectsContainer.appendChild(card);
                });
            }

            appendProjects(categories[category].normal);
            appendProjects(categories[category].mega);
            appendProjects(categories[category].capstone);

            categorySection.appendChild(projectsContainer);
            container.appendChild(categorySection);
            
            // ========== NEW: Add collapse/expand functionality ==========
            const header = categorySection.querySelector('.category-header');
            header.addEventListener('click', () => {
                const content = projectsContainer;
                const icon = header.querySelector('.collapse-icon');
                content.classList.toggle('collapsed');
                icon.style.transform = content.classList.contains('collapsed') ? 'rotate(-90deg)' : 'rotate(0deg)';
            });
            
            categoryDelay += totalProjects;
        }

        // Add event listeners after all cards are created
        setTimeout(() => addCardEventListeners(), 100);
        
        // Trigger reveal animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        });
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }

   function addCardEventListeners() {
    document.querySelectorAll('.project-card-wrapper').forEach(cardWrapper => {
        const projectId = cardWrapper.dataset.id;
        const project = projects.find(p => p.id == projectId);
        const saved = tracker[project.id] || {};

        const githubInput = cardWrapper.querySelector(".github-input");
        const liveInput = cardWrapper.querySelector(".live-input");
        const saveBtn = cardWrapper.querySelector(".save-btn");
        const notes = cardWrapper.querySelector(".notes");
        const status = cardWrapper.querySelector(".status");
        const startTimerBtn = cardWrapper.querySelector('.start-timer');
        const timeDisplay = cardWrapper.querySelector('.time-display');
        const stars = cardWrapper.querySelectorAll('.stars span');

        // Style inputs
        const styleInput = (input) => {
            input.className = 'w-full glass-card text-white px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed';
        };

        styleInput(githubInput);
        styleInput(liveInput);
        
        // Style notes textarea
        notes.className = 'w-full glass-card text-white px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 placeholder:text-gray-500 resize-none min-h-[100px]';

        // Style save button
        saveBtn.className = 'w-full px-6 py-3 btn-gradient rounded-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

        // Star rating system
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const rating = index + 1;
                tracker[project.id] = tracker[project.id] || {};
                tracker[project.id].rating = rating;
                saveTracker(tracker);
                updateStarDisplay(stars, rating);
                createStarBurst(star);
                showToast(`⭐ Rated ${rating}/5 stars!`, 'success');
            });
        });

        // Load saved rating
        if (saved.rating) {
            updateStarDisplay(stars, saved.rating);
        }

        saveBtn.addEventListener("click", () => {
            const github = githubInput.value.trim();
            const live = liveInput.value.trim();

            if (!github) {
                showToast("❌ GitHub URL is required!", 'error');
                githubInput.focus();
                githubInput.style.animation = 'shake 0.5s';
                githubInput.classList.add('ring-2', 'ring-red-500');
                setTimeout(() => {
                    githubInput.classList.remove('ring-2', 'ring-red-500');
                    githubInput.style.animation = '';
                }, 1000);
                return;
            }

            if (!github.includes('github.com')) {
                showToast("❌ Please enter a valid GitHub URL", 'error');
                githubInput.focus();
                githubInput.style.animation = 'shake 0.5s';
                githubInput.classList.add('ring-2', 'ring-red-500');
                setTimeout(() => {
                    githubInput.classList.remove('ring-2', 'ring-red-500');
                    githubInput.style.animation = '';
                }, 1000);
                return;
            }

            tracker[project.id] = {
                ...saved,
                github,
                live,
                notes: notes.value,
                time: saved.time || 0,
                completedAt: new Date().toISOString()
            };

            saveTracker(tracker);
            status.textContent = "✅ Completed";
            status.classList.remove('not-started', 'in-progress');
            status.classList.add('completed');
            
            // Success animation
            createConfetti(saveBtn);
            showToast("🎉 Project saved successfully!", 'success');
            updateStats();
            updateCharts();
            renderNotesSummary();
            
            // Disable inputs after saving with smooth transition
            githubInput.disabled = true;
            liveInput.disabled = true;
            notes.disabled = true;
            saveBtn.textContent = '✓ Saved';
            saveBtn.disabled = true;
            saveBtn.classList.remove('btn-gradient');
            saveBtn.classList.add('bg-green-600');
        });

        // Load saved data
        if (saved.github) {
            githubInput.value = saved.github;
            liveInput.value = saved.live || '';
            githubInput.disabled = true;
            liveInput.disabled = true;
            notes.disabled = true;
            saveBtn.textContent = '✓ Saved';
            saveBtn.disabled = true;
            saveBtn.classList.remove('btn-gradient');
            saveBtn.classList.add('bg-green-600');
        }
        if (saved.notes) {
            notes.value = saved.notes;
        }

        // Notes auto-save with debounce
        let notesTimeout;
        notes.addEventListener("input", () => {
            clearTimeout(notesTimeout);
            notesTimeout = setTimeout(() => {
                tracker[project.id] = tracker[project.id] || {};
                tracker[project.id].notes = notes.value;
                saveTracker(tracker);
                renderNotesSummary();
            }, 1000);
        });

        notes.addEventListener("blur", () => {
            if (notes.value) {
                showToast("📝 Notes saved", 'info');
            }
        });

        // Enhanced timer with animations
        let timerInterval;
        startTimerBtn.addEventListener('click', () => {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
                startTimerBtn.innerHTML = '<span class="flex items-center gap-2"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg> Start Timer</span>';
                startTimerBtn.className = 'px-4 py-2 btn-gradient rounded-xl font-semibold transition-all duration-300 hover:scale-105';
                saveTracker(tracker);
                showToast('⏸️ Timer stopped', 'info');
            } else {
                let startTime = Date.now();
                const initialTime = (tracker[project.id] && tracker[project.id].time) || 0;

                timerInterval = setInterval(() => {
                    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                    const totalTime = initialTime + elapsedTime;

                    timeDisplay.textContent = formatTime(totalTime);
                    timeDisplay.classList.add('pulse');

                    if (!tracker[project.id]) tracker[project.id] = {};
                    tracker[project.id].time = totalTime;

                    updateStats();
                }, 1000);
                
                startTimerBtn.innerHTML = '<span class="flex items-center gap-2"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd"/></svg> Stop Timer</span>';
                startTimerBtn.className = 'px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg';
                showToast('⏱️ Timer started!', 'success');
            }
        });

        // Style timer button and display
        startTimerBtn.className = 'px-4 py-2 btn-gradient rounded-xl font-semibold transition-all duration-300 hover:scale-105';
        timeDisplay.className = 'text-2xl font-black gradient-text';

        timeDisplay.textContent = formatTime(saved.time || 0);
    });
}

    function updateStarDisplay(stars, rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function createStarBurst(element) {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: 4px;
                height: 4px;
                background: #fbbf24;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 5;
            const velocity = 50;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let posX = x, posY = y;
            let opacity = 1;
            
            const animate = () => {
                posX += vx * 0.1;
                posY += vy * 0.1;
                opacity -= 0.02;
                
                particle.style.left = posX + 'px';
                particle.style.top = posY + 'px';
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            animate();
        }
    }

    function createConfetti(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top}px;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 2px;
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(confetti);
            
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 100 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity - 200;
            
            let posX = rect.left + rect.width / 2;
            let posY = rect.top;
            let velY = vy;
            let opacity = 1;
            let rotation = 0;
            
            const animate = () => {
                posX += vx * 0.01;
                posY += velY * 0.01;
                velY += 5; // gravity
                rotation += 5;
                opacity -= 0.01;
                
                confetti.style.left = posX + 'px';
                confetti.style.top = posY + 'px';
                confetti.style.opacity = opacity;
                confetti.style.transform = `rotate(${rotation}deg)`;
                
                if (opacity > 0 && posY < window.innerHeight) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };
            
            animate();
        }
    }

    function updateStats() {
        const total = projects.length;
        const completed = Object.values(tracker).filter(p => p.github).length;
        const remaining = total - completed;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
        const totalTime = Object.values(tracker).reduce((acc, p) => acc + (p.time || 0), 0);

        // Animate number changes
        animateValue('completedProjects', completed);
        animateValue('remainingProjects', remaining);
        animateValue('completionPercent', percent, '%');
        document.getElementById("totalTime").textContent = formatTime(totalTime);
    }

    function animateValue(elementId, endValue, suffix = '') {
        const element = document.getElementById(elementId);
        const startValue = parseInt(element.textContent) || 0;
        const duration = 500;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    function renderNotesSummary() {
        const notesSummaryContent = document.getElementById("notes-summary-content");
        notesSummaryContent.innerHTML = "";
        const ul = document.createElement("ul");
        ul.className = "space-y-3";

        let hasNotes = false;
        for (const projectId in tracker) {
            if (tracker[projectId].notes) {
                hasNotes = true;
                const li = document.createElement("li");
                const project = projects.find(p => p.id == projectId);
                li.className = "glass-card p-4 rounded-xl hover:scale-102 transition";
                li.innerHTML = `
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">📝</span>
                        <div class="flex-1">
                            <strong class="text-white font-bold block mb-1">${project.name}</strong>
                            <p class="text-gray-400 text-sm leading-relaxed">${tracker[projectId].notes}</p>
                        </div>
                    </div>
                `;
                ul.appendChild(li);
            }
        }

        if (!hasNotes) {
            notesSummaryContent.innerHTML = `
                <div class="text-center py-12">
                    <div class="text-6xl mb-4 opacity-50">📝</div>
                    <p class="text-gray-400 text-lg">No notes yet. Add some notes to your projects!</p>
                </div>
            `;
        } else {
            notesSummaryContent.appendChild(ul);
        }
    }

    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return `${h}h ${m}m`;
    }

    // Toast notification system
    window.showToast = function(message, type = 'info') {
        const toast = document.createElement('div');
        const colors = {
            success: 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400',
            error: 'bg-gradient-to-r from-red-500 to-rose-600 border-red-400',
            info: 'bg-gradient-to-r from-blue-500 to-cyan-600 border-blue-400',
            warning: 'bg-gradient-to-r from-orange-500 to-amber-600 border-orange-400'
        };
        
        toast.className = `fixed top-24 right-6 z-[9999] ${colors[type]} text-white px-6 py-4 rounded-xl shadow-2xl border-l-4 transform translate-x-0 transition-all duration-300 backdrop-blur-xl`;
        toast.style.animation = 'slideIn 0.3s ease-out';
        toast.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="font-semibold">${message}</span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(400px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Welcome message
    setTimeout(() => {
        showToast('🚀 Ready to build amazing projects!', 'success');
    }, 500);
});