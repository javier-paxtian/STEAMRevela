import { useState } from "react"
import { steamInfo } from "../../assets/global"

const Steam = () => {
    const [info, setInfo] = useState(steamInfo[0])
    console.log(info);
    return <>
        <div id="steam" className="flex flex-col items-center px-[5%] py-[70px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${info.url})` }}>
            <div className="flex justify-around w-full">
                {steamInfo && steamInfo.map((item, index) => {
                    return (
                        <>
                            <div key={index} className={`
                            text-center text-lg font-bold bg-primary text-white cursor-pointer
                            px-[30px] py-[20px] rounded-xl bg-center bg-no-repeat bg-cover ${info.title === item.title && 'bg-primary'}
                            `}
                                onClick={() => setInfo(steamInfo[index])}
                                style={{ backgroundImage: info.title != item.title && `url(${item.url})` }}>
                                <h3>{item.title}</h3>
                                <h3>{item.titleEs}</h3>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="bg-white mt-[60px] py-[55px] px-[3%] text-primary rounded-sm">
                {info.content}

            </div>
            <a href='/game' className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'>Conoce nuestro juego</a>
        </div>
    </>
}

export default Steam