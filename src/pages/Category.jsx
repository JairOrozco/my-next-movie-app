//import reactRouter
import { useParams } from "react-router-dom"

//hooks
import { useState } from "react"

//import de custom hooks
import { useFetch } from "../hooks/useFetch";

//import components
import { Logo, GetMovies, PageButtons } from "../components"

// import url base y api key
import { url_base, api_key } from '../utils/apiInfo'



export const Category = () => {

    //Obtener id de categoria para mostrar peliculas de esa categoria
    const { id } = useParams()
    const categoryID = id.split('-')[0];
    const categoryName = id.split('-')[1];

    //State que controla la páginación
    const [ page, setPage ] = useState( 1 )

    //Conexión a API de peliculas de cierta categoria principal
    const urlCategory = `${url_base}/discover/movie?with_genres=${categoryID}&page=${page}&${api_key}` 
    const { data, isLoading, hasError } = useFetch( urlCategory )
    const { results }  = !!data && data;

    return (
        <>
        
            <Logo />
            <section className="trendingComplete">

                <h2>{ categoryName} </h2>

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