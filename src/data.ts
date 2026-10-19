export type Link = { label: string; href: string };

export type Project = {
    name: string;
    role?: string;
    dates: string;
    summary: string;
    stack: string[];
    links: Link[];
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
    },
];
