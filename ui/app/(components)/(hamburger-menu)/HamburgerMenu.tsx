"use client"
import { useState } from "react"
import style from "./style.module.css"

interface Props{
    onActivated?: (activated: boolean)=>void
}
export function HamburgerMenu({onActivated}: Props){
    const [activated, setActivated] = useState(false)
    const containerClass = activated ? style.activated : ""
    const toggle = () => {
        setActivated(!activated)
        onActivated?.(!activated)
    }   
    return (
        <div className={`${style.container} ${containerClass} cursor-pointer`} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}