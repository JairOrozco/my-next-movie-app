// import components
import { Movie } from '../../components'

export const GetMovies = ( { arrayData } ) => {

    return ( 
        <>
            {
                arrayData.map( movie => 
                    (
                        <Movie
                            key={ movie.id }
                            movieID={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                        />
                    )
                )
            }
        </>
    )
}