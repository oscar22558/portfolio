"use client"
import { MouseEventHandler } from "react";
import Text from "../(components)/(text)/Text";
import { ExternalLinks } from "../ExternalLinks";

export function FullResumeButton(){
    const onClick: MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault()
        window?.open(ExternalLinks.fullResume, "_blank")?.focus()
    }
    return (
        <span className="rounded-xl text-white bg-sky-500 inline-block py-4 px-4 cursor-pointer transition duration-500 hover:scale-110" onClick={onClick}>
            <Text color="text-white">Check out my full resume</Text>
        </span>
    )
}