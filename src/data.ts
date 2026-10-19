export type Link = { label: string; href: string };

export type Project = {
    name: string;
    role?: string;
    dates: string;
    summary: string;
    stack: string[];
    links: Link[];
    bullets: string[];
};

export type Job = {
    title: string;
    org: string;
    link?: Link;
    dates: string;
    bullets: string[];
};

export const profile = {
    name: "Luke Peterson",
    headline: "Computer Science senior at Weber State University",
    location: "Kaysville, Utah",
    bio: [
        "I'm studying computer science at Weber State and graduate in December 2026. I build full-stack web apps, and two of mine are in production right now, one on AWS and one on Railway. On both I did the database, auth, and deployment myself.",
        "I'm also interning at Africompassion, where I'm building a child sponsorship platform for a nonprofit school in Tanzania, and I'm on a team of four building a diagnostics dashboard for the university's self-driving race cars.",
    ],
};

export const contact = {
    email: "3lukepeterson@gmail.com",
    github: "https://github.com/hqluke",
    linkedin: "https://www.linkedin.com/in/lukepetersonhq",
};

export const education = {
    school: "Weber State University, Ogden, UT",
    degree: "Bachelor of Science, Computer Science",
    dates: "January 2023 - December 2026 (Expected)",
    gpa: "3.56 / 4.00",
};

export const skills: { label: string; items: string[] }[] = [
    {
        label: "Languages",
        items: [
            "C#",
            "Java",
            "Python",
            "TypeScript",
            "JavaScript",
            "SQL",
            "HTML",
            "CSS",
        ],
    },
    {
        label: "Frameworks",
        items: [
            ".NET",
            "ASP.NET Core",
            "Entity Framework Core",
            "WPF",
            "Avalonia",
            "JavaFX",
            "React",
            "Next.js",
            "Vite",
            "Node.js",
            "Express",
            "Django",
            "Tailwind CSS",
        ],
    },
    {
        label: "Cloud, Data & Tools",
        items: [
            "AWS (EC2, RDS)",
            "Azure",
            "Railway",
            "Docker",
            "PostgreSQL",
            "Prisma",
            "SQL Server",
            "Git",
            "GitHub Actions",
            "Linux",
        ],
    },
];

export const experience: Job[] = [
    {
        title: "Software Engineering Intern",
        org: "Africompassion",
        link: {
            label: "africompassion.org",
            href: "https://www.africompassion.org/donate/sponsor-a-child",
        },
        dates: "September 2026 - Present",
        bullets: [
            "Owned the development of a child sponsorship platform for a nonprofit school in Tanzania, turning the CEO and directors' high-level goals into concrete features by advising on what was feasible, proposing solutions, and building them in React and JavaScript so donors can select a child and fund their education.",
            "Designed the student and donor database in SQL and built tested endpoints into the organization's existing C# .NET API, syncing monthly donations from an external payment API so staff can see who sponsors each child, manage student profiles, and grandfather existing monthly donors in as sponsors.",
            "Recovered every student record and photo from the legacy site's undocumented API with a Python scraper, and updated the existing photo upload API to strip location and other metadata from every image to protect the children's privacy.",
        ],
    },
];

