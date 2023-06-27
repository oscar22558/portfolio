import { SectionTitle } from "../(components)/(section-title)/SectionTitle";
import { SectionTopSpacer } from "../(components)/(section-top-spacer)/SectionTopSpacer";
import { Education } from "../(education)/Education";
import { Experience } from "../(experience)/Experience";

export function Resume(){
    return (
        <div id="resume" className="px-12">
            <SectionTopSpacer />
            <div className="flex flex-row justify-start items-center">
                <div className="basis-1/2 grow-0 flex flex-col items-center">
                    <div className="pb-8">
                        <Education />
                    </div>
                    <div>
                        <Experience />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center basis-1/2 grow-0">
                    <SectionTitle>Resume</SectionTitle>
                    <div className="text-sky-500">My studys and works</div>  
                </div>
            </div>
            <SectionTopSpacer />
        </div>
    )
}