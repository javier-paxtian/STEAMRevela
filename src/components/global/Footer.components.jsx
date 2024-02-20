import { useNavigate } from 'react-router-dom'
import '../../assets/css/global.css'
import { pages } from '../../assets/global'
import logo from '../../assets/img/logo.svg'

const Footer = () => {
    const navigate = useNavigate()
    // navigate('/viaje/selecionar-plan', { state: { data: data } });
    return <>
        <nav className='flex flex-col gap-y-[10px] bg-primary text-white justify-center items-center py-[30px]'>
            <div>
                Universidad Tecnológica del Sureste de Veracruz
            </div>
            <div>
                Jorge Israel Aguilera Rued
            </div>
            <div>
                José Jamin García García
            </div>
            <img className='h-[60px]' src={logo} alt="" />            
        </nav>
    </>
}

export default Footer