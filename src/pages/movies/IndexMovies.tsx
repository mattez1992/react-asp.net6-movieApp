import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexMovies() {
    return (
        <>
            <h3>Movies</h3>
            <Link className='my-2 btn btn-primary' to="/movies/create">Create Movie</Link>
            <Link className='my-2 btn btn-secondary' to="/movies/edit">Edit Movie</Link>
        </>
    )
}
