// import react router
import { useNavigate } from "react-router-dom"

export const Logo = () => {

    const navigate = useNavigate()
    
    const home = () => {
        navigate('/')
    }

    return (

        <section className="header">
            <figure className="header__containerLogo" onClick={ home }>
                <img src="/assets/logo.png" alt="Logo NextMovie" />
            </figure>
        </section>
    )

}
