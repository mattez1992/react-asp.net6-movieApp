import { genreDTO } from '../../models/genres/genres.model'
import { urlGenrePagnation, urlGenres } from '../../utils/endpoints'
import IndexEntity from '../../utils/IndexEntity'

export default function IndexGenres() {

    return (
        <>
            <IndexEntity<genreDTO>
                entityName='Genres'
                baseURL={urlGenres}
                pagnationURL={urlGenrePagnation}
                createURL='genres/create'
                editURL='genres/edit'
            >
                {(genres, buttons) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres?.map(genre => <tr key={genre.id}>
                            <td>
                                {buttons(genre.id)}
                            </td>
                            <td>
                                {genre.name}
                            </td>
                        </tr>)}
                    </tbody>

                </>}

            </IndexEntity>
        </>
    )
}
