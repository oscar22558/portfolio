import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import style from './style.module.css'
import SkillStackModel from "./SkillStackModel"
import { SkillStackIconItem } from './SkillStackIconItem'

export function Skills() {
    const { lang: langModels, tools: toolsModels } = SkillStackModel
    return (
        <div id="skills" className="bg-gray-50 px-12">
            <SectionTopSpacer />
            <div className="flex flex-row justify-center">
                <div className="basis-6/12 grow-0 flex-none flex flex-col justify-center items-center">
                    <SectionTitle>Skills</SectionTitle>
                    <div className="text-sky-500">What I can do</div>
                    <br />
                    <div className="text-gray-500">Here're some programming languages, tools and frameworks I know.</div>
                </div>
                <div className="basis-0 grow flex-none flex flex-col items-start pl-4">
                    <div>
                        <div className={`${style.title}`}>I can code in</div>
                        <br />
                        <div className="grid gap-x-6 md:gap-x-12 gap-y-4 grid-cols-3 xl:grid-cols-6 2xl:grid-cols-3">
                            {langModels.map(({ img, title }, index) => (
                                <SkillStackIconItem key={index} index={index} imgSrc={img} alt={''} width={48} height={48}>
                                    <span className="ml-4 hidden 2xl:inline">{title}</span>
                                </SkillStackIconItem>
                            ))}
                        </div>
                        <br />
                        <br />
                        <div className={`${style.title}`}>I know</div>
                        <br />
                        <div className="grid gap-x-6 md:gap-x-12 gap-y-4 grid-cols-3 xl:grid-cols-6 2xl:grid-cols-3">
                            {toolsModels.map(({ img, title }, index) => (
                                <SkillStackIconItem key={index} index={index} imgSrc={img} alt={''} width={48} height={48}>
                                    <span className="ml-4 hidden 2xl:inline">{title}</span>
                                </SkillStackIconItem>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SectionTopSpacer />
        </div>
    )
}