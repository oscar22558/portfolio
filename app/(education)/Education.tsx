import { TimelineBlock } from "../(components)/(timeline-block)/TimelineBlock";
import { TimelineContainer } from "../(components)/(timeline-container)/TimelineContainer";
import { EducationTimelineModels } from "./EducationTimelineModels";

export function Education(){
    return <div id="education">
        <div className="text-sky-500 text-center mb-8">Education</div>
        <TimelineContainer>
            {EducationTimelineModels.map((model, index)=><TimelineBlock key={index} model={model}/>)}
        </TimelineContainer>
    </div>
}