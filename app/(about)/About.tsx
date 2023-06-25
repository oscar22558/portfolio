import Image from 'next/image'
import { Card } from '../(components)/(card)/Card'
import { SectionContainer } from '../(components)/(section-container)/SectionContainer'
import { SectionTitle } from '../(components)/(section-title)/SectionTitle'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import { TestingIcon } from '../(components)/(testing-icon)/TestingIcon'
import ModelList from './CardModelList'
import style from './style.module.css'

export function About() {
    return (
        <div id="about" className={style.container}>
            <SectionContainer>
                <SectionTopSpacer />
                <div className={`${style["titiel-container"]} w-full flex flex-col`}>
                    <SectionTitle>About me</SectionTitle>
                    <div className="text-gray-500 py-8">I am a full-stack developer with 1.5 years of experience in building web apps and backend services.
                        With my skills, experiences and passion in software development, I am very confident in building high quality software system which suit my client's needs.
                        I'm open to any job opportunities. Please feel free to contact me if yo.
                    </div>
                    <div className={`w-full flex justify-between ${style["wid-container"]}`}>
                        {ModelList.map(({img, ...model}, index) => (
                            <div key={index} className={style["wid-card-container"]}>
                                <Card image={<Image src={img} height={72} width={72} alt={''} />} {...model} />
                            </div>
                        ))}
                    </div>
                </div>
                <SectionTopSpacer />
            </SectionContainer>
        </div>
    )
}