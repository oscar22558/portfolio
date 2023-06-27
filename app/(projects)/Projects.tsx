import { SectionContainer } from '../(components)/(section-container)/SectionContainer'
import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import { ProjectCard } from './(project-card)/ProjectCard'
import { TechTagContainer } from './TechTagContainer'
import style from './style.module.css'

export function Projects() {
    const models = [
        {
            img: "/robocoach-cover.png",
            title: "Robocoach (backend)",
            href: "https://www.hkuit.com/robocoach",
            techTags: [
                "PHP", "Larevel", "PostgreSQL", "Docker", "AWS"
            ]
        },
        {
            img: "/smartrehab-cover-960.png",
            title: "SmartRehab (Mobile app)",
            href: "/works/smart-rehab",
            techTags: ["TypeScrtip", "React Native", "Redux"]
        },
        {
            img: "/smartrehab-portal-cover-960.png",
            title: "SmartRehab Therapist Portal (web)",
            href: "/works/smart-rehab",
            techTags: ["JavaScript", "React", "Redux", "HTML/CSS", "TailWind"]
        }
    ]

    return (
        <div id="projects" className={`${style.container} bg-gray-100 px-12 flex flex-col justify-start`}>
            <SectionContainer>
                <SectionTopSpacer />
                <div>
                    <div className="flex flex-col justify-center items-start">
                        <SectionTitle>Projects</SectionTitle>
                        <div className="text-sky-500">Some backend and frontend projects I worked on</div>
                    </div>
                    <div className={`flex flex-row justify-start flex-wrap ${style["cards-container"]}`}>
                        {
                            models.map(({ href, img, techTags, title }, index) => (
                                <div className="pl-12 pt-8">
                                    <ProjectCard key={index} img={img} title={title} href={href} techTags={(
                                        <div className="py-2">{
                                            techTags.map((title, index) => (
                                                <TechTagContainer key={index} title={title} />
                                            ))
                                        }</div>
                                    )} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <SectionTopSpacer />
            </SectionContainer>

        </div>
    )
}