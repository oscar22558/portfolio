import { TechItem } from "./TechItem"
import TechStackModel from "./TechStackModel"

export function TechStack(){
    return (
        <div className="flex flex-row justify-center items-center ml-[-4rem] py-8 w-full">
            {
                Object.keys(TechStackModel).map((key, index) => {
                    return <TechItem key={index} title={key} models={TechStackModel[key as keyof typeof TechStackModel]} />
                })
            }
        </div>
    )
}