//import hooks
import { useState } from "react"

// import custom hooks
import { useFetch } from "../hooks/useFetch"

//import components
import { GetMovies, PageButtons, Logo } from "../components"

// import url base y api key
import { url_base, api_key } from '../utils/apiInfo'

export const Trending = () => {

    //State que controla la páginación
    const [ page, setPage ] = useState( 1 )

    //Conexión a API de trendings
    const urlTrending = `${url_base}/trending/movie/week?page=${page}&${api_key}` 
    const { data, isLoading } = useFetch( urlTrending )
    const { results }  = !!data && data;

    return (
        <>
            <Logo />
            <section className="trendingComplete">

                <h2>Trending</h2>

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

            <PageButtons page={page} setPage={setPage}/>

        </>
    )
}