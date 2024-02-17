import { useNavigate } from 'react-router-dom'
import '../../assets/css/global.css'
import { pages } from '../../assets/global'

const Navbar = () => {
    const navigate = useNavigate()
    // navigate('/viaje/selecionar-plan', { state: { data: data } });
    return <>
        <nav className='bg-primary text-white font-montserrat font-medium text-lg'>
            <div className='flex justify-center gap-x-9 px-[5%] py-[30px]'>
                {
                    pages && pages.map((item, index) => {
                        return (
                            <div key={index}><a className={`cursor-pointer ${window.location.pathname === item.src && 'font-bold'}`} onClick={() => navigate(item.src, {})}>{item.nombre}</a></div>
                        )
                    })
                }
                {/* <div><a className='cursor-pointer' onClick={() => navigate('/', {})}>Inicio</a></div>
                <div><a className='cursor-pointer' onClick={() => navigate('/catalogue', {})}>Catálago</a></div>
                <div><a className='cursor-pointer' onClick={() => navigate('/game', {})}>Juego</a></div> */}
            </div>
        </nav>
    </>
}

export default Navbar