import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import { Text } from '../(components)/(text)/Text'
import { TechStack } from './TechStack'
import { CheckedItem } from './CheckedItem'

export function About() {

    return (<>
        <div id="about" className="flex md:hidden flex-col justify-center items-center w-full h-full bg-[#F9F9F9]">
            <SectionTopSpacer />
            <div className="text-5xl font-medium"><span>About Me</span></div>
            <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4 mb-8"></div>
            <div className="font-semibold mb-2 flex text-lg"><span>Who am I</span></div>
            <div className="px-8 mb-2">
                <Text className="text-center text-lg">As a <span className="text-[#0EA5E9] font-semibold text-lg">full-stack developer</span> with 1.5 years of hands-on experience, 
                I bring a wealth of expertise to the table. My skills span across a range of technologies, including React, Spring Boot, 
                the Laravel PHP framework, and SQL development. I specialize in crafting high-quality user interfaces and building scalable, 
                high-performance backend services for diverse product offerings. My commitment to delivering top-notch solutions is unwavering.
                </Text>
            </div>
            <div className="w-full px-8">
                <div className="rounded-xl border-[#0EA5E9] border-2 p-4 flex flex-col items-center">
                    <div>
                        <CheckedItem size="base">Frontend Development</CheckedItem>
                        <CheckedItem size="base">Backend Development</CheckedItem>
                        <CheckedItem size="base">Database Deisng</CheckedItem>
                        <CheckedItem size="base">Cloud Solutions</CheckedItem>
                    </div>
                </div> 
            </div>
            <div className="font-semibold mt-8 mb-2"><span>Tech I use</span></div>
            <div className="px-8">
                <TechStack />
            </div>
            <SectionTopSpacer />
        </div>
        <div id="about" className="hidden md:flex flex-col justify-center items-center w-full bg-[#F9F9F9] py-64">
            <div className="text-6xl font-medium"><span>About Me</span></div>
            <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4 mb-16"></div>
            <div className="w-full flex flex-row justify-center px-16">
                <div className="h-full flex flex-col justify-center items-start max-w-[600px]">
                    <div className="font-semibold text-xl mb-4"><span>Who am I</span></div>
                    <div>
                        <Text className="text-xl">As a <span className="text-[#0EA5E9] font-semibold text-xl">full-stack developer</span> with 1.5 years of hands-on experience, 
                        I bring a wealth of expertise to the table. My skills span across a range of technologies, including React, Spring Boot, 
                        the Laravel PHP framework, and SQL development. I specialize in crafting high-quality user interfaces and building scalable, 
                        high-performance backend services for diverse product offerings. My commitment to delivering top-notch solutions is unwavering.
                        </Text>
                    </div> 
                    <div className="rounded-xl border-[#0EA5E9] border-2 p-4 mt-4 flex flex-col w-full">
                        <div className="flex flex-row">
                            <CheckedItem size="xl">Frontend Development</CheckedItem>
                            <CheckedItem size="xl">Backend Development</CheckedItem>
                        </div>
                        <div className="flex flex-row">
                            <CheckedItem size="xl">Database Deisng</CheckedItem>
                            <CheckedItem size="xl">Cloud Solutions</CheckedItem>
                        </div>
                    </div>
                </div>
                <div className="w-[150px] h-full"></div>
                <div className="max-w-[600px]">
                    <div className="font-semibold text-xl mb-4"><span>Tech I use</span></div>
                    <TechStack />
                </div>
            </div>
        </div>
    </>
    )
}