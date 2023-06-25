import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import style from './style.module.css'
import SkillStackModel from "./SkillStackModel"
import { SkillStackIconItem } from './SkillStackIconItem'
import { SectionContainer } from '../(components)/(section-container)/SectionContainer'

export function Skills() {
    const { lang: langModels, tools: toolsModels } = SkillStackModel
    return (
        <div id="skills" className="bg-gray-50">
            <SectionContainer>
                <div className="w-full">
                    <SectionTopSpacer />
                    <SectionTitle>Skills</SectionTitle>
                    <br />
                    <div>
                        <div className={`${style.title}`}>I can code in</div>
                        <br />
                        <div className="grid gap-x-6 lg:gap-x-12 gap-y-4 grid-cols-3">
                            {langModels.map(({ img, title }, index) => (
                                <SkillStackIconItem key={index} index={index} imgSrc={img} alt={''} width={48} height={48}>
                                    <span className="ml-4 hidden md:inline">{title}</span>
                                </SkillStackIconItem>
                            ))}
                        </div>
                        <br />
                        <br />
                        <div className={`${style.title}`}>I know</div>
                        <br />
                        <div className="grid gap-x-6 lg:gap-x-12 gap-y-4 grid-cols-3">
                            {toolsModels.map(({ img, title }, index) => (
                                <SkillStackIconItem key={index} index={index} imgSrc={img} alt={''} width={48} height={48}>
                                    <span className="ml-4 hidden md:inline">{title}</span>
                                </SkillStackIconItem>
                            ))}
                        </div>
                    </div>
                    <SectionTopSpacer />
                </div>
            </SectionContainer>
        </div>
    )
}