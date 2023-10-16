import Button from '../(components)/(button)/Button'
import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import style from './style.module.css'

export function Home(){
    return <div id="home" className="h-screen w-full">
    <div className="hidden lg:flex flex flex-col justify-start items-start h-screen w-full relative px-44">
        <SectionTopSpacer />
        <img src="/home-bg.jpg" className="absolute inset-0 w-screen h-screen object-cover z-0"/>
        <div className={`${style["bg-layer"]} absolute inset-0 z-0`}></div>
        <div className='flex flex-col justify-center items-start grow z-10'>
            <div className={"flex flex-col justify-center items-start"}>
                <div className={`flex justify-center tracking-tight transition duration-300 text-white text-8xl font-light z-10`}>
                    <span >Oscar Shum</span>
                </div>
                <div className={`flex justify-center py-8 text-gray-400 text-[#B6B6B6] text-8xl font-light ${style["initial-ease"]} z-10`}>
                    <span>Full stack developer</span>
                </div>
            </div>
            <div className='mt-28 z-10'>
                <Button mode="contained" className="w-[250px]">Resume</Button>
                <Button mode="outlined" className="ml-4 w-[250px]">About me ↓</Button>
            </div>
        </div>
    </div>
    <div className="flex lg:hidden flex flex-col justify-center items-center h-screen w-full relative">
        <SectionTopSpacer />
        <img src="/home-bg.jpg" className="absolute inset-0 w-screen h-screen object-cover"/>
        <div className={`${style["bg-layer"]} absolute inset-0 z-0`}></div>
        <div className='z-[10] flex flex-col justify-center items-center grow'>
            <div className={`flex justify-center tracking-tight transition duration-300 text-white text-5xl sm:text-7xl font-normal`}>
                <span >Oscar Shum</span>
            </div>
            <div className={`flex justify-center py-4 text-gray-400 text-[#B6B6B6] text-4xl sm:text-6xl font-normal ${style["initial-ease"]}`}>
                <span>Full stack developer</span>
            </div>
            <div className='mt-14 flex flex-col'>
                <Button mode="contained" className="w-[200px]">Resume</Button>
                <Button mode="outlined" className="mt-4 w-[200px]">About me ↓</Button>
            </div>
        </div>
    </div>
    </div>
}