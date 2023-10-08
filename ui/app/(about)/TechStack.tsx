import { TechItem } from "./TechItem"
import TechStackModel, { TechStackList } from "./TechStackModel"

export function TechStack(){
    const techStackModel = TechStackList
    return (
        <div className="mt-[-0.5rem] ml-[-0.5rem] flex flex-row justify-start items-center flex-wrap">
            {
                techStackModel.map((key, index) => {
                    return <TechItem key={index}>{key}</TechItem>
                })
            }
        </div>
    )
}