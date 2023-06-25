import { SkillStackItem, Props as SkillStackItemProps} from "./SkillStackItem"
import Image from "next/image"

interface Props{
    imgSrc: string
    alt: string
    width: number
    height: number
}

interface CombindedProps extends SkillStackItemProps, Props {}

export function SkillStackIconItem({imgSrc, alt, height, width, children, ...SkillStackItemProps}: CombindedProps){
    const timeStamp = new Date().getTime()
    return (
        <SkillStackItem {...SkillStackItemProps}>
            <div className="flex items-center h-full">
                <Image src={imgSrc+`?${timeStamp}`} alt={alt} height={height} width={width}/>
                {children}
            </div>
        </SkillStackItem>
    )
}