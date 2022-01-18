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
import FilterMovies from "../pages/movies/FilterMovies";
import MovieDetails from "../pages/movies/MovieDetails";
import Register from "../auth/Register";
import Login from "../auth/Login";
import IndexUsers from "../pages/auth/IndexUsers";

const routes = [
    { path: "/", component: Home, exact: true },

    { path: "/genres", component: IndexGenres, exact: true, isAdmin: true },
    { path: "/genres/create", component: Creategenre, isAdmin: true },
    { path: "/genres/edit/:id(\\d+)", component: Editgenre, isAdmin: true },

    { path: "/actors", component: IndexActors, exact: true, isAdmin: true },
    { path: "/actors/create", component: CreateActor, isAdmin: true },
    { path: "/actors/edit/:id(\\d+)", component: EditActor, isAdmin: true },

    { path: "/movietheaters", component: IndexMovieTeaters, exact: true, isAdmin: true },
    { path: "/movietheaters/create", component: CreateMovieTheater, isAdmin: true },
    { path: "/movietheaters/edit/:id(\\d+)", component: EditMovieTheater, isAdmin: true },

    { path: "/movies", component: IndexMovies, exact: true, isAdmin: true },
    { path: "/movies/create", component: CreateMovies, isAdmin: true },
    { path: "/movies/edit/:id(\\d+)", component: EditMovies, isAdmin: true },
    { path: "/movies/filter", component: FilterMovies },
    { path: "/movie/:id(\\d+)", component: MovieDetails },


    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/users", component: IndexUsers },

    { path: "*", component: RedirectToHome }
];

export default routes;