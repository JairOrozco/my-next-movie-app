//import react router
import { useLocation } from "react-router-dom"

// hooks
import { useState } from "react";

//import de custom hooks
import { useFetch } from "../hooks/useFetch";

//import components
import { Logo, GetMovies, PageButtons } from "../components";

// import url base y api key
import { url_base, api_key } from '../utils/apiInfo'




export const SearchMovie = () => {

    //Regresa la localización de los elementos en la url
    const location = useLocation();

    //Se toma y separa el query parameter 
    const q = location.search.split('=')[1];

    //Se limpia el texto que se ingresa en la busqueda
    const queryHead = q.split('-').join(' ')

    //State que controla la páginación
    const [ page, setPage ] = useState( 1 )

    //Conexión a API de peliculas por busqueda de query
    const urlSearch = `${url_base}/search/movie?query=${q}&page=${page}&${api_key}` 
    const { data, isLoading, hasError } = useFetch( urlSearch )
    const { results }  = !!data && data;

    return (
        <>
            <Logo />

            <section className="trendingComplete">

                <h2>{ `Results for: ${queryHead}` }</h2>

                <section className="trendingComplete__containerMovies">
                    {
                        (isLoading)
                            ?   <h4 className='loadingMovies'> Loading... </h4>
                            :   <GetMovies 
                                    arrayData={ results }
                                />
                    }
                    
                </section>

            </section>

            <PageButtons page={page} setPage={setPage} />
        </>
    )
}