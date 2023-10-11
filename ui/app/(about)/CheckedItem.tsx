import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ComponentProps } from "react";
import { IconItem } from "./IconItem";

type Props = Omit<ComponentProps<typeof IconItem>, "icon">

export function CheckedItem({children, size}: Props){
    return <IconItem icon={faCheck} size={size}>{children}</IconItem>
}