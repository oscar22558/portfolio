import { ReactNode } from 'react'
import style from "./style.module.css"
interface Props{
    children?: ReactNode
}

export function SectionTitle({children}: Props){
    return <div className={`text-5xl font-bold ${style["negative-spacing"]}`}>{children}</div>
}