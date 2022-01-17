import CreateActor from "../pages/actors/CreateActor";
import EditActor from "../pages/actors/EditActor";
import IndexActors from "../pages/actors/IndexActors";
import Creategenre from "../pages/genres/Creategenre";
import Editgenre from "../pages/genres/Editgenre";
import IndexGenres from "../pages/genres/IndexGenres";
import CreateMovieTheater from "../pages/movieTeaters/CreateMovieTheater";
import EditMovieTheater from "../pages/movieTeaters/EditMovieTheater";
import IndexMovieTeaters from "../pages/movieTeaters/IndexMovieTheaters";
import Home from "../pages/Home";
import IndexMovies from "../pages/movies/IndexMovies";
import CreateMovies from "../pages/movies/CreateMovies";
import EditMovies from "../pages/movies/EditMovies";
import RedirectToHome from "./RedirectToHome";
import FilterMovies from "../models/movies/FilterMovies";
import MovieDetails from "../pages/movies/MovieDetails";

const routes = [
    { path: "/", component: Home, exact: true },

    { path: "/genres", component: IndexGenres, exact: true },
    { path: "/genres/create", component: Creategenre },
    { path: "/genres/edit/:id(\\d+)", component: Editgenre },

    { path: "/actors", component: IndexActors, exact: true },
    { path: "/actors/create", component: CreateActor },
    { path: "/actors/edit/:id(\\d+)", component: EditActor },

    { path: "/movietheaters", component: IndexMovieTeaters, exact: true },
    { path: "/movietheaters/create", component: CreateMovieTheater },
    { path: "/movietheaters/edit/:id(\\d+)", component: EditMovieTheater },

    { path: "/movies", component: IndexMovies, exact: true },
    { path: "/movies/create", component: CreateMovies },
    { path: "/movies/edit/:id(\\d+)", component: EditMovies },
    { path: "/movies/filter", component: FilterMovies },
    { path: "/movie/:id(\\d+)", component: MovieDetails },


    { path: "*", component: RedirectToHome }
];

export default routes;