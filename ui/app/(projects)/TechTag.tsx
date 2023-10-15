export interface Props{
    title: string
}

export function TechTag({title}: Props){
    return (
        <div className="
            inline-block border border-transparent rounded-full bg-[#ffffff1a] text-white 
            px-4 py-1.5 text-center align-text-center
            ">
            <span>{title}</span>
        </div>
    )
}