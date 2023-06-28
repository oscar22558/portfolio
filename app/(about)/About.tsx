import { Card } from '../(components)/(card)/Card'
import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import ModelList from './CardModelList'
import style from './style.module.css'
import { Text } from '../(components)/(text)/Text'
import AppClassName from '../AppClassName'
import { SectionHeaderDivider } from '../(components)/(section-header-divider)/SectionHeaderDivider'

export function About() {
    const {sectionContainerXPadding, headerContentYPadding} = AppClassName
    return (
        <div id="about" className={`${style.container} ${sectionContainerXPadding}`}>
            <SectionTopSpacer />
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center items-center basis-1/2 grow-0">
                    <SectionTitle>About me</SectionTitle>
                    <div>
                        <Text color={AppClassName.subtitleTextColor}>Who am I</Text>
                    </div>
                    <div className={headerContentYPadding}>
                        <Text className="text-center">I am a full-stack developer with 1.5 years of experience in building web apps and backend services.
                        With my skills, experiences and passion in software development, I am very confident in building high quality software system which suit my client's needs.
                        I'm open to any job opportunities. Please feel free to contact me if you have job opportunities for me.
                        </Text>
                    </div>
                </div>
                <SectionHeaderDivider />
                <div className={`flex flex-col basis-1/2 grow-0 items-center lg:items-start justify-start ${style["wid-container"]}`}>
                    {ModelList.map(({ img, ...model }, index) => (
                        <div key={index} className="mt-16">
                            <Card image={<img src={img} style={{width: 48, height: 48}} alt="" />} {...model} />
                        </div>
                    ))}
                </div>
            </div>
            <SectionTopSpacer />
        </div>
    )
}