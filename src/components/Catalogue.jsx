
import Foto from '../assets/catalogo/1.png'
import { catalogue } from '../assets/global'
const Catalogue = () => {    

    return <>
        <div className='grid grid-cols-8 gap-x-[30px] gap-y-[20px] w-[90%] m-auto my-[55px] justify-center'>
            {
                catalogue && catalogue.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                {/* http://localhost:5173/assets/catalogo/{item.id}.png */}
                                <img className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-contain' src={`./src/assets/catalogo/${item.id}.png`} alt="" />
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