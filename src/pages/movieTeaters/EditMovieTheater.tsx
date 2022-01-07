import React from 'react'
import MovieTheaterForm from '../../forms/movieTheater/MovieTheaterForm';

export default function EditMovieTheater() {
    return (
        <div>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm
                model={{
                    name: "Nordisk Film Uppsala",
                    latitude: 59.87556831725519,
                    longitude: 17.675199779193516,
                }}

                onSubmit={async value => {
                    // when the form is posted
                    await new Promise(r => setTimeout(r, 2000));
                    console.log(value)
                }}
            />
        </div>
    )
}
