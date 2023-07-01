"use client"
import style from "./style.module.css"
import { SectionLink } from "./SectionLink";
import { ColSpacer } from "./ColSpacer";
import TopBarLinksModel from "./TopBarLinksModel";
import { useContext } from "react";
import { SelectedSectionContext } from "./TopBarContainer";


export function TopBar() {
    const selectedSectionId = useContext(SelectedSectionContext)


    return <div id="top-bar-container" className={`${style.container} hidden lg:flex justify-end items-center`}>
        {
            TopBarLinksModel.map(({text, href, id}, index) => (
                <div key={index}>
                    <SectionLink text={text} href={href} selected={id === selectedSectionId} />
                    <ColSpacer />
                </div>
            ))
        }
    </div>
}