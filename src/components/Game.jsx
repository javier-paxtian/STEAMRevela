import { useState } from "react"
import Card from "./game/Card.components"
import { card0, card1, card2, card3, card4, catalogue, shuffleArray } from "../assets/global"
import Banner2 from "./home/Banner2.components"
import Banner3 from "./home/Banner3.components"


const Game = () => {
    const [result, setResult] = useState(null)
    const [binaryText, setBinaryText] = useState('')
    const [steps, setSteps] = useState(0)

    const goToBack = () => {
        if ((steps - 1) < 0) return
        setSteps(steps - 1)
        setBinaryText(binaryText.slice(0, -1))
    }
    const goToYes = () => {
        if ((steps + 1) > 5) return
        setSteps(steps + 1)
        setBinaryText(binaryText + '1')
    }
    const goToNot = () => {
        if ((steps + 1) > 5) return
        setSteps(steps + 1)
        setBinaryText(binaryText + '0')
    }
    const goToResult = () => {
        const objTemp = catalogue.find(objeto => objeto.id === parseInt(binaryText.split('').reverse().join(''), 2))
        setResult(objTemp)
    }
    const goToReset = () => {
        setSteps(0)
        setBinaryText('')
        setResult(null)
    }

    return <>
        {steps < 5 && <h1 className='pt-[50px] w-[90%] m-auto text-center font-bold text-2xl text-primary'>¿Tu imagen se encuentra aqui?</h1>}
        {
            steps == 0 && <Card imagenes={shuffleArray(card0)} />
        }
        {
            steps == 1 && <Card imagenes={shuffleArray(card1)} />
        }
        {
            steps == 2 && <Card imagenes={shuffleArray(card2)} />
        }
        {
            steps == 3 && <Card imagenes={shuffleArray(card3)} />
        }
        {
            steps == 4 && <Card imagenes={shuffleArray(card4)} />
        }
        {/* <div className="text-center font-bold text-2xl">
            {binaryText.split('').reverse().join('')}
        </div> */}
        <br />
        {
            result && <>
                <div className="w-[90%] m-auto flex justify-evenly items-center">
                    <div className="flex flex-col gap-y-[20px]">
                        <h2 className='text-3xl font-bold text-primary'>Tu imagen era: {result.titulo}</h2>
                        <p className='text-base max-w-[400px]'>
                            {result.descripcion}
                        </p>
                        <p className='text-base max-w-[400px]'>
                            {result.curiosidad}
                        </p>
                    </div>
                    <div className='drop-shadow-lg lg:h-[300px] bg-primary rounded-md'>
                        <img className='h-full object-cover w-full rounded-md transition-opacity duration-300  hover:opacity-70' src={`./src/assets/catalogo/${result.id}.jpg`} alt="" />
                    </div>
                    {/* <div>
                        <img className='lg:h-[450px] object-cover' src={`./src/assets/catalogo/${result.id}.jpg`} alt="" />
                    </div> */}
                </div>
                {/* {result.titulo}
                <img className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-contain' src={`./src/assets/catalogo/${result.id}.jpg`} alt="" /> */}
            </>
        }

        <div className="flex justify-center gap-x-[30px] mb-[30px]">
            {!result && steps > 0 && <button className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'
                onClick={goToBack}>atras</button>}
            {result && <button className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'
                onClick={goToReset}>Reset</button>}
            {steps < 5 && <button className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'
                onClick={goToYes}>si</button>}
            {steps < 5 && <button className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'
                onClick={goToNot}>No</button>}
            {steps === 5 && !result && <button className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'
                onClick={goToResult}>Revelar</button>}
            {/* <button onClick={goToNot}>no</button> */}
        </div>
        <Banner3 objRandom={catalogue[Math.floor(Math.random() * 31)]} />
    </>
}

export default Game