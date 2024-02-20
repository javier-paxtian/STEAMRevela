import banner from '../../assets/img/banner.webp'
const Banner3 = (props) => {
    const { objRandom = {} } = props
    return <>
        <div className='flex flex-col gap-y-[20px] w-[90%] py-[60px] m-auto items-center'>
            <h2 className='text-3xl font-bold text-primary'>Un poco sobre: {objRandom.titulo}</h2>
            <p className='text-center text-base max-w-[1200px]'>
                {objRandom.descripcion}
            </p>
            <p className='text-center text-base max-w-[1200px]'>
                {objRandom.curiosidad}
            </p>
            <div className='drop-shadow-lg w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-primary rounded-md'>
                <img className='h-full object-cover w-full rounded-md transition-opacity duration-300  hover:opacity-70' src={`./src/assets/catalogo/${objRandom.id}.jpg`} alt="" />
            </div>
            {/* <img className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-contain' src={`./src/assets/catalogo/${result.id}.jpg`} alt="" /> */}
            {/* <button className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'>Conoce nuestro juego</button> */}
            {/* <img className='h-[80px]' src="https://utsver.occ.com.mx/Content/SiteManager/RUE/xmx5utsverx/images/logo.png" alt="" />
            <img className='h-[100px]' src="https://pbs.twimg.com/profile_images/1012758283872960512/8zHXdPuV_400x400.jpg" alt="" /> */}
        </div>
    </>
}

export default Banner3