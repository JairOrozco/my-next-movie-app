
//import localStorage information
import { seeInfoLocalStorage } from '../../utils/seeInfoLocalStorage'

//import components
import { GetMovies, Movie } from '../../components'


// small component title
const MyListMoviesTitle = () => {
    return (
        <h2 className="categoriesHead"> My List </h2>
    )
}




export const MyListMovies = () => {

    const likedMovies = seeInfoLocalStorage();
    const arrayLikedMovies = Object.values( likedMovies )

    return (
        <>
            <MyListMoviesTitle />

            <section className="container__slider">
                {
                    ( arrayLikedMovies.length === 0 )
                        ?   <p className='noListMovies'>No movies in Your List yet</p>
                        :   <div className="slider">
                                {
                                    <GetMovies 
                                        arrayData={ arrayLikedMovies }
                                    />
                                }
                            </div>
                }
                
            </section>
        </>
    )
}
