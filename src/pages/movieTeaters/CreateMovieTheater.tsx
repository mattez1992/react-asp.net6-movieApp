import React from 'react'
import MovieTheaterForm from '../../forms/movieTheater/MovieTheaterForm'

export default function CreateMovieTheater() {
    return (
        <div>
            <h3>Create Movie Theater</h3>
            <MovieTheaterForm
                model={{ name: "" }}
                onSubmit={async value => {
                    // when the form is posted
                    await new Promise(r => setTimeout(r, 2000));
                    console.log(value)
                }}
            />
        </div>
    )
}
