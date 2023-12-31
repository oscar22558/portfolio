"use client"
import { ProjectModelType } from '../ProjectModels'
import { TechTag } from '../TechTag'
import { Link } from '../Link'

interface Props{
    model: ProjectModelType
}
export function ProjectCard({model}: Props){

    const {href, img, techTags, title, description, category, githubLink} = model

    return (
        <div className="flex flex-col items-center md:flex-row md:px-0">
            <div className="flex flex-col justify-center">
                <div className='
                    lg:w-[400px] lg:h-[400px] bg-gray-900 flex flex-col justify-center overflow-hidden
                    w-[300px] h-[300px]
                    '>
                    <img src={img} alt='' className="
                        md:w-[400px] md:h-[400px] object-cover hover:scale-105 duration-500
                        w-[300px] h-[300px] 
                        "/>
                </div>
            </div>
            <div className="
                text-white ml-0 mt-8 w-[300px] flex flex-col justify-center
                md:mt-0 md:ml-12 md:flex-1 md:w-auto
                lg:ml-16
                xl:ml-32
                ">
                <div className="text-gray-500 font-semibold mb-0 md:mb-2"><span>{category}</span></div>
                <div className="text-4xl mb-4 text-[#0EA5E9]"><span>{title}</span></div>
                <div className="mb-4 ml-[-1rem] mt-[-0.5rem] flex flex-row flex-wrap justify-start items-start">
                    {
                        techTags.map((tag, index) => {
                            return <div key={index} className="inline-block ml-4 flex-none mt-2">
                                <TechTag title={tag}/>
                            </div>
                        })
                    }
                </div>
                <div className="text-gray-500 text-xl mb-4"><span>{description}</span></div>
                <div>

                    <Link href={href}>View Project</Link>
                    { githubLink && <span className="ml-4"> <Link href={""}>Github</Link></span>} 
                </div>
            </div>
        </div>
    )
}