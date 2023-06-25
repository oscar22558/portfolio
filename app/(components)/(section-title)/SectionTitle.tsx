import { ReactNode } from 'react'

interface Props{
    children?: ReactNode
}

export function SectionTitle({children}: Props){
    return <div className={`text-4xl uppercase font-bold`}>{children}</div>
}