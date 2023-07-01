import {TechTag, Props as TechTagProps} from "./TechTag"

interface Props extends TechTagProps{}

export function TechTagContainer(props: Props){
    return <span className="mr-2 mt-2">
        <TechTag {...props}/>
    </span>

}