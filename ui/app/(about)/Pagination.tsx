
interface Props {
    page: number
    totlaPage: number
}

export function Pagination({page, totlaPage}: Props){
    
    const elements = []
    for(var i = 0; i < totlaPage; i++){
        elements.push(i)
    }
    return <div className="flex flex-row justify-center items-center ml-[-0.5rem]">
        {
        elements.map(element => {
            return page === element 
                ? <div key={element} className="ml-4 rounded-full border border-[#0EA5E9] border-2 w-3 h-3"></div>
                : <div key={element} className="ml-4 rounded-full border border-[#0EA5E9] border-2 w-3 h-3 bg-[#0EA5E9]"></div> 
        })
        }
    </div>
}