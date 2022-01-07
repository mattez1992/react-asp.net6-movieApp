import MovieForm from '../../forms/movie/MovieForm'
import { actorMovieDTO } from '../../models/actor/actor.model';
import { genreDTO } from '../../models/genres/genres.model';
import { movieTheaterDTO } from '../../models/movieTheater/movieTheater.model';

export default function EditMovies() {
    const selectedGenres: genreDTO[] = [{ id: 1, name: "Action" }];
    const nonSelectedGenres: genreDTO[] = [{ id: 2, name: "Comedy" }]

    const selectedTheaters: movieTheaterDTO[] = [{ id: 1, name: "Nordisk Film" }];
    const nonSelectedTheaters: movieTheaterDTO[] = [{ id: 2, name: "SF Bio" }]

    const actors: actorMovieDTO[] = [
        { id: 1, name: "Tom Holland", movieCharacter: "spiderman", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/250px-Tom_Holland_by_Gage_Skidmore.jpg" },]
    return (
        <div>
            <h3>Edit Movies</h3>
            <MovieForm model={{ title: "SPider-Man", inTheaters: true, trailer: "url", releaseDate: new Date("2019-01-01T00:00:00") }}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}

                selectedTheaters={selectedTheaters}
                nonSelectedTheaters={nonSelectedTheaters}

                selectedActors={actors}
            />
        </div>
    )
}