export const projects: Project[] = [
    {
        name: "Important!",
        dates: "May 2026 - Present",
        summary:
            "Email filter for Gmail, as a web app and Chrome extension. You pick the senders and keywords that matter, and you only get a desktop notification when one of them shows up. It only reads each email's sender and subject line. Claude can suggest keywords to watch for or ignore, either from a short prompt you type or from a sender's past emails.",
        stack: [
            "TypeScript",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "AWS",
            "Docker",
            "Gmail API",
            "Claude API",
            "Stripe",
        ],
        links: [
            { label: "important-app.com", href: "https://important-app.com" },
        ],
        bullets: [
            "Deployed a full-stack email-filtering web application and Chrome extension using TypeScript, JavaScript, React, Node.js, and Express, published on the Chrome Web Store, letting users mute their inbox and receive alerts only for the senders and keywords that matter to them.",
            "Designed a private, network-isolated PostgreSQL database on AWS RDS with Prisma ORM, reachable only by the containerized backend, and enforced TLS with certificate verification so user credentials are never exposed to the public internet.",
            "Containerized the API with Docker and deployed it to AWS EC2 behind a Caddy reverse proxy with automatic HTTPS, automating build, test, and release through a GitHub Actions CI/CD pipeline so deployments are repeatable and identical to local development.",
            "Integrated third-party services including Google OAuth 2.0 with a metadata-only Gmail scope, Stripe subscription billing with signature-verified webhooks, and the Anthropic Claude API for automated sender categorization.",
        ],
    },
    {
        name: "Robot Diagnostics Dashboard",
        role: "Faculty Directed Research, Team of 4 developers",
        dates: "August 2026 - Present",
        summary:
            "Live diagnostics dashboard for the university's self-driving race cars. Its main job is showing the car's health at a glance, so future students can quickly tell what's wrong. You can also watch its camera and lidar or drive it from your phone.",
        stack: [
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "ROS 2",
            "WebSockets",
            "C++",
        ],
        links: [],
        bullets: [
            "Developed a live diagnostics dashboard for the university's self-driving race cars in HTML, CSS, and JavaScript, gathering requirements from the course professor and keeping it framework-free and documented in architecture decision records so future students can maintain it.",
            "Built a responsive web and mobile interface over WebSockets that shows every system on the car at a glance and lets multiple students watch its camera and lidar or drive it from a phone in a full-screen tiling view.",
            "Engineered a Python ROS 2 service on the car's Linux computer that reports system health and runs a safety watchdog to stop the car if the driving connection drops, and patched a C++ driver bug that left motor temperatures reading zero.",
        ],
    },
    {
        name: "Utah Golf Times",
        dates: "August 2026 - Present",
        summary:
            "Pulls open tee times from courses across Davis County into one list you can filter.",
        stack: [
            "TypeScript",
            "Next.js",
            "React",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Zod",
        ],
        links: [
            { label: "utahgolftimes.com", href: "https://utahgolftimes.com" },
        ],
        bullets: [
            "Built a Next.js and React tee-time aggregator in TypeScript that combines open times from courses across Davis County into one filterable list, so golfers check one page instead of every course's booking site.",
            "Normalized the undocumented JSON APIs behind two booking platforms into one schema with a Node.js polling worker that validates every response with Zod and updates PostgreSQL through Prisma, checking today's times most often and backing off on days further out so the booking sites aren't overloaded.",
        ],
    },
    {
        name: "Reservation System",
        role: "Team Lead, 5 developers",
        dates: "March - April 2026",
        summary:
            "Reservation system for an RV park with separate dashboards for each role to manage bookings and invoices. Built with ASP.NET Core MVC and Bootstrap, and deployed on Azure.",
        stack: [
            "C#",
            "ASP.NET Core MVC",
            "SQL Server",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
            "Azure",
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/hqluke/rv-park-reservation-system",
            },
        ],
        bullets: [
            "Led a team of five peers to build a reservation system using C#, ASP.NET Core MVC, SQL Server, and JavaScript, designing the database schema and role-based dashboards to manage bookings and dynamically recalculate invoices.",
            "Directed weekly Agile sprints using Git and Jira, deployed the application to Microsoft Azure, and folded instructor feedback in as stakeholder requirements to deliver every milestone on schedule.",
        ],
    },
    {
        name: "Utah Mammoth Odds Predictor",
        dates: "April 2026",
        summary:
            "Predicts the winner and score of upcoming NHL games, with charts of the stats behind each pick.",
        stack: ["Python", "Django", "Plotly", "BeautifulSoup"],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/hqluke/Utah-Mammoth-NHL-Game-Predictor",
            },
        ],
        bullets: [
            "Built an NHL win-probability web application with Python and Django, consuming the league's public REST API to project a winner and score for each upcoming game, with server-rendered Plotly charts exposing the statistics behind every forecast.",
            "Designed the weighted scoring model behind each forecast, normalizing raw game statistics into categories for goaltending, special teams, possession, and discipline, then revised it after observing that it leaned too heavily on the binary win-or-loss result so a forecast reflected how a team had actually played rather than whether it happened to win.",
            "Cached each completed prediction in a Django ORM record keyed to the game, and aggregated injury data the official API does not expose by scraping reports with BeautifulSoup, so repeat visits render from the database instead of repeating the full chain of upstream requests.",
        ],
    },
    {
        name: "SoundCloud Archiver",
        dates: "April - May 2026",
        summary:
            "Desktop app that backs up your SoundCloud library and keeps it in sync. Built with Avalonia, a WPF-style UI framework that also runs on Linux and macOS.",
        stack: ["C#", "Avalonia (cross-platform WPF)", "MVVM"],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/hqluke/SoundCloud-Archiver",
            },
        ],
        bullets: [
            "Built a cross-platform desktop application in C# with Avalonia and the Model-View-ViewModel pattern to keep a local music library backed up and in sync with its online source, using async/await so downloads report progress without freezing the interface.",
            "Reconciled the local library against its source on every sync by diffing the track IDs returned upstream against a JSON manifest, surfacing tracks that had disappeared for the user to confirm rather than deleting anything silently.",
            "Represented playlist membership through filesystem symlinks so a track belonging to several playlists is stored on disk only once.",
        ],
    },
    {
        name: "Invoice Management System",
        role: "Team of 3 developers",
        dates: "November - December 2025",
        summary:
            "Desktop invoicing app built by three of us, split into layers so each person owned a feature from the UI down to the database.",
        stack: ["C#", ".NET 8", "WPF", "XAML"],
        links: [
            { label: "GitHub", href: "https://github.com/hqluke/CS3280Group7" },
        ],
        bullets: [
            "Built a desktop invoice application in C# on .NET 8 using WPF and XAML data binding, structuring every feature as a window, business-logic, and data-access layer over a shared OLE DB provider so each developer could work a feature vertically without collisions.",
            "Owned the main invoice-editing window and authored the shared data-access class both other developers ran every query through, coordinating the three feature branches into main as each was completed.",
            "Reproduced and resolved a crash that occurred when line items were added to an unsaved invoice and then removed, tracing it to a price lookup returning an empty string that failed on numeric conversion, then replacing that return contract with an explicit not-found value and guarding the conversion before it ran.",
        ],
    },
    {
        name: "Blackjack Simulator",
        dates: "October 2025 - January 2026",
        summary:
            "Desktop blackjack game with full casino rules and Hi-Lo card counting. Runs on Windows, macOS, and Linux.",
        stack: ["Java 21", "JavaFX", "Maven"],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/hqluke/BlackjackSimulator",
            },
        ],
        bullets: [
            "Built a desktop card-game simulator in Java 21 with JavaFX, implementing full casino rules including hand splitting, doubling down, insurance, side-bet payout evaluation, and Hi-Lo card counting, then packaged it with Maven so friends could install and run it on Windows, macOS, and Linux.",
            "Separated the rules engine from the interface behind two observer interfaces, giving the domain model no dependency on the UI framework so game logic and presentation could each change without touching the other.",
        ],
    },
];
