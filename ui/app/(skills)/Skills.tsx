import AppClassName from '../AppClassName'
import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import style from './style.module.css'
import SkillStackModel from "./SkillStackModel"
import { SkillStackIconItem } from './SkillStackIconItem'
import { SectionHeaderDivider } from '../(components)/(section-header-divider)/SectionHeaderDivider'
import Text from '../(components)/(text)/Text'

export function Skills() {
    const { sectionContainerSecondBg, sectionContainerXPadding, headerContentYPadding, sectionHeaderContainer} = AppClassName
    return (
        <div id="skills" className={`section-container ${sectionContainerSecondBg} ${sectionContainerXPadding} reveal`}>
            <SectionTopSpacer />
            <div className="flex flex-col lg:flex-row">
                <div className={sectionHeaderContainer}>
                    <SectionTitle>Skills</SectionTitle>
                    <div>
                        <Text color={AppClassName.subtitleTextColor}>Tech I use</Text>
                    </div>
                    <div className={`${headerContentYPadding}`}>
                        <Text className="text-center">Here're some programming languages, tools and frameworks I use.</Text>
                    </div>
                </div>
                <SectionHeaderDivider />
                <div className={`basis-1/2 flex flex-col justify-start items-center ${style["tech-stacks-container"]}`}>
                    <div>
                    {
                        SkillStackModel.map(({ section, techs }, index) => (
                            <div key={index} className="mt-12">
                                <div>
                                    <Text className="text-black text-semibold">{section}</Text>
                                </div>
                                <div className={`flex flex-row justify-start items-center flex-wrap ${style["techs-container"]}`}>
                                    {techs.map(({ img, title, progress }, index) => (
                                        <SkillStackIconItem key={index} index={index} imgSrc={img} alt={title} progress={progress}>
                                            <Text className="ml-2 hidden 2xl:inline">{title}</Text>
                                        </SkillStackIconItem>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <SectionTopSpacer />
        </div>
    )
}