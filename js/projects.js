const projects = [

/* ================= NUMBERS ================= */

{ id:1, name:"Find PI to the Nth Digit", category:"numbers", type:"normal", description:"Compute π to N digits using high-precision arithmetic." },
{ id:2, name:"Find e to the Nth Digit", category:"numbers", type:"normal", description:"Calculate Euler’s number to N digits." },
{ id:3, name:"Fibonacci Sequence", category:"numbers", type:"normal", description:"Generate Fibonacci numbers efficiently." },
{ id:4, name:"Prime Factorization", category:"numbers", type:"normal", description:"Break integers into their prime factors." },
{ id:5, name:"Next Prime Number", category:"numbers", type:"normal", description:"Find the next prime numbers after N." },
{ id:6, name:"Tile Cost Calculator", category:"numbers", type:"normal", description:"Estimate flooring cost based on area and price." },
{ id:7, name:"Mortgage Calculator", category:"numbers", type:"normal", description:"Calculate loan payments and interest schedule." },
{ id:8, name:"Change Return Program", category:"numbers", type:"normal", description:"Determine optimal coin change for transactions." },
{ id:9, name:"Binary ↔ Decimal Converter", category:"numbers", type:"normal", description:"Convert numbers between binary and decimal." },
{ id:10, name:"Scientific Calculator", category:"numbers", type:"normal", description:"Perform advanced mathematical calculations." },
{ id:11, name:"Unit Converter", category:"numbers", type:"normal", description:"Convert units like length, weight, temperature." },
{ id:12, name:"Alarm Clock", category:"numbers", type:"normal", description:"Create a timer-based alarm system." },
{ id:13, name:"Distance Between Cities", category:"numbers", type:"normal", description:"Compute distance between geographic points." },
{ id:14, name:"Credit Card Validator", category:"numbers", type:"normal", description:"Validate cards using Luhn algorithm." },
{ id:15, name:"Tax Calculator", category:"numbers", type:"normal", description:"Compute taxes based on bracket rules." },
{ id:16, name:"Factorial Finder", category:"numbers", type:"normal", description:"Calculate factorial values efficiently." },
{ id:17, name:"Complex Number Algebra", category:"numbers", type:"normal", description:"Perform arithmetic on complex numbers." },
{ id:18, name:"Happy Numbers", category:"numbers", type:"normal", description:"Detect happy numbers using iterative sum-square logic." },
{ id:19, name:"Number Names", category:"numbers", type:"normal", description:"Convert numbers into English words." },
{ id:20, name:"Limit Calculator", category:"numbers", type:"normal", description:"Approximate mathematical limits numerically." },
{ id:21, name:"Fast Exponentiation", category:"numbers", type:"normal", description:"Efficient exponentiation using logarithmic time." },
{ id:22, name:"Math & Finance Toolkit", category:"numbers", type:"mega", description:"Mega project combining calculators, loans and finance tools." },


/* ================= ALGORITHMS ================= */

{ id:23, name:"Sorting Algorithms", category:"algorithms", type:"normal", description:"Implement multiple sorting techniques." },
{ id:24, name:"Closest Pair Problem", category:"algorithms", type:"normal", description:"Find closest points using divide-and-conquer." },
{ id:25, name:"Sieve of Eratosthenes", category:"algorithms", type:"normal", description:"Generate primes efficiently." },
{ id:26, name:"Algorithm Visualizer Lab", category:"algorithms", type:"mega", description:"Interactive visualization of algorithm behavior." },


/* ================= GRAPH THEORY ================= */

{ id:27, name:"Eulerian Path", category:"graph", type:"normal", description:"Determine if graph has Eulerian path." },
{ id:28, name:"Connected Graph Checker", category:"graph", type:"normal", description:"Detect graph connectivity." },
{ id:29, name:"Dijkstra Shortest Path", category:"graph", type:"normal", description:"Compute shortest path in weighted graph." },
{ id:30, name:"Minimum Spanning Tree", category:"graph", type:"normal", description:"Construct MST using Prim/Kruskal." },
{ id:31, name:"Graph Explorer Studio", category:"graph", type:"normal", description:"Interactive graph algorithm playground." },
{ id:32, name:"Graph Coloring Visualizer", category:"graph", type:"mega", description:"Visualize graph coloring algorithms." },


/* ================= DATA STRUCTURES ================= */

{ id:33, name:"Search Engine Core", category:"data", type:"normal", description:"Mini search engine with ranking." },
{ id:34, name:"LRU Cache Simulator", category:"data", type:"normal", description:"Simulate Least Recently Used cache strategy." },
{ id:35, name:"Balanced Binary Tree Visualizer", category:"data", type:"normal", description:"Visualize operations of AVL / Red-Black trees." },
{ id:36, name:"Data Structure Playground", category:"data", type:"mega", description:"Interactive visualization and experimentation with stacks, queues, trees, graphs and hash tables." },


/* ================= TEXT PROCESSING ================= */

{ id:37, name:"Pig Latin Generator", category:"text", type:"normal", description:"Convert English words to Pig Latin." },
{ id:38, name:"Vowel Counter", category:"text", type:"normal", description:"Count vowels within text." },
{ id:39, name:"Palindrome Checker", category:"text", type:"normal", description:"Detect palindrome strings." },
{ id:40, name:"Word Counter", category:"text", type:"normal", description:"Count words and characters." },
{ id:41, name:"Text Editor", category:"text", type:"normal", description:"Simple text editing interface." },
{ id:42, name:"RSS Feed Creator", category:"text", type:"normal", description:"Generate RSS feeds programmatically." },
{ id:43, name:"Guestbook / Journal", category:"text", type:"normal", description:"Allow users to post entries." },
{ id:44, name:"Cipher Tools", category:"text", type:"normal", description:"Encrypt/decrypt using classical ciphers." },
{ id:45, name:"Regex Query Tool", category:"text", type:"normal", description:"Search text using regex patterns." },
{ id:46, name:"NLP Text Utility Suite", category:"text", type:"mega", description:"Platform containing multiple NLP utilities like summarization, frequency analysis, and sentiment tools." },


/* ================= NETWORKING ================= */

{ id:47, name:"Bandwidth Monitor", category:"network", type:"normal", description:"Track network usage." },
{ id:48, name:"Port Scanner", category:"network", type:"normal", description:"Scan open network ports." },
{ id:49, name:"IP → Country Lookup", category:"network", type:"normal", description:"Map IP addresses to countries." },
{ id:50, name:"Whois Lookup", category:"network", type:"normal", description:"Retrieve domain ownership information." },
{ id:51, name:"Site Status Checker", category:"network", type:"normal", description:"Monitor uptime of websites." },
{ id:52, name:"Network Diagnostic Dashboard", category:"network", type:"mega", description:"Combine multiple networking utilities into a unified diagnostic dashboard." },


/* ================= OOP SYSTEMS ================= */

{ id:53, name:"Product Inventory", category:"oop", type:"normal", description:"Manage product stock and updates." },
{ id:54, name:"Reservation System", category:"oop", type:"normal", description:"Booking system for resources." },
{ id:55, name:"Company Manager", category:"oop", type:"normal", description:"Manage employee data." },
{ id:56, name:"Bank Account Manager", category:"oop", type:"normal", description:"Simulate banking operations." },
{ id:57, name:"Patient Scheduler", category:"oop", type:"normal", description:"Hospital appointment manager." },
{ id:58, name:"Recipe Manager", category:"oop", type:"normal", description:"Store and organize recipes." },
{ id:59, name:"Image Gallery", category:"oop", type:"normal", description:"Manage images and albums." },
{ id:60, name:"Shape Geometry Classes", category:"oop", type:"normal", description:"OOP model of geometric shapes." },
{ id:61, name:"Family Tree Builder", category:"oop", type:"normal", description:"Represent genealogy structures." },
{ id:62, name:"Business Management Suite", category:"oop", type:"mega", description:"Large scale object-oriented system managing inventory, employees, finances and analytics." },


/* ================= CONCURRENCY ================= */

{ id:63, name:"Download Progress Tracker", category:"concurrency", type:"normal", description:"Track multi-file downloads." },
{ id:64, name:"Thread Pool Task Runner", category:"concurrency", type:"normal", description:"Execute background jobs using thread pools and task queues." },
{ id:65, name:"Async Media Processing Studio", category:"concurrency", type:"mega", description:"Parallel media processing platform handling downloads, image processing and batch jobs." },


/* ================= WEB ================= */

{ id:66, name:"Page Scraper", category:"web", type:"normal", description:"Extract information from webpages." },
{ id:67, name:"Online Whiteboard", category:"web", type:"normal", description:"Collaborative drawing interface." },
{ id:68, name:"Weather Fetcher", category:"web", type:"normal", description:"Fetch weather data from APIs." },
{ id:69, name:"Auto Login Scheduler", category:"web", type:"normal", description:"Automate login tasks." },
{ id:70, name:"E-Card Generator", category:"web", type:"normal", description:"Create digital greeting cards." },
{ id:71, name:"Mini CMS", category:"web", type:"normal", description:"Content management system." },
{ id:72, name:"Forum System", category:"web", type:"normal", description:"Discussion board platform." },
{ id:73, name:"CAPTCHA Generator", category:"web", type:"normal", description:"Generate CAPTCHA challenges." },
{ id:74, name:"Web Utility Platform", category:"web", type:"mega", description:"Unified platform combining multiple web utilities and tools." },


/* ================= FILE SYSTEM ================= */

{ id:75, name:"Quiz Maker", category:"files", type:"normal", description:"Generate quizzes from datasets." },
{ id:76, name:"CSV / Excel Sorter", category:"files", type:"normal", description:"Sort spreadsheet files." },
{ id:77, name:"Zip File Creator", category:"files", type:"normal", description:"Compress files programmatically." },
{ id:78, name:"PDF Generator", category:"files", type:"normal", description:"Generate PDF documents." },
{ id:79, name:"Code Snippet Manager", category:"files", type:"normal", description:"Organize code snippets." },
{ id:80, name:"File Operations Workbench", category:"files", type:"mega", description:"Toolkit for file manipulation and automation." },


/* ================= DATABASE ================= */

{ id:81, name:"SQL Query Analyzer", category:"database", type:"normal", description:"Analyze SQL queries." },
{ id:82, name:"Remote SQL Tool", category:"database", type:"normal", description:"Execute remote SQL queries." },
{ id:83, name:"Report Generator", category:"database", type:"normal", description:"Generate database reports." },
{ id:84, name:"Event Scheduler", category:"database", type:"normal", description:"Plan and track events." },
{ id:85, name:"Budget Tracker", category:"database", type:"normal", description:"Track financial spending." },
{ id:86, name:"Travel Planner", category:"database", type:"normal", description:"Plan trips with database storage." },
{ id:87, name:"Data Management Console", category:"database", type:"mega", description:"Dashboard for database analytics and management." },


/* ================= MEDIA ================= */

{ id:88, name:"Slide Show Generator", category:"media", type:"normal", description:"Generate slideshow presentations." },
{ id:89, name:"MP3 Player", category:"media", type:"normal", description:"Simple audio playback application." },
{ id:90, name:"Watermarking Tool", category:"media", type:"normal", description:"Add watermarks to images." },
{ id:91, name:"Turtle Graphics", category:"media", type:"normal", description:"Draw graphics with turtle library." },
{ id:92, name:"GIF Creator", category:"media", type:"normal", description:"Create animated GIFs." },
{ id:93, name:"Media Studio", category:"media", type:"mega", description:"Comprehensive media editing and processing suite." },


/* ================= SECURITY ================= */

{ id:94, name:"Password Strength Checker", category:"security", type:"normal", description:"Evaluate password strength." },
{ id:95, name:"JWT Token Inspector", category:"security", type:"normal", description:"Decode and inspect JSON Web Tokens." },
{ id:96, name:"Password Hashing Playground", category:"security", type:"normal", description:"Explore hashing algorithms." },
{ id:97, name:"Security Toolkit Platform", category:"security", type:"mega", description:"Unified platform containing encryption, hashing and password utilities." },


/* ================= CAPSTONE ================= */

{ id:98, name:"DevTool Forge", category:"capstone", type:"capstone", description:"Developer productivity toolbox." },
{ id:99, name:"Data Utility Hub", category:"capstone", type:"capstone", description:"Platform for data processing tools." },
{ id:100, name:"Smart Productivity OS", category:"capstone", type:"mega", description:"Full productivity management system integrating tasks, tools and analytics." }

]