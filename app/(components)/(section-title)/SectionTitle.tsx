import { ReactNode } from 'react'

interface Props{
    children?: ReactNode
}

export function SectionTitle({children}: Props){
    return <div className={`text-4xl font-bold`}>{children}</div>
}