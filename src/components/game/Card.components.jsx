import { catalogue } from "../../assets/global"

const Card = (props) => {
    const { imagenes = [] } = props


    return <>
        <div className='grid grid-cols-8 gap-x-[30px] gap-y-[20px] w-[90%] m-auto my-[55px] justify-center'>
            {
                imagenes && imagenes.length > 0 && imagenes.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <img className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-contain' src={`./src/assets/catalogo/${item.id}.png`} alt="" />
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
}

export default Card