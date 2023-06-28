"use client"
import { useState } from "react"
import { HamburgerMenu } from "../(components)/(hamburger-menu)/HamburgerMenu"
import style from "./style.module.css"
import { MobileTopDropdown } from "../(mobile-top-dropdown)/MobileTopDropdown"

export function MobileTopBar(){
    const [isDropdownShown, setIsDropdownShon] = useState(false)
    return (
        <>
            {<div className={`transition duration-1000 fixed left-0 right-0 block lg:hidden ${style["dropdown"]} ${isDropdownShown ? style["dropdown-activated"] : ""}`}>
                <MobileTopDropdown />
            </div>}
            <div className={`flex justify-end items-center lg:hidden bg-white fixed top-0 left-0 right-0 px-6 overflow-visible shadow ${style.container}`}>
                <HamburgerMenu onActivated={(activated)=>setIsDropdownShon(activated)}/>
            </div>
        </>
    )
}