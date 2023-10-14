"use client"

import { TouchEventHandler, useEffect, useRef, useState } from "react"
import { Pagination } from "./Pagination"
import TechStack from "./TechStackModel"
import { TechItem } from "./TechItem"
import TechStackModel from "./TechStackModel"

export function TechStackMobile(){
    const techStack = TechStack
    const containerRef = useRef(null)
    const [page, setPage] = useState(0)
    const [width, setWidth] = useState(0)

    type TouchState = {xDown: number | null, yDown: number | null }
    const [touch, setTouch] = useState<TouchState>({xDown: null, yDown: null})


    const changePage = (dir: "next" | "prev") => {
        const divEle = containerRef.current as HTMLDivElement | null
        if(!divEle) return
        const change = dir === "next" ? 1 : -1
        const nextPage = (page + change)%3
        setPage(nextPage)
        const shift = -width*(nextPage)
        divEle.style.marginLeft = `${shift}px`
    }
    const nextPage = () => {
        if(page >= 2) return
        changePage('next')
    }
    const previousPage = () => {
        if(page <= 0) return
        changePage("prev")
    }
    const onClick = () => {
        changePage("next")
    }

    const onTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
        const touch = event.touches[0];                                      
        if(!touch) return
        setTouch({xDown: touch.clientX, yDown: touch.clientY}) 
    }
    const onTouchMove: TouchEventHandler<HTMLDivElement> = (evt) => {
        var xUp = evt.touches[0].clientX;                                    
        const {xDown, yDown} = touch
        if(xDown == null || yDown == null) return
    
        var xDiff = xDown - xUp;
        if(xDiff > 0){
            nextPage()
        }
        else{
            previousPage()
        }
        setTouch({xDown: null, yDown: null})
    }

    useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth)
          const divEle = containerRef.current as HTMLDivElement | null
          if(!divEle) return
          const pageDivs = document.querySelectorAll("#page")
          divEle.style.marginLeft = "0px"
          pageDivs.forEach(pageDiv => {
            const ele = pageDiv as HTMLDivElement
            ele.style.width = `${window.innerWidth}px`
          })
        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()
        
        return () => { 
          window.removeEventListener("resize", handleResize)
        }
      }, [setWidth])
    
    return (<>
        <div className="w-full overflow-hidden mb-2">
            <div className="inline-flex flex-row duration-700"  ref={containerRef} onClick={onClick} onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
            {
                Object.keys(techStack).map((key, index) => {
                    return (<div key={index} id="page" className="inline-block px-8 py-[40px]">
                            <TechItem key={index} title={key} models={techStack[key as keyof typeof TechStackModel]} />
                    </div>
                    )
                })
            }
            </div>
        </div>
        <Pagination page={page} totlaPage={3}/>
    </>)
}