// import useFetch
import { useFetch } from "../../hooks/useFetch"

//import api info
import { api_key, url_base } from '../../utils/apiInfo'

// import components
import { CategoryItem } from "./CategoryItem"



export const CategoriesList = () => {

    const urlCategoriesList = `${url_base}/genre/movie/list?${api_key}`
    const {data, isLoading, hasError } = useFetch( urlCategoriesList )
    const { genres } = !!data && data;


    return (
        <>
            <h2 className="categoriesHead"> Categories </h2>
            <section className="categories__container">
                {
                    (isLoading) 
                    ? <h4 className='loadingMovies'> Loading... </h4>
                    : genres.map( category => 
                        (
                            <CategoryItem 
                                key={ category.id }
                                name={category.name}
                                id={category.id}
                            />
                        )
                    ) 
                }
            </section>
        </>
    )
}
