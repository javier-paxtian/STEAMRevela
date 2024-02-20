
import { catalogue } from '../assets/global'
const Catalogue = () => {

    return <>
        <h1 className='pt-[50px] w-[90%] m-auto text-center font-bold text-2xl text-primary'>Catálogo de Objetos Educativos STEAM</h1>
        <div className='grid grid-cols-8 gap-x-[30px] gap-y-[20px] w-[90%] m-auto my-[55px] justify-center'>
            {
                catalogue && catalogue.map((item, index) => {
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
        {/* <img src={Foto} alt="" /> */}
    </>
}

export default Catalogue