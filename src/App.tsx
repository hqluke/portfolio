import { useEffect, useState, type ReactNode } from "react";
import {
    ArrowUpRightIcon,
    DownloadIcon,
    MailIcon,
    MapPinIcon,
    MoonIcon,
    SunIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    contact,
    education,
    experience,
    profile,
    projects,
    skills,
    type Link,
} from "@/data";

const TABS = ["about", "projects", "resume"] as const;
type Tab = (typeof TABS)[number];

const readHash = (): Tab => {
    const hash = location.hash.slice(1);
    return TABS.includes(hash as Tab) ? (hash as Tab) : "about";
};

// lucide dropped brand icons, so these two are inline (paths from simple-icons)
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 4.37v6.29zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

function ExternalLink({ link }: { link: Link }) {
    return (
        <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 text-sm font-medium underline-offset-4 hover:underline"
        >
            {link.label}
            <ArrowUpRightIcon className="size-3.5" />
        </a>
    );
}

const savedTheme = () => {
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
};

// follows the OS setting until clicked, then remembers the choice
function ThemeToggle() {
    const [dark, setDark] = useState(() =>
        document.documentElement.classList.contains("dark"),
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    useEffect(() => {
        const media = matchMedia("(prefers-color-scheme: dark)");
        const onChange = (e: MediaQueryListEvent) => {
            if (!savedTheme()) setDark(e.matches);
        };
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    const toggle = () => {
        setDark(!dark);
        try {
            localStorage.setItem("theme", dark ? "light" : "dark");
        } catch {}
    };

    return (
        <Button
            variant="ghost"
            className="-mr-2"
            size="icon"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {dark ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {title}
            </h2>
            {children}
        </section>
    );
}

function LabeledList({ rows }: { rows: { label: string; items: string[] }[] }) {
    return (
        <dl className="space-y-3 text-sm">
            {rows.map((r) => (
                <div key={r.label} className="sm:flex sm:gap-4">
                    <dt className="font-medium sm:w-40 sm:shrink-0">
                        {r.label}
                    </dt>
                    <dd className="text-muted-foreground">
                        {r.items.join(", ")}
                    </dd>
                </div>
            ))}
        </dl>
    );
}

function ResumeEntry(props: {
    title: string;
    subtitle?: string;
    dates: string;
    link?: Link;
    bullets: string[];
}) {
    return (
        <div className="space-y-2">
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold">{props.title}</h3>
                <span className="shrink-0 text-sm text-muted-foreground">
                    {props.dates}
                </span>
            </div>
            {props.subtitle && (
                <p className="text-sm text-muted-foreground">
                    {props.subtitle}
                </p>
            )}
            {props.link && <ExternalLink link={props.link} />}
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {props.bullets.map((b) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    const [tab, setTab] = useState(readHash);

    useEffect(() => {
        const onHashChange = () => setTab(readHash());
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    return (
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <header className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {profile.name}
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {profile.headline}
                        </p>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPinIcon className="size-3.5" />
                            {profile.location}
                        </p>
                    </div>
                    <ThemeToggle />
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                    <Button variant="outline" size="sm" asChild>
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                            GitHub
                        </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon />
                            LinkedIn
                        </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${contact.email}`}>
                            <MailIcon />
                            Email
                        </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <a
                            href={`${import.meta.env.BASE_URL}Luke-Peterson-Resume.pdf`}
                            download="Luke Peterson Resume.pdf"
                        >
                            <DownloadIcon />
                            Resume
                        </a>
                    </Button>
                </div>
            </header>

            <Tabs
                value={tab}
                onValueChange={(value) => (location.hash = value)}
                className="mt-10"
            >
                <TabsList className="grid w-full grid-cols-3 sm:w-fit">
                    <TabsTrigger value="about" className="sm:px-4">
                        About
                    </TabsTrigger>
                    <TabsTrigger value="projects" className="sm:px-4">
                        Projects
                    </TabsTrigger>
                    <TabsTrigger value="resume" className="sm:px-4">
                        Resume
                    </TabsTrigger>
                </TabsList>

                <TabsContent
                    value="about"
                    className="mt-6 space-y-4 leading-relaxed"
                >
                    {profile.bio.map((p) => (
                        <p key={p}>{p}</p>
                    ))}
                    <p>
                        See what I've built on the{" "}
                        <a
                            href="#projects"
                            className="font-medium underline underline-offset-4"
                        >
                            Projects
                        </a>{" "}
                        tab, or my full experience on the{" "}
                        <a
                            href="#resume"
                            className="font-medium underline underline-offset-4"
                        >
                            Resume
                        </a>{" "}
                        tab. The best way to reach me is{" "}
                        <a
                            href={`mailto:${contact.email}`}
                            className="font-medium underline underline-offset-4"
                        >
                            {contact.email}
                        </a>
                        .
                    </p>
                </TabsContent>

                <TabsContent value="projects" className="mt-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {projects.map((p) => (
                            <Card key={p.name} className="gap-4">
                                <CardHeader>
                                    <CardTitle>{p.name}</CardTitle>
                                    <CardDescription>
                                        {p.role && <p>{p.role}</p>}
                                        <p>{p.dates}</p>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-4">
                                    <p className="text-sm leading-relaxed">
                                        {p.summary}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {p.stack.map((t) => (
                                            <Badge key={t} variant="secondary">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                {p.links.length > 0 && (
                                    <CardFooter className="gap-4">
                                        {p.links.map((l) => (
                                            <ExternalLink
                                                key={l.href}
                                                link={l}
                                            />
                                        ))}
                                    </CardFooter>
                                )}
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="resume" className="mt-6 space-y-10">
                    <Section title="Education">
                        <div className="space-y-1">
                            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
                                <h3 className="font-semibold">
                                    {education.school}
                                </h3>
                                <span className="shrink-0 text-sm text-muted-foreground">
                                    {education.dates}
                                </span>
                            </div>
                            <p className="text-sm">
                                {education.degree}
                                <span className="hidden sm:inline"> · </span>
                                <span className="block sm:inline">
                                    GPA {education.gpa}
                                </span>
                            </p>
                        </div>
                        <LabeledList rows={education.coursework} />
                    </Section>
                    <Separator />
                    <Section title="Skills">
                        <LabeledList rows={skills} />
                    </Section>
                    <Separator />
                    <Section title="Experience">
                        {experience.map((j) => (
                            <ResumeEntry
                                key={j.org}
                                title={`${j.title}, ${j.org}`}
                                dates={j.dates}
                                link={j.link}
                                bullets={j.bullets}
                            />
                        ))}
                    </Section>
                    <Separator />
                    <Section title="Projects">
                        <div className="space-y-6">
                            {projects.map((p) => (
                                <ResumeEntry
                                    key={p.name}
                                    title={p.name}
                                    subtitle={p.role}
                                    dates={p.dates}
                                    bullets={p.bullets}
                                />
                            ))}
                        </div>
                    </Section>
                </TabsContent>
            </Tabs>
        </main>
    );
}

export default App;
