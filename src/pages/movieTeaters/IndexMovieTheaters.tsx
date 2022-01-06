import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexMovieTeaters() {
    return (
        <>
            <h3>Genres</h3>
            <Link className='my-2 btn btn-primary' to="/movietheaters/create">Create Theater</Link>

            <Link className='my-2 btn btn-secondary' to="/movietheaters/edit">Edit Theater</Link>

        </>
    )
}
