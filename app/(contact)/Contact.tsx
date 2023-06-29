import { Icon } from "../(components)/(icon)/Icon";
import { SectionContentContainer } from "../(components)/(section-content-container)/SectionContainer";
import { SectionTitle } from "../(components)/(section-title)/SectionTitle";
import Text from "../(components)/(text)/Text";
import AppClassName from "../AppClassName";
import style from "./style.module.css"

export function Contact(){
    const {sectionHeaderContainer, subtitleTextColor} = AppClassName
    const contactModel = [
        {img: "/location-filled-icon.svg", title: "Toronto, Canada"},
        {img: "/phone-filled-icon.svg", title: "+1 647 914 6569"},
        {img: "/whatsapp-unfilled-icon.svg", title: "+852 5132 7488"},
        {img: "/email-filled-icon.svg", title: "oscarpeb471@gmail.com"},
    ]
    return <div id="contact" className="py-16 reveal">
        <SectionContentContainer>
            <div className={`${sectionHeaderContainer} lg:items-start`}>
                <SectionTitle>Contact</SectionTitle>
                <div className={subtitleTextColor}>Get in touch</div>
            </div>
            <div className={`${style["methods-container"]} flex flex-row justift-start items-center w-full flex-wrap`}>
                    {
                        contactModel.map(({img, title}, index) => (
                            <div key={index} className="flex flex-row justify-start items-center ml-8 mt-8">
                                <Icon src={img} size={40}/>
                                <Text className="ml-2">{title}</Text>
                            </div>
                        ))
                    }

            </div>
        </SectionContentContainer>
    </div>
}