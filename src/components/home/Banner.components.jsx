import banner from '../../assets/img/banner.webp'
const Banner = () => {
    return <>     
        <div className="bg-center bg-no-repeat bg-cover py-[100px] px-[5%]" style={{ backgroundImage: `url(${banner})` }}>
            <div className='flex flex-col gap-y-[20px] bg-primary w-fit px-[60px] py-[40px] drop-shadow-lg rounded-sm max-w-[670px]'>
                <h1 className='text-3xl font-bold text-white'>¿Que es STEAM?</h1>
                <p className='text-white text-base font-light'>
                    Este término hace
                    referencia a Science, Technology, Engineering, Arts y Mathematics, es decir, Ciencia,
                    Tecnología, Ingeniería, Artes y Matemáticas, haciendo énfasis a la educación interdisciplinar
                    entre estos campos del saber.
                </p>
                <a href='#steam' className='bg-secondary w-fit text-primary px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'>Conoce mas</a>
            </div>            
        </div>
    </>
}

export default Banner