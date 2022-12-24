import { Routes, Route } from "react-router-dom"
import { Home, SearchMovie, Trending, Category, MoviePage } from "../pages"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="search" element={ <SearchMovie /> } />
            <Route path="trending" element={ <Trending /> } />
            <Route path="category/:id" element={ <Category /> } />
            <Route path="movie/:id" element={ <MoviePage /> } />

            {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}
        </Routes>
    )
}
