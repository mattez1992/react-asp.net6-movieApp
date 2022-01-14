import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import MovieTheaterForm from '../../forms/movieTheater/MovieTheaterForm'
import { movieTheaterCreateDTO } from '../../models/movieTheater/movieTheater.model';
import DisplayErrors from '../../utils/DisplayErrors';
import { urlMovieTheaters } from '../../utils/endpoints';

export default function CreateMovieTheater() {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(movieTheater: movieTheaterCreateDTO) {
        try {
            await axios.post(urlMovieTheaters, movieTheater);
            history.push("/movietheaters")
        } catch (error) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }
    return (
        <div>
            <h3>Create Movie Theater</h3>
            <DisplayErrors errors={errors} />
            <MovieTheaterForm
                model={{ name: "" }}
                onSubmit={async movieTheater => {
                    create(movieTheater);
                }}
            />
        </div>
    )
}
