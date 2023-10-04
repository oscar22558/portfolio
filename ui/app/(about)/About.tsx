import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import { Text } from '../(components)/(text)/Text'
import { TechStack } from './TechStack'
import { TechStackMobile } from './TechStackMobile'

export function About() {

    return (<>
        <div id="about" className="flex md:hidden flex-col justify-center items-center w-full h-full bg-[#F9F9F9]">
            <SectionTopSpacer />
            <div className="text-5xl font-medium"><span>About</span></div>
            <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4"></div>
            <div className="font-semibold mt-8 mb-2 flex"><span>Who am I</span></div>
            <div className="px-8">
                <Text className="text-center">As a <span className="text-[#0EA5E9] font-semibold">full-stack developer</span> with 1.5 years of hands-on experience, 
                I bring a wealth of expertise to the table. My skills span across a range of technologies, including React, Spring Boot, 
                the Laravel PHP framework, and SQL development. I specialize in crafting high-quality user interfaces and building scalable, 
                high-performance backend services for diverse product offerings. My commitment to delivering top-notch solutions is unwavering.
                </Text>
            </div>
            <TechStackMobile />
            <SectionTopSpacer />
        </div>
        <div id="about" className="hidden md:flex flex-col justify-center items-center w-full bg-[#F9F9F9] ">
            <SectionTopSpacer />
            <div className="text-7xl font-medium"><span>About</span></div>
            <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4 mb-16"></div>
            <div className="w-full grow flex flex-row justify-center">
                <div className="h-full flex flex-col justify-center items-start w-[500px]">
                    <div className="font-semibold text-xl mb-2"><span>Who am I</span></div>
                    <div>
                        <Text className="text-xl">As a <span className="text-[#0EA5E9] font-semibold text-xl">full-stack developer</span> with 1.5 years of hands-on experience, 
                        I bring a wealth of expertise to the table. My skills span across a range of technologies, including React, Spring Boot, 
                        the Laravel PHP framework, and SQL development. I specialize in crafting high-quality user interfaces and building scalable, 
                        high-performance backend services for diverse product offerings. My commitment to delivering top-notch solutions is unwavering.
                        </Text>
                    </div> 
                </div>
                <div className="w-[150px]"></div>
                <div className="w-[500px]">
                    <div className="font-semibold text-xl mb-2"><span>Tech I use</span></div>
                    <TechStack />
                </div>
            </div>
            <SectionTopSpacer />
        </div>
    </>
    )
}