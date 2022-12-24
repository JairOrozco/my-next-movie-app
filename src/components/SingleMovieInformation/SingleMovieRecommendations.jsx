// import components
import { NoListMovies, SliderMovies } from '../../components'

export const SingleMovieRecommendations = ( { results } ) => {
    return (

        <section className="movieDetail__recommendations">

            <h2 className="recommendations__h2Title">
                    Recommendations
            </h2>
        
            {
                ( !results || results.length === 0 )
                    ?   <NoListMovies />
                    :   <SliderMovies 
                            arrayData={ results }
                        />
            }
        
        </section>
        
    )
}
