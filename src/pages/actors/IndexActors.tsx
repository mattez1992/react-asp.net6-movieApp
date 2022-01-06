import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexActors() {
    return (
        <>
            <h3>Actors</h3>
            <Link className='my-2 btn btn-primary' to="/actors/create">Create Actor</Link>

            <Link className='my-2 btn btn-secondary' to="/actors/edit">Edit Actor</Link>

        </>
    )
}
