import { SectionTopSpacer } from '../(components)/(section-top-spacer)/SectionTopSpacer'
import style from './style.module.css'

export function Home(){
    return <div id='home' className={`section-container flex flex-col justify-start items-center ${style["container"]}`}>
        <SectionTopSpacer />
        <div className={"flex flex-col justify-center items-center grow"}>
            <div className={`flex justify-center text-7xl tracking-tight ${style.title}`}>Oscar Shum</div>
            <div className={`flex justify-center text-2xl py-8 ${style.subtitle} ${style["initial-ease"]}`}>
                I'm a&nbsp;
                <span className={style["colored-text"]}>full stack developer</span>
                <span>.</span>

            </div>

        </div>
    </div>
}