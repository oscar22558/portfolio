import { ComponentProps } from "react"
import { IconItem } from "./IconItem"
import { faCode } from "@fortawesome/free-solid-svg-icons"

type Props = Omit<ComponentProps<typeof IconItem>, "icon">
export function CodeItem({children, size}: Props){
    return (
        <IconItem icon={faCode} size={size} >{children}</IconItem>
    )
}