"use client"
import Link from "next/link";
import Text from "../(components)/(text)/Text";
import { MouseEventHandler } from "react";
import Image from "next/image";

export function Footer(){
    const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute("href")
        if(href){
            window?.open(href, '_blank')?.focus();
        }

    }

    const linksModel = [
        {href: "https://github.com/oscar22558", img: "/github-icon.svg"},
        {href: "https://www.linkedin.com/in/shum-oscar-571733253/", img: "/linkedin-icon.svg"},

    ]
    return <div className="py-4 px-8 bg-sky-500 flex flex-col justify-center items-center">
        <div className="py-2 flex flex-row justify-center items-center">
            {
                linksModel.map(({href, img}, index) => (
                    <Link key={index} href={href} onClick={onClick}>
                        <Image src={img} className="w-6 h-6 svg-white mr-4" alt=""/>
                    </Link>
                ))
            }
        </div>
        <Text color="text-white">Ⓒ Copyright 2023 - Oscar Shum </Text>
    </div>
}