"use client"
import { MouseEventHandler } from "react";
import Button from "./Button";
import { ExternalLinks } from "@/app/ExternalLinks";

interface Props{
    className?: string | null
}
export function ResumeButton({className}: Props){
    const href = ExternalLinks.fullResume
    const onClick: MouseEventHandler<HTMLAnchorElement> = (event)=>{
        event.preventDefault()
        if(href){
            window?.open(href, '_blank')?.focus();
        }
    }
    return <Button mode="contained" className={className} onClick={onClick}>Resume</Button>
}