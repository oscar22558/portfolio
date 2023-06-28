import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import style from './style.module.css'
import SkillStackModel from "./SkillStackModel"
import { SkillStackIconItem } from './SkillStackIconItem'
import Text from '../(components)/(text)/Text'
import AppClassName from '../AppClassName'
import { SectionHeaderDivider } from '../(components)/(section-header-divider)/SectionHeaderDivider'

export function Skills() {
    const { frontend: frontendModels, tools: toolsModels, backend: backendModels } = SkillStackModel
    const {sectionContainerSecondBg, sectionContainerXPadding, headerContentYPadding} = AppClassName
    return (
        <div id="skills" className={`${sectionContainerSecondBg} ${sectionContainerXPadding}`}>
            <SectionTopSpacer />
            <div className="flex flex-col justify-center">
                <div className="basis-1/2 grow-0 flex-none flex flex-col justify-center items-center">
                    <SectionTitle>Skills</SectionTitle>
                    <div>
                        <Text color={AppClassName.subtitleTextColor}>Tech I use</Text>
                    </div>
                    <div className={headerContentYPadding}>
                        <Text>Here're some programming languages, tools and frameworks I use.</Text>
                    </div>
                </div>
                <SectionHeaderDivider />
                <div className="basis-1/2 grow-0 flex-none flex flex-col items-start">
                    <div>
                        <div className={`${style.title}`}>Front-end</div>
                        <br />
                        <div className="grid gap-x-6 md:gap-x-12 gap-y-4 grid-cols-3 xl:grid-cols-6 2xl:grid-cols-3">
                            {frontendModels.map(({ img, title }, index) => (
                                <SkillStackIconItem key={index} index={index} imgSrc={img} alt={''} width={48} height={48}>
                                    <span className="ml-4 hidden 2xl:inline">{title}</span>
                                </SkillStackIconItem>
                            ))}
                        </div>
                        <br />
                        <br />
                        <div className={`${style.title}`}>Back-end</div>
                        <br />
                        <div className="grid gap-x-6 md:gap-x-12 gap-y-4 grid-cols-3 xl:grid-cols-6 2xl:grid-cols-3">
                            {backendModels.map(({ img, title }, index) => (
                                <SkillStackIconItem key={index} index={index} imgSrc={img} alt={''} width={48} height={48}>
                                    <span className="ml-4 hidden 2xl:inline">{title}</span>
                                </SkillStackIconItem>
                            ))}
                        </div>
                        <br />
                        <br />
                        <div className={`${style.title}`}>Tools</div>
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