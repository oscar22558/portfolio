import { SectionContentContainer } from '../(components)/(section-content-container)/SectionContainer'
import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import AppClassName from '../AppClassName'
import { ProjectCard } from './(project-card)/ProjectCard'
import { TechTagContainer } from './TechTagContainer'
import style from './style.module.css'

export function Projects() {
    const {sectionHeaderContainer} = AppClassName
    const models = [
        {
            img: "/robocoach-cover.jpg",
            title: "Robocoach (backend)",
            href: "https://www.hkuit.com/robocoach",
            techTags: [
                "PHP", "Larevel", "PostgreSQL", "Docker", "AWS"
            ]
        },
        {
            img: "/smartrehab-cover-960.png",
            title: "SmartRehab (Mobile app)",
            href: "https://www.sail.hku.hk/ai-rehab-exercise",
            techTags: ["TypeScrtip", "React Native", "Redux"]
        },
        {
            img: "/smartrehab-portal-cover.png",
            title: "SmartRehab Therapist Portal (web)",
            href: "http://147.8.181.76:4200/",
            techTags: ["JavaScript", "React", "Redux", "HTML/CSS", "TailWind"]
        }
    ]

    return (
        <div id="projects" className="section-container bg-gray-100 flex flex-col justify-start reveal">
            <SectionContentContainer>
                <SectionTopSpacer />
                <div>
                    <div className={`${sectionHeaderContainer} lg:items-start`}>
                        <SectionTitle>Projects</SectionTitle>
                        <div className="text-sky-500">Some backend and frontend projects I worked on</div>
                    </div>
                    <div className={`flex flex-row justify-center lg:justify-start flex-wrap ${style["cards-container"]}`}>
                        {
                            models.map(({ href, img, techTags, title }, index) => (
                                <div key={index} className="pl-12 pt-8">
                                    <ProjectCard img={img} title={title} href={href} techTags={(
                                        techTags.map((title, index) => (
                                            <TechTagContainer key={index} title={title} />
                                        ))
                                    )} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <SectionTopSpacer />
            </SectionContentContainer>

        </div>
    )
}