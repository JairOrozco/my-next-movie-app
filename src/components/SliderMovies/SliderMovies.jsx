// import components
import { GetMovies } from '../getMovies/GetMovies'


export const SliderMovies = ( { arrayData } ) => {

    return (
        <>
            <section className="container__slider">
                <div className="slider">
                    <GetMovies arrayData={ arrayData }/>
                </div>
            </section>
        </>
    )
}
