"use client"
import { ReactNode, createContext, useEffect, useState } from "react"

interface Props {
    children?: ReactNode
}

export const SelectedSectionContext = createContext("")

export function TopBarContainer({children}: Props){
    const [id, setId] = useState("")
    useEffect(() => {
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
            if (ele) {
                observer.observe(ele);
            }
        }
        
        const selectLink = () => {
            const anchorHeight = window.innerHeight*0.48
            const elements = document.querySelectorAll("div.section-container")
            let selectedElement = null
            for(let i = 0; i < elements.length; i++){
                const element = elements[i]
                const {top, bottom} = element.getBoundingClientRect()
                if(top <= anchorHeight && anchorHeight <= bottom){
                    selectedElement = element
                    i = elements.length
                }
            }
            if(!selectedElement) return
            setId(selectedElement.id)
        }
        window.addEventListener("scroll", selectLink)
        selectLink()
        return () =>  { window.removeEventListener("scroll", selectLink) }
   }, [])

    return (
        <SelectedSectionContext.Provider value={id}>
            {children}
        </SelectedSectionContext.Provider>
    )
}