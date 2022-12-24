// import components
import { CategoryItem } from "../../components"

export const SingleMovieInformation = ( { title, overview, runtime, vote_average, genres } ) => {
    return (
        <>
            <section className="movieDetail__information">

                <h2 className="information__H1MovieName">{title}</h2>

                <div className="information__sinopsis">

                    <h3 className="sinopsis__title">Sinopsis</h3>
                    <p className="sinopsis__text">{ overview }</p>
                    <p className="duration">{`Runtime: ${runtime} minutes`}</p>
                    <p className="rating">{`Rating: ${vote_average} / 10.0`}</p>

                </div>

                <div className="movieCategory">

                    <h3 className="movieCategory__title">Categories</h3>
                    <div className="movieCategory__container">
                        {
                            genres.map( category => 
                                (
                                    <CategoryItem 
                                        key={category.id}
                                        name={category.name}
                                        id={category.id}
                                    />    
                                )
                            )
                        }
                    </div>
                    
                </div>
                
            </section>
            

        </>
    )
}
