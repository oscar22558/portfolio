import { TechItem } from "./TechItem"
import TechStackModel from "./TechStackModel"

export function TechStack(){
    const techStackModel = TechStackModel
    return (
        <div className="mt-[-1rem]">
            {
                Object.keys(techStackModel).map((key, index) => {
                    return (<div key={index} className="mt-4">
                        <div className="underline mb-1 text-xl">
                            <span className="">{key}</span>
                        </div>
                        <div className="flex justify-start items-start ml-[-0.5rem] mt-[-0.5rem] flex-wrap">
                            {
                                techStackModel[key as keyof typeof techStackModel].map((item, index) => {
                                    return <TechItem key={index}>{item}</TechItem>
                                })
                            }
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}