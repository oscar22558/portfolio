import style from "./style.module.css";
import { TimelineContainer } from "../(components)/(timeline-container)/TimelineContainer";
import { TimelineBlock } from "../(components)/(timeline-block)/TimelineBlock";
import { ExpTimelineModels } from "./ExpTimelineModels";

export function Experience() {
    return <div id="exp" className={`${style.container}`}>
        <div className="text-sky-500 text-center mb-4">Work Experiences</div>
        <TimelineContainer>
            {ExpTimelineModels.map((model, index) => <TimelineBlock key={index} model={model} icon="/work-icon.svg"/>)}
        </TimelineContainer>
    </div>
}