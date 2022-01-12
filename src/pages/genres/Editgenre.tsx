import GenreForm from '../../forms/genre/GenreForm';
import { genreCreationDTO, genreDTO } from '../../models/genres/genres.model';
import EditEntity from '../../utils/EditEntity';
import { urlGenres } from '../../utils/endpoints';


export default function Editgenre() {
    return (
        <>
            <EditEntity<genreCreationDTO, genreDTO>
                entityName="Genre"
                apiURL={urlGenres}
                historyURL='/genres'
            >
                {(entity, edit) =>
                    <GenreForm model={entity}
                        onSubmit={async genreToEdit => {
                            // when the form is posted
                            await edit(genreToEdit);
                        }} />}
            </EditEntity>
        </>
    )
}
