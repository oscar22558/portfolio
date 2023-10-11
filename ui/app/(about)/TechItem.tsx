import { CheckedItem } from "./CheckedItem"

interface Props{
    models: string[]
    title: string
}

export function TechItem({title, models}: Props){
    return (
        <div className="relative flex-1 h-[400px] ml-16">
            <div className="absolute inset-x-0 top-[-40px]  flex flex-row justify-center">
                <div className="inline-block">
                    <div className="bg-[#0ea5e9] rounded-full w-[80px] h-[80px] relative">
                        <img 
                            src="/frontend-icon.svg" 
                            style={{width: "44px", height: "44px"}} 
                            className="absolute top-[40px] left-[40px] ml-[-22px] mt-[-22px]"
                            />
                    
                    </div>
                </div>
            </div>
            <div className="bg-white h-full shadow p-16 flex flex-col justify-start items-center">
                <div className="text-xl mb-3"><span>{title}</span></div>
                <div className="">
                    {
                        models.map((model, index) => {
                            return <CheckedItem size="xl">{model}</CheckedItem>
                        })
                    }
                </div>
            </div>
        </div>
    )
}