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
        <div className="flex flex-col mt-8 shadow p-8 md:flex-row md:mt-8 border border-[#f1f1f1]">
            <div className="inline-block mb-[8px] md:mb-0">
                <div className="mt-[0px] bg-[#0ea5e9] rounded-full w-[60px] h-[60px] relative">
                    <FontAwesomeIcon icon={icon} style={{color: "#fff", width: "25px", height: "25px"}}  className="absolute top-[30px] left-[30px] ml-[-13px] mt-[-13px] w-[25px] h-[25px]"/>
                </div>
            </div>
            <div className="inline-block md:ml-8">
                <Text className="font-[#0ea5e9]">{period}</Text>
                <div className="text-[#0EA5E9] font-semibold text-2xl"><span>{title}</span></div>
                {/* <Text className="text-xl">{organization}</Text> */}
                <div className="text-[#000] text-xl"><span>{organization}</span></div>
                <div className="items-center text-gray-500 text-xl pt-[24px] pb-[16px]">
                {
                    descriptions.map((description, index) => (
                        <div key={index}><span>{description}</span></div>
                    ))
                }
                </div>
            </div>
        </div>
    )

}