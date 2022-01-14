import React from 'react'
import MovieTheaterForm from '../../forms/movieTheater/MovieTheaterForm';
import { movieTheaterCreateDTO, movieTheaterDTO } from '../../models/movieTheater/movieTheater.model';
import EditEntity from '../../utils/EditEntity';
import { urlMovieTheaters } from '../../utils/endpoints';

export default function EditMovieTheater() {
    return (
        <EditEntity<movieTheaterCreateDTO, movieTheaterDTO>
            entityName='Movie Theater'
            apiURL={urlMovieTheaters}
            historyURL="/movietheaters">
            {(theaterToEdit, edit) => <MovieTheaterForm model={theaterToEdit} onSubmit={async theaterToEdit => await edit(theaterToEdit)} />}
        </EditEntity>

    )
}
