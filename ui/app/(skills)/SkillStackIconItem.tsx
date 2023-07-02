import { SkillStackItem, Props as SkillStackItemProps} from "./SkillStackItem"
import Image from "next/image"

interface Props{
    imgSrc: string
    alt: string
}

interface CombindedProps extends SkillStackItemProps, Props {}

export function SkillStackIconItem({imgSrc, alt, children, ...SkillStackItemProps}: CombindedProps){
    const timeStamp = new Date().getTime()
    const size = 42
    return (
        <SkillStackItem {...SkillStackItemProps}>
            <div className="flex flex-row items-center justify-start h-full">
                <Image src={imgSrc} alt={alt} height={size} width={size} style={{height: 42, width: 42, objectFit: "contain"}}/>
                {children}
            </div>

        </SkillStackItem>
    )
}