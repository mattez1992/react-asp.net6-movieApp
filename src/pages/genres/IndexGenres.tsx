import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexGenres() {
    return (
        <>
            <h3>Genres</h3>
            <Link className='my-2 btn btn-primary' to="/genres/create">Create Genre</Link>

            <Link className='my-2 btn btn-secondary' to="/genres/edit">Edit Genre</Link>

        </>
    )
}
