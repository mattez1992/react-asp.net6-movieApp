import React from 'react'
import { Link } from 'react-router-dom'
import { actorReadDTO } from '../../models/actor/actor.model'
import { urlActors } from '../../utils/endpoints'
import IndexEntity from '../../utils/IndexEntity'

export default function IndexActors() {
    return (
        <>
            <IndexEntity<actorReadDTO>
                createURL='actors/create'
                editURL='actors/edit'
                entityName='Actor'
                pagnationURL={urlActors}
                baseURL={urlActors}
            >
                {(actors, buttons) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actors?.map(actor => <tr key={actor.id}>
                            <td>
                                {actor.name}
                            </td>
                            <td>
                                {buttons(actor.id)}
                            </td>
                        </tr>)}
                    </tbody>
                </>}
            </IndexEntity>

            <Link className='my-2 btn btn-primary' to="/actors/create">Create Actor</Link>

            <Link className='my-2 btn btn-secondary' to="/actors/edit">Edit Actor</Link>

        </>
    )
}
