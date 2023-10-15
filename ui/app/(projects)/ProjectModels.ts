import { ExternalLinks } from '../ExternalLinks'

const  { robocoachHkuit, smartreahbSail, smartrehabPortalHome} = ExternalLinks
export const ProjectModels = [
    {
        category: "Backend",
        img: "/robocoach-cover.jpg",
        title: "Robocoach",
        href: robocoachHkuit,
        techTags: [
            "PHP", "Laravel", "PostgreSQL", "Docker", "AWS"
        ],
        description: "An AI solution enables schools to monitor student’s exercise performance and progress."
    },
    {
        category: "Moblie App",
        img: "/smartrehab-cover-960.png",
        title: "SmartRehab",
        href: smartreahbSail,
        techTags: ["TypeScript", "React Native Native", "Redux"],
        description: "A mobile app assists stroke patients to carry out therapy."

    }
] 
export type ProjectModelType = typeof ProjectModels[0]