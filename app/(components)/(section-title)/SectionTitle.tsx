import { ReactNode } from 'react'

interface Props{
    children?: ReactNode
}

export function SectionTitle({children}: Props){
    return <div className={`text-5xl font-bold tracking-tight`}>{children}</div>
}