// import reactRouter
import { Link } from "react-router-dom"

export const SliderHead = () => {
    return (
        <section className="trending__head">
            <h2>Trending</h2>
            <Link to="/trending">
                See more
            </Link>
        </section>
    )
}
