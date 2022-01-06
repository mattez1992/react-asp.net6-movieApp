import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../utils/Button'

export default function CreateMovies() {
    const history = useHistory();
    const redirect = () => {
        // save to db...
        history.push("/movies")
    }
    return (
        <div>
            <h3>Create Movies</h3>
            <Button onClick={redirect}>Save</Button>
        </div>
    )
}
