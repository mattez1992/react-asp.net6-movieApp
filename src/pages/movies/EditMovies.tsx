import MovieForm from '../../forms/movie/MovieForm'

export default function EditMovies() {
    return (
        <div>
            <h3>Edit Movies</h3>
            <MovieForm model={{ title: "SPider-Man", inTheaters: true, trailer: "url", releaseDate: new Date("2019-01-01T00:00:00") }} onSubmit={values => console.log(values)} />
        </div>
    )
}
