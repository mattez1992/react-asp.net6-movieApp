import React from 'react'
import { Link } from 'react-router-dom'
import { movieTheaterDTO } from '../../models/movieTheater/movieTheater.model'
import { urlMovieTheaters } from '../../utils/endpoints'
import IndexEntity from '../../utils/IndexEntity'

export default function IndexMovieTeaters() {
    return (
        <>
            <IndexEntity<movieTheaterDTO>
                baseURL={urlMovieTheaters} pagnationURL={urlMovieTheaters} entityName='Movie Theaters'
                createURL="movietheaters/create"
                editURL='movietheaters/edit' >

                {(theaters, buttons) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {theaters?.map(theater => <tr key={theater.id}>
                            <td>
                                {theater.name}
                            </td>
                            <td>
                                {buttons(theater.id)}
                            </td>
                        </tr>)}
                    </tbody>
                </>}

            </IndexEntity>

        </>
    )
}
