import style from './style.module.css'

export function Home(){
    return <div id='home' className={`flex flex-col justify-start items-center ${style["container"]}`}>
        <div className={`${style['top-spacer']}`}></div>
        <div className={"flex flex-col justify-center items-center grow"}>
            <div className={`flex justify-center ${style.title}`}>Oscar Shum</div>
            <div className={`flex justify-center ${style.subtitle} ${style["initial-ease"]}`}>
                I'm a&nbsp;
                <span className={style["colored-text"]}>full stack developer</span>
                <span>.</span>
            </div>
        </div>
    </div>
}