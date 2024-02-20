import { useNavigate } from 'react-router-dom'
import banner from '../../assets/img/banner.webp'
const Banner2 = () => {
    const navigate = useNavigate()
    return <>
        <div className='flex flex-col gap-y-[30px] w-[90%] py-[60px] m-auto items-center'>
            <h2 className='text-3xl font-bold text-primary'>¿Qué es el enfoque STEAM?</h2>
            <p className='text-center text-base max-w-[1200px]'>
                Este enfoque promueve la resolución de problemas del mundo real,
                simulando entornos de trabajo multidisciplinarios y preparando a los estudiantes
                para enfrentar desafíos complejos en la vida real. Asimismo,
                con el presente proyecto se pretende promover y difundir este enfoque,
                se desarrolló una aplicación lúdica en la que, mediante el uso de un algoritmo,
                que involucra el código binario, y después de interactuar con la aplicación,
                se revelará la imagen que el usuario ha seleccionado o pensado así como una
                descripción del objeto seleccionado y una curiosidad sobre el mismo.
            </p>
            <a href='/game' className='bg-primary w-fit text-white px-[20px] py-[10px] mt-[25px] rounded-md text-sm font-extrabold uppercase'>Conoce nuestro juego</a>
            <img className='h-[80px]' src="https://utsver.occ.com.mx/Content/SiteManager/RUE/xmx5utsverx/images/logo.png" alt="" />
            <img className='h-[100px]' src="https://pbs.twimg.com/profile_images/1012758283872960512/8zHXdPuV_400x400.jpg" alt="" />
        </div>
    </>
}

export default Banner2