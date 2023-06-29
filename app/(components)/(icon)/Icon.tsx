import style from "./style.module.css"

interface Props{
    src: string
    color?: string
    colorClass?: string
    size?: number
}

export function Icon({
    src, 
    color = "",
    colorClass = "",
    size
}: Props){
    const iconSize = size != null ? `${size/2}px` : "1.5rem"
    const iconStyle = {height: iconSize, width: iconSize}
    var containerStyle = {}
    if(color){
        containerStyle = {backgroundColor: color}
    }
    if(size != null){
        containerStyle = {
            ...containerStyle,
            height: size,
            width: size
        }
    }
    return (
        <div 
            className={`rounded-full bg-sky-500 text-white flex justify-center items-center 
                ${size != null ? "" : "h-12 w-12"} ${colorClass}`} 
            style={containerStyle}
        >
            <img className={style["svg-color"]} src={src} alt="" style={iconStyle} />
        </div>
    )
}