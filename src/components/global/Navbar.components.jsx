import { useNavigate } from 'react-router-dom'
import '../../assets/css/global.css'
import { pages } from '../../assets/global'
import logo from '../../assets/img/logo.svg'

const Navbar = () => {
    const navigate = useNavigate()
    // navigate('/viaje/selecionar-plan', { state: { data: data } });
    return <>
        <nav className='flex flex-col gap-y-[20px] bg-white drop-shadow-lg justify-center items-center py-[30px]'>
            <div className='flex gap-x-[10px] items-center'>
                <img className='h-[60px]' src={logo} alt="" />
                <h2 className='font-bold text-xl text-primary'>STEAM<span className='text-secondary'>Revela</span></h2>
            </div>
            <div className='flex justify-center gap-x-12 text-primary text-base'>
                {
                    pages && pages.map((item, index) => {
                        return (
                            <div key={index}><a className={`cursor-pointer ${window.location.pathname === item.src && 'font-bold'}`} onClick={() => navigate(item.src, {})}>{item.nombre}</a></div>
                        )
                    })
                }
            </div>
        </nav>
    </>
}

export default Navbar