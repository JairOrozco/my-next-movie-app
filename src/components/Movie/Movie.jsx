// import react router
import { useNavigate } from "react-router-dom"

// import hooks
import { useRef, useState } from "react";

//import components
import { NoMovieImg } from "../../components";

// import locaStorage
import { seeInfoLocalStorage, handleLocalStorageInfo } from "../../utils/seeInfoLocalStorage";

// import localStorage
import { lazyLoading } from "../../utils/lazyLoading";



export const Movie = ( { movieID, poster_path, title } ) => {

    // url base de las imagenes de pelicula
    const URL_IMAGES_W300 = `https://image.tmdb.org/t/p/w300${poster_path}`

    // Funcion al hacer click ir a la página de la pelicula
    const navigate = useNavigate()

    const onClickMovie = () => {
        const customTitle = title.split(' ').join('-').toLowerCase();
        navigate(`/movie/${movieID}_${customTitle}`)
    }

    //Lazy loading
    const targetRef = useRef(null)
    lazyLoading(targetRef)


    // Estado para cambiar clase al boton de la pelicula
    const [ toggle, setToggle ] = useState(false)

    //Funcion que al dar click guarda o quita del local storage a la pelicula y cambia los estilos del boton
    const addMyListMovies = () => {

        setToggle( !toggle )

        handleLocalStorageInfo( movieID, URL_IMAGES_W300, title )
        seeInfoLocalStorage()

    }
    
    return (
        <div className="movieItem" >

            <figure 
                className="movieItem__containerImg" 
                onClick={ onClickMovie }
            >
                {
                    ( URL_IMAGES_W300 === 'https://image.tmdb.org/t/p/w300null' )
                        ? <NoMovieImg title={ title } />
                        : <img 
                            data-img={ URL_IMAGES_W300 } 
                            alt={ title } 
                            ref={ targetRef }
                        />
                }
                
            </figure>

            <div 
                className={ `movieItem__button ${ seeInfoLocalStorage()[movieID] && "movieItem__button__liked" }` }
                onClick={ () => addMyListMovies() }    
            >

            </div>
        </div>
    )
}
