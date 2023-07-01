import { SectionHeaderDivider } from "../(components)/(section-header-divider)/SectionHeaderDivider";
import { SectionTitle } from "../(components)/(section-title)/SectionTitle";
import { SectionTopSpacer } from "../(components)/(section-top-spacer)/SectionTopSpacer";
import Text from "../(components)/(text)/Text";
import { Education } from "../(education)/Education";
import { Experience } from "../(experience)/Experience";
import AppClassName from "../AppClassName";

export function Resume(){
    const {headerContentYPadding, sectionHeaderContainer, sectionContainerXPadding} = AppClassName
    return (
        <div id="resume" className={`section-container ${sectionContainerXPadding} reveal`}>
            <SectionTopSpacer />
            <div className="flex flex-col-reverse lg:flex-row justify-start items-center">
                <div className="basis-1/2 flex flex-col items-center">
                    <div className="py-8 lg:py-0 lg:pb-8">
                        <Education />
                    </div>
                    <div>
                        <Experience />
                    </div>
                </div>
                <SectionHeaderDivider />
                <div className={sectionHeaderContainer}>
                    <SectionTitle>Resume</SectionTitle>
                    <div className="text-sky-500">My studys and professional experiences</div>  
                    <div className={`${headerContentYPadding}`}>
                        <Text className="text-center">Here're my studys and professional experiences.</Text>
                    </div>
                </div>
            </div>
            <SectionTopSpacer />
        </div>
    )
}