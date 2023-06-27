import { ReactNode } from 'react'
import style from './style.module.css'

interface Props{
    href?: string
    title?: string
    img?: string
    size?: number
    techTags?: ReactNode | ReactNode[]
}
export function ProjectCard({href, title, img, size = 500, techTags}: Props){
    const containerStyle = {width: size, height: size}
    const imgStyle= {width: size, height: size}
    return (
        <div className={`m-8 relative bg-white shadow hover:shadow-md hover:scale-110 border border-transperant rounded-md overflow-hidden ${style["card-container"]} cursor-pointer transition duration-500`} style={containerStyle}>
            <div className="h-full w-full flex justify-center items-center">
                <img src={img} className="object-cover" style={imgStyle}/>
            </div>
            <div className={`absolute inset-x-0 ${style["caption-container"]} p-2`}>
                <div className='text-white text-lg font-semibold'>{title}</div>
                {techTags}
            </div>
        </div>
    )
}