import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MovieForm from '../../forms/movie/MovieForm';
import { genreDTO } from '../../models/genres/genres.model';
import { movieCreateDTO, movieReadDto } from '../../models/movies/movies.model';
import { movieTheaterDTO } from '../../models/movieTheater/movieTheater.model';
import DisplayErrors from '../../utils/DisplayErrors';
import { urlGenres, urlMovies, urlMovieTheaters } from '../../utils/endpoints';
import { convertMovieToFormData } from '../../utils/formDataConverters';
import Loading from '../../utils/Loading';
export default function CreateMovies() {

    const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
    const [nonSelectedTheaters, setNonSelectedTheaters] = useState<movieTheaterDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<string[]>([])
    const history = useHistory();
    useEffect(() => {
        axios.get(urlGenres).then((resp: AxiosResponse<genreDTO[]>) => {
            setNonSelectedGenres(resp.data);
        })
        axios.get(urlMovieTheaters).then((resp: AxiosResponse<movieTheaterDTO[]>) => {
            setNonSelectedTheaters(resp.data)
            setLoading(false);
        })

    }, [])

    async function create(movie: movieCreateDTO) {
        try {
            const formData = convertMovieToFormData(movie);
            const response = await axios({
                method: "post",
                url: urlMovies,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });
            history.push(`/movie/${response.data}`)
        } catch (error) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <div>
            <h3>Create Movies</h3>
            <DisplayErrors errors={errors} />
            {loading ? <Loading /> :
                <MovieForm
                    model={{ title: "", inTheaters: false, trailer: "" }}
                    onSubmit={async newMovie => await create(newMovie)}
                    nonSelectedGenres={nonSelectedGenres}
                    selectedGenres={[]}

                    nonSelectedTheaters={nonSelectedTheaters}
                    selectedTheaters={[]}

                    selectedActors={[]}
                />
            }

        </div>
    )
}
