// import react router
import { useNavigate } from "react-router-dom"

import logo from '../../../public/assets/logo.png'

export const Logo = () => {

    const navigate = useNavigate()
    
    const home = () => {
        navigate('/')
    }

    return (

        <section className="header">
            <figure className="header__containerLogo" onClick={ home }>
                <img src={ logo } alt="Logo NextMovie" />
            </figure>
        </section>
    )

}
