import { TechItem } from "./TechItem"
import { TechStackMobile } from "./TechStackMobile"
import TechStackModel from "./TechStackModel"

export function TechStack(){
    return (<>
        <div className="hidden lg:block py-8 w-full px-16">
            <div className="flex flex-row justify-center items-center ml-[-4rem]">
            {
                Object.keys(TechStackModel).map((key, index) => {
                    return <div key={index} className="flex-1 ml-16">
                        <TechItem key={index} title={key} models={TechStackModel[key as keyof typeof TechStackModel]} />
                        </div>                
                })
            }
            </div>

        </div>
        <div className="block lg:hidden w-full">
            <TechStackMobile />
        </div>
    </>
    )
}