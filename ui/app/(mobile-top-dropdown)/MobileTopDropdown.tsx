"use client"
import { useContext } from "react";
import { ColSpacer } from "../(top-bar)/ColSpacer";
import { SectionLink } from "../(top-bar)/SectionLink";
import { SelectedSectionContext } from "../(top-bar)/TopBarContainer";
import TopBarLinksModel from "../(top-bar)/TopBarLinksModel";
import style from "./style.module.css"

export function MobileTopDropdown(){
    const selectedSectionId = useContext(SelectedSectionContext)

    return <div className={`flex flex-col justify-evenly bg-white border-t border-gray-100 h-full shadow pl-8 ${style.container}`}>
        {
            TopBarLinksModel.map(({text, href, id: sectionId}, index) => (
                <div key={index}>
                    <SectionLink text={text} href={href} selected={sectionId === selectedSectionId} />
                    <ColSpacer />
                </div>
            ))
        }
    </div>
}