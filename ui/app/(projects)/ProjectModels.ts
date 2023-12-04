import { ExternalLinks } from '../ExternalLinks'

const  { robocoachHkuit, smartreahbSail, portfolio} = ExternalLinks
export const ProjectModels = [
    {
        category: "Full stack",
        img: "/robocoach-cover.jpg",
        title: "Robocoach",
        href: robocoachHkuit,
        githubLink: "",
        techTags: [
            "PHP", "JavaScript", "React", "Laravel", "PostgreSQL", "Docker", "AWS"
        ],
        description: "An AI solution enables schools to monitor student’s exercise performance and progress."
    },
    {
        category: "Moblie App",
        img: "/smartrehab-cover-960.png",
        title: "SmartRehab",
        href: smartreahbSail,
        githubLink: "", 
        techTags: ["TypeScript", "React Native", "Redux"],
        description: "A mobile app integrated with AI technology assists stroke patients in carrying out therapy."
    },
    {
        category: "Web Frontend",
        img: "/portfolio-cover.png",
        title: "Portfolio",
        href: portfolio,
        githubLink: "https://github.com/oscar22558/portfolio",
        techTags: ["TypeScript", "Next.js", "TailwindCss"],
        description: "My personal portfolio built with Next.js and TailwindCss."
    }
] 
export type ProjectModelType = typeof ProjectModels[0]