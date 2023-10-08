import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import Text from "../(components)/(text)/Text"

interface Props{
    children?: ReactNode
    size: "base" | "xl"
}
export function CheckedItem({children, size}: Props){
    const fontSize = size === "base" ? "text-lg" : "text-xl"
    const iconSize = size === "base" ? "20px" : "24px"
    return (
        <div className="flex flex-row flex-1">
            <FontAwesomeIcon icon={faCheck} style={{color: "#0ea5e9", height: iconSize, width: iconSize}} />
            <Text className={`${fontSize} ml-4`}>{children}</Text>
        </div>
    )
}