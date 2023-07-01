import { ReactNode, useState } from "react"

interface Props<T>{
    models: T[]
    render: (model: T, index: number)=>ReactNode | undefined
}
export function Paginator<T>({models, render}: Props<T>){
    const len = models.length
    const [index, setIndex] = useState(0)

    const nextIndex = () => (index + 1)%len
    const previousIndex = () => (index <= 0 ? len - 1 : (index - 1)%len)
    const onNext = () => setIndex(nextIndex())
    const onPrevious = () => setIndex(previousIndex())
    return (
        <div>
            {render(models[index], index)}
            <img src="/caret-right.svg" onClick={onNext} style={{width: 25, height: 25}} className="cursor-pointer"/>
            <img src="/caret-left.svg" onClick={onPrevious}style={{width: 25, height: 25}} className="cursor-pointer"/>
        </div>
    )
}