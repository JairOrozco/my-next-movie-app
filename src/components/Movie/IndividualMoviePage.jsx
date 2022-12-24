// import hooks
import { useState } from "react";

//import components
import { NoMoviePageImg } from "../../components"

//import local Storage
import { seeInfoLocalStorage, handleLocalStorageInfo } from "../../utils/seeInfoLocalStorage"


export const IndividualMoviePage = ( { movieID, poster_path, title } ) => {

    // url base de las imagenes de pelicula
    const URL_IMAGES_W500 = `https://image.tmdb.org/t/p/w500${poster_path}`

    // Estado para cambiar clase al boton de la pelicula
    const [ toggle, setToggle ] = useState(false)
    
    //Funcion que al dar click guarda o quita del local storage a la pelicula 
    const addMyListMovies = () => {

        setToggle( !toggle )

        handleLocalStorageInfo( movieID, URL_IMAGES_W500, title )
        seeInfoLocalStorage()

    }

    return (
        <div
            className="moviePageItem"
        >
            <figure className="moviePageItem__containerImg">
                {
                    ( URL_IMAGES_W500 === `${ URL_IMAGES_W500 }null` )
                        ? <NoMoviePageImg title={ title } />
                        : <img src= { URL_IMAGES_W500 } alt={ title } />
                }
                
                <div 
                    className={ `movieItem__button ${ seeInfoLocalStorage()[movieID] && "movieItem__button__liked" }` }
                    onClick={ () => addMyListMovies() }
                >

                </div>
            </figure>
            
        </div>
    )
}
