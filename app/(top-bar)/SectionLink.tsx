import Link from 'next/link'
import style from './style.module.css'
import { MouseEventHandler } from 'react'

interface Props{
    text?: string
    href?: string
    selected: boolean
}
export function SectionLink({text, href = '', selected}: Props){
    const linkClick: MouseEventHandler<HTMLAnchorElement> = (e)=>{
        e.preventDefault();
        const id = href.replace("#", "");
        document.querySelector(`div[id="${id}"]`)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    const bgColor = selected ? "section-link-selected" : ""
    const border = selected ? "border-b-2" : "border-b-0"
    return <Link className={`${style.link} ${bgColor} ${border}`} href={href} onClick={linkClick}>{text}</Link>
}