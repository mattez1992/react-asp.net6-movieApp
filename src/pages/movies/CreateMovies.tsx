import MovieForm from '../../forms/movie/MovieForm';
export default function CreateMovies() {


    return (
        <div>
            <h3>Create Movies</h3>
            <MovieForm model={{ title: "", inTheaters: false, trailer: "" }} onSubmit={values => console.log(values)} />
        </div>
    )
}
