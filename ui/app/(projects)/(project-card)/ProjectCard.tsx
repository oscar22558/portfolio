"use client"
import { ReactNode } from 'react'
import style from './style.module.css'
import Image from 'next/image'

interface Props{
    href?: string
    title?: string
    img?: string
    size?: number
    techTags?: ReactNode | ReactNode[]
}
export function ProjectCard({href, title, img = "", size = 400, techTags}: Props){
    const containerStyle = {width: size, height: size}
    const imgStyle= {width: size, height: size}

    const onClick = (href?: string) => () =>{
        if(href){
            window?.open(href, '_blank')?.focus();
        }
    }

    return (
        <div 
            className={`relative bg-white shadow hover:shadow-md hover:scale-110 border border-transperant rounded-md overflow-hidden ${style["card-container"]} cursor-pointer transition duration-500`} 
            style={containerStyle}
            onClick={onClick(href)}
        >
            <div className="h-full w-full flex justify-center items-center">
                <Image alt="" src={img} className="object-cover" style={imgStyle}/>
            </div>
            <div className={`absolute inset-x-0 ${style["caption-container"]} p-4`}>
                <div className='text-white text-base font-semibold'>{title}</div>
                <div className="flex flex-row flex-wrap">
                    {techTags}
                </div>
            </div>
        </div>
    )
}