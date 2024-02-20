import { catalogue } from "../../assets/global"

const Card = (props) => {
    const { imagenes = [] } = props


    return <>
        <div className='grid grid-cols-8 gap-x-[30px] gap-y-[20px] w-[90%] m-auto my-[55px] justify-center'>
            {
                imagenes && imagenes.length > 0 && imagenes.map((item, index) => {
                    return (
                        <>
                            <div key={index} className='drop-shadow-lg w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-primary rounded-md'>
                                <img className='object-cover w-full h-full rounded-md transition-opacity duration-300  hover:opacity-70' src={`./src/assets/catalogo/${item.id}.jpg`} alt="" />
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
}

export default Card