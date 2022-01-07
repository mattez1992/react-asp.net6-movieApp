import MovieForm from '../../forms/movie/MovieForm';
import { genreDTO } from '../../models/genres/genres.model';
import { movieTheaterDTO } from '../../models/movieTheater/movieTheater.model';
export default function CreateMovies() {

    const nonSelectedGenres: genreDTO[] = [{ id: 1, name: "Action" }, { id: 2, name: "Comedy" }];
    const nonSelectedTheaters: movieTheaterDTO[] = [{ id: 1, name: "Nordisk Film" }, { id: 2, name: "SF Bio" }];

    return (
        <div>
            <h3>Create Movies</h3>
            <MovieForm
                model={{ title: "", inTheaters: false, trailer: "" }}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}

                nonSelectedTheaters={nonSelectedTheaters}
                selectedTheaters={[]}

                selectedActors={[]}
            />
        </div>
    )
}
