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
    const contactModel = [
        {img: "/location-filled-icon.svg", title: "Toronto, Canada"},
        {img: "/email-filled-icon.svg", title: "oscarpeb471@gmail.com"},
    ]
    const linksModel = [
        {href: "https://github.com/oscar22558", img: "/github-icon.svg"},
        {href: "https://www.linkedin.com/in/oscar-shum-571733253/", img: "/linkedin-icon.svg"},

    ]
    return <div className="py-4 px-8 bg-sky-500 flex flex-col justify-center items-center">

 
        <div className="py-2 flex flex-row justify-center items-center">
            {
                linksModel.map(({href, img}, index) => (
                    <Link key={index} href={href} onClick={onClick}>
                        <Image src={img} className="w-6 h-6 svg-white mr-4" height={24} width={24} alt=""/>
                    </Link>
                ))
            }
        </div>
        <div className={`flex flex-row justify-center items-center w-full`}>
            {
                contactModel.map(({img, title}, index) => (
                    <div key={index} className="flex flex-row justify-start items-center ml-8">
                        {/* <Icon src={img} size={40}/> */}
                        <Text className="ml-2 text-white">{title}</Text>
                    </div>
                ))
            }
        </div>
        <Text color="text-white">Ⓒ Copyright 2023 - Oscar Shum </Text>
    </div>
}