"use client"
import Button from "./Button";

interface Props{
    className?: string | null
}

export function AboutMeButton({className}: Props){
    const href = "#about"
    const onClick = ()=>{
        const id = href.replace("#", "");
        document.querySelector(`div[id="${id}"]`)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return <Button mode="outlined" className={className} onClick={onClick}>About me ↓</Button>
}