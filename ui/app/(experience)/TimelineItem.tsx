import { TimelineItemType } from "./ExpTimelineModels"
import Text from "../(components)/(text)/Text"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons"

interface Props{
    model: TimelineItemType
}

export function TimelineItem({model}: Props){
    const {title, period, descriptions, organization, type} = model
    const icon = type === "work" ? faBriefcase : faGraduationCap
    return (
        <div className="flex flex-col mt-8 shadow-lg p-8 md:flex-row md:mt-8">
            <div className="inline-block mb-[8px] md:mb-0">
                <div className="mt-[10px] bg-[#0ea5e9] rounded-full w-[60px] h-[60px] relative">
                    <FontAwesomeIcon icon={icon} style={{color: "#fff", width: "25px", height: "25px"}}  className="absolute top-[30px] left-[30px] ml-[-13px] mt-[-13px] w-[25px] h-[25px]"/>
                </div>
            </div>
            <div className="inline-block md:ml-8">
                <div className="text-lg font-[#0ea5e9]"><span>{period}</span></div>
                <div className="text-[#0EA5E9] font-semibold text-2xl mb-[8px]"><span>{title}</span></div>
                <Text className="text-lg">{organization}</Text>
                <div className="items-center text-lg pt-[24px] pb-[16px]">
                {
                    descriptions.map((description, index) => (
                        <div><span key={index}>{description}</span></div>
                    ))
                }
                </div>
            </div>
        </div>
    )

}