import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { ProjectCard } from './ProjectCard'
import { TechTagContainer } from './TechTagContainer'
import style from './style.module.css'

export function Projects(){
    return (
        <div id="projects" className={`${style.container} bg-gray-100 px-12 flex flex-row justify-center`}>
            <div className="flex flex-col justify-center items-center basis-1/2 grow-0">
                <SectionTitle>Projects</SectionTitle>
                <div className="text-sky-500">Some backend and frontend projects I worked on</div>
            </div>
            <div className="flex flex-row basis-1/2 grow-0 flex-wrap">
                <ProjectCard img="/robocoach-cover.png" title="Robocoach (backend)" href="https://www.hkuit.com/robocoach" 
                    techTags={(
                        <div className="py-2">
                            <TechTagContainer title="PHP"/>
                            <TechTagContainer title="Laravel"/>
                            <TechTagContainer title="PostgreSQL"/>
                            <TechTagContainer title="Docker"/>
                            <TechTagContainer title="AWS"/>
                        </div>
                    )}/>
                <ProjectCard img="/smartrehab-cover-960.png" title="SmartRehab (Mobile app)" href="/works/smart-rehab"
                    techTags={(
                        <div className="py-2">
                            <TechTagContainer title="TypeScript"/>
                            <TechTagContainer title="React Native"/>
                            <TechTagContainer title="Redux"/>
                        </div>
                    )}/>

                <ProjectCard img="/smartrehab-portal-cover-960.png" title="SmartRehab Therapist Portal" href="/works/smart-rehab"
                    techTags={(
                        <div className="py-2">
                            <TechTagContainer title="JavaScript"/>
                            <TechTagContainer title="React"/>
                            <TechTagContainer title="Redux"/>
                            <TechTagContainer title="HTML/CSS"/>
                        </div>
                    )}/>
            </div>
        </div>
    )
}