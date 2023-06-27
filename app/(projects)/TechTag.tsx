export interface Props{
    title: string
}
export function TechTag({title}: Props){
    return (
        <span className="border border-transparent rounded-2xl bg-sky-500 text-white px-2 py-1 text-center align-text-center text-sm">{title}</span>
    )
}