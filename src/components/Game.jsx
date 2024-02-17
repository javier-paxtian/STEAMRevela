import { useState } from "react"
import Card from "./game/Card.components"
import { card0, card1, card2, card3, card4, catalogue, shuffleArray } from "../assets/global"


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
        <div className="text-center font-bold text-2xl">
            {binaryText.split('').reverse().join('')}
        </div>
        <br />
        {
            result && <>
                {result.titulo}
                <img className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-contain' src={`./src/assets/catalogo/${result.id}.png`} alt="" />
            </>
        }

        <div className="flex justify-center gap-x-[30px]">
            {!result && <button onClick={goToBack}>atras</button>}
            {result && <button onClick={goToReset}>Reset</button>}
            {steps < 5 && <button onClick={goToYes}>si</button>}
            {steps < 5 && <button onClick={goToNot}>No</button>}
            {steps === 5 && <button onClick={goToResult}>Resultado</button>}

            {/* <button onClick={goToNot}>no</button> */}
        </div>
    </>
}

export default Game