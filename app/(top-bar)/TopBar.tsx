"use client"
import { useEffect } from "react"
import style from "./style.module.css"
import { SectionLink } from "./SectionLink";
import { ColSpacer } from "./ColSpacer";

export function TopBar(){
    useEffect(()=>{
      if (
          "IntersectionObserver" in window &&
          "IntersectionObserverEntry" in window &&
          "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
          let observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y < 0) {
              document.querySelector("#top-bar-container")?.classList.remove("top-bar-original");
              document.querySelector("#top-bar-container")?.classList.add("top-bar-animate");
            } else {
              document.querySelector("#top-bar-container")?.classList.remove("top-bar-animate");
              document.querySelector("#top-bar-container")?.classList.add("top-bar-original");
            }
          });
          const ele = document.querySelector("#top-of-site-pixel-anchor")
          if(ele){
            observer.observe(ele);
          }
        }
    },[])
    return <div id="top-bar-container" className={`${style.container} hidden md:flex justify-end items-center`}>
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