import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import Text from "../(components)/(text)/Text"

interface Props{
    icon: FontAwesomeIconProps["icon"]
    children?: ReactNode
    size: "base" | "xl"
}
export function IconItem({children, size, icon}: Props){
    const fontSize = size === "base" ? "text-lg" : "text-xl"
    const iconSize = size === "base" ? "20px" : "24px"
    return (
        <div className="flex flex-row flex-1">
            <FontAwesomeIcon icon={icon} style={{color: "#0ea5e9", height: iconSize, width: iconSize}} />
            <Text className={`${fontSize} ml-4`}>{children}</Text>
        </div>
    )
}