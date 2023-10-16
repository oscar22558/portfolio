import { ExpTimelineModels } from "./ExpTimelineModels";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
    const timelineModels = ExpTimelineModels
    return <div id="experience" className="py-32 px-8 md:py-48 md:px-32 flex flex-col items-center">
        <div className="text-5xl md:text-6xl font-medium"><span>Experience</span></div>
        <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4 mb-8 md:mb-16"></div>
        <div className="w-full md:w-auto mt-[-2rem]">
        {
            timelineModels.map((model, index) => (
                <TimelineItem key={index} model={model}/>
            ))
        }
        </div>
    </div>
}