const projects = [

/* ================= NUMBERS ================= */

{ id:1, name:"Find PI to the Nth Digit", category:"numbers", description:"Compute π to N digits using high-precision arithmetic." },

{ id:2, name:"Find e to the Nth Digit", category:"numbers", description:"Calculate Euler’s number to N digits." },

{ id:3, name:"Fibonacci Sequence", category:"numbers", description:"Generate Fibonacci numbers efficiently." },

{ id:4, name:"Prime Factorization", category:"numbers", description:"Break integers into their prime factors." },

{ id:5, name:"Next Prime Number", category:"numbers", description:"Find the next prime numbers after N." },

{ id:6, name:"Tile Cost Calculator", category:"numbers", description:"Estimate flooring cost based on area and price." },

{ id:7, name:"Mortgage Calculator", category:"numbers", description:"Calculate loan payments and interest schedule." },

{ id:8, name:"Change Return Program", category:"numbers", description:"Determine optimal coin change for transactions." },

{ id:9, name:"Binary ↔ Decimal Converter", category:"numbers", description:"Convert numbers between binary and decimal." },

{ id:10, name:"Scientific Calculator", category:"numbers", description:"Perform advanced mathematical calculations." },

{ id:11, name:"Unit Converter", category:"numbers", description:"Convert units like length, weight, temperature." },

{ id:12, name:"Alarm Clock", category:"numbers", description:"Create a timer-based alarm system." },

{ id:13, name:"Distance Between Cities", category:"numbers", description:"Compute distance between geographic points." },

{ id:14, name:"Credit Card Validator", category:"numbers", description:"Validate cards using Luhn algorithm." },

{ id:15, name:"Tax Calculator", category:"numbers", description:"Compute taxes based on bracket rules." },

{ id:16, name:"Factorial Finder", category:"numbers", description:"Calculate factorial values efficiently." },

{ id:17, name:"Complex Number Algebra", category:"numbers", description:"Perform arithmetic on complex numbers." },

{ id:18, name:"Happy Numbers", category:"numbers", description:"Detect happy numbers using iterative sum-square logic." },

{ id:19, name:"Number Names", category:"numbers", description:"Convert numbers into English words." },

{ id:20, name:"Limit Calculator", category:"numbers", description:"Approximate mathematical limits numerically." },

{ id:21, name:"Fast Exponentiation", category:"numbers", description:"Efficient exponentiation using logarithmic time." },

{ id:22, name:"Math & Finance Toolkit", category:"numbers", description:"Mega project combining calculators, loans and finance tools." },


/* ================= ALGORITHMS ================= */

{ id:23, name:"Sorting Algorithms", category:"algorithms", description:"Implement multiple sorting techniques." },

{ id:24, name:"Closest Pair Problem", category:"algorithms", description:"Find closest points using divide-and-conquer." },

{ id:25, name:"Sieve of Eratosthenes", category:"algorithms", description:"Generate primes efficiently." },

{ id:26, name:"Algorithm Visualizer Lab", category:"algorithms", description:"Interactive visualization of algorithm behavior." },


/* ================= GRAPH THEORY ================= */

{ id:27, name:"Eulerian Path", category:"graph", description:"Determine if graph has Eulerian path." },

{ id:28, name:"Connected Graph Checker", category:"graph", description:"Detect graph connectivity." },

{ id:29, name:"Dijkstra Shortest Path", category:"graph", description:"Compute shortest path in weighted graph." },

{ id:30, name:"Minimum Spanning Tree", category:"graph", description:"Construct MST using Prim/Kruskal." },

{ id:31, name:"Graph Explorer Studio", category:"graph", description:"Interactive graph algorithm playground." },

{ id:32, name:"Graph Coloring Visualizer", category:"graph", description:"Visualize graph coloring algorithms." },


/* ================= DATA STRUCTURES ================= */

{ id:33, name:"Inverted Index", category:"data", description:"Build index for fast document search." },

{ id:34, name:"Search Engine Core", category:"data", description:"Mini search engine with ranking." },

{ id:35, name:"LRU Cache Simulator", category:"data", description:"Simulate Least Recently Used cache strategy." },


/* ================= TEXT PROCESSING ================= */

{ id:36, name:"Reverse String", category:"text", description:"Reverse text efficiently." },

{ id:37, name:"Pig Latin Generator", category:"text", description:"Convert English words to Pig Latin." },

{ id:38, name:"Vowel Counter", category:"text", description:"Count vowels within text." },

{ id:39, name:"Palindrome Checker", category:"text", description:"Detect palindrome strings." },

{ id:40, name:"Word Counter", category:"text", description:"Count words and characters." },

{ id:41, name:"Text Editor", category:"text", description:"Simple text editing interface." },

{ id:42, name:"RSS Feed Creator", category:"text", description:"Generate RSS feeds programmatically." },

{ id:43, name:"Guestbook / Journal", category:"text", description:"Allow users to post entries." },

{ id:44, name:"Cipher Tools", category:"text", description:"Encrypt/decrypt using classical ciphers." },

{ id:45, name:"Regex Query Tool", category:"text", description:"Search text using regex patterns." },

{ id:46, name:"NLP Text Utility Suite", category:"text", description:"Platform for text analysis tools." },


/* ================= NETWORKING ================= */

{ id:47, name:"Bandwidth Monitor", category:"network", description:"Track network usage." },

{ id:48, name:"Port Scanner", category:"network", description:"Scan open network ports." },

{ id:49, name:"Mail Checker", category:"network", description:"Check inbox programmatically." },

{ id:50, name:"IP → Country Lookup", category:"network", description:"Map IP addresses to countries." },

{ id:51, name:"Whois Lookup", category:"network", description:"Retrieve domain ownership information." },

{ id:52, name:"Site Status Checker", category:"network", description:"Monitor uptime of websites." },

{ id:53, name:"Network Diagnostic Dashboard", category:"network", description:"Combine multiple network tools." },


/* ================= OOP SYSTEMS ================= */

{ id:54, name:"Product Inventory", category:"oop", description:"Manage product stock and updates." },

{ id:55, name:"Reservation System", category:"oop", description:"Booking system for resources." },

{ id:56, name:"Company Manager", category:"oop", description:"Manage employee data." },

{ id:57, name:"Bank Account Manager", category:"oop", description:"Simulate banking operations." },

{ id:58, name:"Patient Scheduler", category:"oop", description:"Hospital appointment manager." },

{ id:59, name:"Recipe Manager", category:"oop", description:"Store and organize recipes." },

{ id:60, name:"Image Gallery", category:"oop", description:"Manage images and albums." },

{ id:61, name:"Shape Geometry Classes", category:"oop", description:"OOP model of geometric shapes." },

{ id:62, name:"Family Tree Builder", category:"oop", description:"Represent genealogy structures." },

{ id:63, name:"Business Management Suite", category:"oop", description:"Mega system managing operations." },


/* ================= CONCURRENCY ================= */

{ id:64, name:"Download Progress Tracker", category:"concurrency", description:"Track multi-file downloads." },

{ id:65, name:"Bulk Thumbnail Generator", category:"concurrency", description:"Create thumbnails concurrently." },

{ id:66, name:"Async Media Processing Studio", category:"concurrency", description:"Parallel media processing system." },


/* ================= WEB ================= */

{ id:67, name:"Page Scraper", category:"web", description:"Extract information from webpages." },

{ id:68, name:"Online Whiteboard", category:"web", description:"Collaborative drawing interface." },

{ id:69, name:"Weather Fetcher", category:"web", description:"Fetch weather data from APIs." },

{ id:70, name:"Auto Login Scheduler", category:"web", description:"Automate login tasks." },

{ id:71, name:"E-Card Generator", category:"web", description:"Create digital greeting cards." },

{ id:72, name:"Mini CMS", category:"web", description:"Content management system." },

{ id:73, name:"Forum System", category:"web", description:"Discussion board platform." },

{ id:74, name:"CAPTCHA Generator", category:"web", description:"Generate CAPTCHA challenges." },

{ id:75, name:"Web Utility Platform", category:"web", description:"Unified web utilities platform." },


/* ================= FILE SYSTEM ================= */

{ id:76, name:"Quiz Maker", category:"files", description:"Generate quizzes from datasets." },

{ id:77, name:"CSV / Excel Sorter", category:"files", description:"Sort spreadsheet files." },

{ id:78, name:"Zip File Creator", category:"files", description:"Compress files programmatically." },

{ id:79, name:"PDF Generator", category:"files", description:"Generate PDF documents." },

{ id:80, name:"Code Snippet Manager", category:"files", description:"Organize code snippets." },

{ id:81, name:"File Operations Workbench", category:"files", description:"Toolkit for file manipulation." },


/* ================= DATABASE ================= */

{ id:82, name:"SQL Query Analyzer", category:"database", description:"Analyze SQL queries." },

{ id:83, name:"Remote SQL Tool", category:"database", description:"Execute remote SQL queries." },

{ id:84, name:"Report Generator", category:"database", description:"Generate database reports." },

{ id:85, name:"Event Scheduler", category:"database", description:"Plan and track events." },

{ id:86, name:"Budget Tracker", category:"database", description:"Track financial spending." },

{ id:87, name:"Travel Planner", category:"database", description:"Plan trips with database storage." },

{ id:88, name:"Data Management Console", category:"database", description:"Dashboard for database analytics." },


/* ================= MEDIA ================= */

{ id:89, name:"Slide Show Generator", category:"media", description:"Generate slideshow presentations." },

{ id:90, name:"MP3 Player", category:"media", description:"Simple audio playback application." },

{ id:91, name:"Watermarking Tool", category:"media", description:"Add watermarks to images." },

{ id:92, name:"Turtle Graphics", category:"media", description:"Draw graphics with turtle library." },

{ id:93, name:"GIF Creator", category:"media", description:"Create animated GIFs." },

{ id:94, name:"Media Studio", category:"media", description:"Media editing and manipulation suite." },


/* ================= SECURITY ================= */

{ id:95, name:"Encryption Utilities", category:"security", description:"Tools for encrypting data." },

{ id:96, name:"Security Toolkit", category:"security", description:"Password strength and encoding tools." },

{ id:97, name:"Password Hashing Playground", category:"security", description:"Explore hashing algorithms." },


/* ================= CAPSTONE ================= */

{ id:98, name:"DevTool Forge", category:"capstone", description:"Developer productivity toolbox." },

{ id:99, name:"Data Utility Hub", category:"capstone", description:"Platform for data processing tools." },

{ id:100, name:"Smart Productivity OS", category:"capstone", description:"Full productivity management system." }

]