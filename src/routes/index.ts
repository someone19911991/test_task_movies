import MoviesPages from "../pages/MoviesPage/MoviesPages";
import SingleMoviePage from "../pages/SingleMoviePage/SingleMoviePage";

const routes = [
    {path: '/movies', element: MoviesPages},
    {path: '/movies/:id', element: SingleMoviePage},
]

export {routes};