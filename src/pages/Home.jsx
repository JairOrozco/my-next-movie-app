// import custom hooks
import { useFetch } from "../hooks/useFetch"

// import components
import { Logo, FormSearch, SliderMovies, CategoriesList, MyListMovies, SliderHead, Footer } from "../components"

// import url base y api key
import { url_base, api_key } from '../utils/apiInfo'

export const Home = () => {

    //Conexión a API de trendings
    const urlTrending = `${url_base}/trending/movie/week?${api_key}` 
    const { data, isLoading, hasError } = useFetch( urlTrending )
    const { results }  = !!data && data;


    return (
        <>
            <Logo />
            <FormSearch />
            <SliderHead />
            {
                (isLoading)
                ?   <h4 className='loadingMovies'> Loading... </h4>
                :   <SliderMovies 
                        arrayData={ results }
                    />
            }
            <CategoriesList />
            <MyListMovies />
            <Footer />
        </>
    )
}
