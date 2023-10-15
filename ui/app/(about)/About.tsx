import { Text } from '../(components)/(text)/Text'
import { TechStack } from './TechStack'
import { CheckedItem } from './CheckedItem'

export function About() {

    return (<>
        <div id="about" className="flex md:hidden flex-col justify-center items-center w-full h-full bg-[#F9F9F9] py-32">
            <div className="text-5xl font-medium"><span>About Me</span></div>
            <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4 mb-8"></div>
            <div className="px-8 mb-8">
                <Text className="text-center text-xl">As a <span className="text-[#0EA5E9] font-semibold text-lg">full-stack developer</span> with 1.5 years of hands-on experience, 
                I bring a wealth of expertise to the table. My skills span across a range of technologies, including React, Spring Boot, 
                the Laravel PHP framework, and SQL development. I specialize in crafting high-quality user interfaces and building scalable, 
                high-performance backend services for diverse product offerings. My commitment to delivering top-notch solutions is unwavering.
                </Text>
            </div>
            <div className="font-semibold flex text-xl mb-2"><span>What I offer</span></div>
            <div className="flex flex-col items-center mb-4">
                <div>
                    <CheckedItem size="xl">Frontend Development</CheckedItem>
                    <CheckedItem size="xl">Backend Development</CheckedItem>
                    <CheckedItem size="xl">Database Deisng</CheckedItem>
                    <CheckedItem size="xl">Cloud Solutions</CheckedItem>
                </div>
            </div> 
            <TechStack />
        </div>
        <div id="about" className="hidden md:flex flex-col justify-center items-center w-full bg-[#F9F9F9] py-48">
            <div className="text-6xl font-medium"><span>About Me</span></div>
            <div className="bg-[#0EA5E9] h-[4px] w-[66px] mt-4 mb-16"></div>
            <div className="h-full w-full flex flex-col justify-start items-center">
                <div className="mb-8 px-16">
                    <Text className="text-xl max-w-[1000px]">As a <span className="text-[#0EA5E9] font-semibold text-xl">full-stack developer</span> with 1.5 years of hands-on experience, 
                    I bring a wealth of expertise to the table. My skills span across a range of technologies, including React, Spring Boot, 
                    the Laravel PHP framework, and SQL development. I specialize in crafting high-quality user interfaces and building scalable, 
                    high-performance backend services for diverse product offerings. My commitment to delivering top-notch solutions is unwavering.
                    </Text>
                </div> 
                <div className="text-xl font-semibold mb-4"><span>What I offer</span></div>
                <div className="p-4 mb-8 flex flex-row justify-center w-[1000px]">
                        <div className="flex flex-col">
                            <CheckedItem size="xl">Frontend Development</CheckedItem>
                            <CheckedItem size="xl">Backend Development</CheckedItem>
                        </div>
                        <div className="flex flex-col ml-16">
                            <CheckedItem size="xl">Database Design</CheckedItem>
                            <CheckedItem size="xl">Cloud Solutions</CheckedItem>
                        </div>
                    </div>
                <TechStack />
            </div>
        </div>
    </>
    )
}