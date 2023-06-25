import { ReactNode } from 'react'
import style from './style.module.css'

interface Props{
    children?: ReactNode
}

export function SectionTitle({children}: Props){
    return <div className={`${style.title} uppercase font-bold`}>{children}</div>
}