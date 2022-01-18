import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MovieForm from '../../forms/movie/MovieForm';
import { movieCreateDTO, movieEditPageDto } from '../../models/movies/movies.model';
import DisplayErrors from '../../utils/DisplayErrors';
import { urlMovies } from '../../utils/endpoints';
import { convertMovieToFormData } from '../../utils/formDataConverters';
import Loading from '../../utils/Loading';

export default function EditMovies() {
    const { id }: any = useParams();

    const [movie, setMovie] = useState<movieCreateDTO>()
    const [movieEditPage, setMovieEditPage] = useState<movieEditPageDto>()
    const [errors, setErrors] = useState<string[]>([])
    const history = useHistory();


    useEffect(() => {
        axios.get(`${urlMovies}/getput/${id}`)
            .then((response: AxiosResponse<movieEditPageDto>) => {
                const model: movieCreateDTO = {
                    title: response.data.movie.title,
                    inTheaters: response.data.movie.inTheaters,
                    trailer: response.data.movie.trailer,
                    posterURL: response.data.movie.poster,
                    summary: response.data.movie.summary,
                    releaseDate: new Date(response.data.movie.releaseDate),
                    actors: response.data.movie.moviesActors
                }
                console.log("response movie: ")
                console.log(response.data.movie)
                console.log("---")
                console.log("response data: ")
                console.log(response.data)
                console.log("---")
                console.log("model: ")
                console.log(model)
                console.log("---")
                setMovie(model);

                setMovieEditPage(response.data)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function edit(movieToEdit: movieCreateDTO) {
        try {
            const formData = convertMovieToFormData(movieToEdit);
            await axios({
                method: "put",
                url: `${urlMovies}/${id}`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });
            history.push(`/movie/${id}`);
        } catch (error) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <div>
            <h3>Edit Movies</h3>
            <DisplayErrors errors={errors} />
            {movie && movieEditPage ?
                <MovieForm model={movie}
                    onSubmit={editMovie => edit(editMovie)}
                    nonSelectedGenres={movieEditPage.nonSelectedGenres}
                    selectedGenres={movieEditPage.selectedGenres}

                    selectedTheaters={movieEditPage.selectedMovieTheaters}
                    nonSelectedTheaters={movieEditPage.nonSelectedMovieTheaters}

                    selectedActors={movieEditPage.actors}
                /> : <Loading />}
        </div>
    )
}
