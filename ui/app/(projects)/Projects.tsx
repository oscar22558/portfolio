import { ProjectModels } from './ProjectModels'
import { ProjectCard } from './(project-card)/ProjectCard'

export function Projects() {

    return (<>
        <div id="projects" className="bg-black pt-32 pb-16 md:py-32">
            <div className="flex flex-col items-center">
                <div className="text-5xl font-medium text-white md:text-6xl "><span>Projects</span></div>
                <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4 mb-8 md:mt-8 md:mb-10"></div>
                <div className="text-gray-500 text-xl mb-14 px-8 text-center md:px-0 md:mb-16">Some <span className="text-[#0EA5E9]">backend</span> and <span className="text-[#0EA5E9]">frontend</span> projects I worked on</div>
            </div>
            <div className="px-8 mt-[-4rem] md:px-32 md:mt-[-6rem] flex flex-row justify-center">
                <div>

            {
                ProjectModels.map((model, index) => {
                    return <div className="mt-16 md:mt-24 w-full flex flex-row justify-start">
                        <ProjectCard key={index} model={model}/>
                    </div>
                })
            }
                </div>
            </div>
        </div>

    </>
    )
}