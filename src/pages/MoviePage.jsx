//import react router
import { useParams } from "react-router-dom"

//import hooks
import { useCallback } from "react"

//import customhooks
import { useFetch } from "../hooks/useFetch"

//import components
import { Logo, IndividualMoviePage, SliderMovies, CategoryItem, NoListMovies, SingleMovieRecommendations, SingleMovieInformation } from "../components"

//import data api
import { url_base, api_key } from '../utils/apiInfo'




export const MoviePage = () => {

    //Obteniendo de la URL el id de la pelicula clickeada
    const { id } = useParams()
    const idMovie = id.split('_')[0];

    // Conexión a API para traer pelicula especifica
    const urlSingleMovie = `${url_base}/movie/${idMovie}?${api_key}` 
    const { data, isLoading } = useFetch( urlSingleMovie )
    const { title, poster_path, overview, runtime, vote_average, genres }  = !!data && data;

    // Conexion a API para traer recomendaciones de la pelicula clickeada
    const urlRecommendations = `${url_base}/movie/${idMovie}/recommendations?${api_key}` 
    const dataRecommendations  = useFetch( urlRecommendations ).data;
    const { results } = !!dataRecommendations && dataRecommendations;


    return (
        <>
            <Logo />
            {
                (isLoading) 
                ? <h4 className='loadingMovies'> Loading... </h4>
                : <>
                    <section className="movieDetail">

                        <IndividualMoviePage 
                            movieID={ idMovie }
                            poster_path={ poster_path } 
                            title={ title }
                        />

                        <SingleMovieInformation 
                            title={ title }
                            overview={ overview }
                            runtime={ runtime }
                            vote_average={ vote_average }
                            genres={ genres }
                        />

                        <SingleMovieRecommendations 
                            results={ results }
                        />

                    </section>

                </>
            }
        </>
    )
}