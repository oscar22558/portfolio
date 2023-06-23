import Link from 'next/link'
import style from './style.module.css'
import { MouseEventHandler } from 'react'

interface Props{
    text?: string
    href?: string
}
export function SectionLink({text, href = ''}: Props){
    const linkClick: MouseEventHandler<HTMLAnchorElement> = (e)=>{
        e.preventDefault();
        const id = href.replace("#", "");
        document.querySelector(`div[id="${id}"]`)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return <Link className={style.link} href={href} onClick={linkClick}>{text}</Link>
}