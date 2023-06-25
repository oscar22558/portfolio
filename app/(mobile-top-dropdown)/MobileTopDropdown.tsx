import { ColSpacer } from "../(top-bar)/ColSpacer";
import { SectionLink } from "../(top-bar)/SectionLink";
import style from "./style.module.css"

export function MobileTopDropdown(){
    return <div className={`flex flex-col justify-evenly bg-white border-t border-gray-500 h-full shadow ${style.container}`}>
        <SectionLink text="Home" href="#home"/>
        <ColSpacer /> 
        <SectionLink text="About" href="#about"/>
        <ColSpacer /> 
        <SectionLink text="Skills" href="#skills"/>
        <ColSpacer /> 
        <SectionLink text="Education" href="#education"/>
        <ColSpacer /> 
        <SectionLink text="Experience" href="#exp"/>
        <ColSpacer /> 
        <SectionLink text="Projects" href="#projects"/>
        <ColSpacer /> 
        <SectionLink text="Contact" href="#contact"/>
        <ColSpacer /> 
    </div>
}