import React from 'react'
import ActorForm from '../../forms/actor/ActorForm'
import { actorCreateDTO, actorReadDTO } from '../../models/actor/actor.model';
import { converActorToFormData } from '../../utils/formDataConverters';
import EditEntity from '../../utils/EditEntity';
import { urlActors } from '../../utils/endpoints';

export default function EditActor() {

    function transform(actor: actorReadDTO): actorCreateDTO {
        return {
            name: actor.name,
            pictureURL: actor.picture,
            biography: actor.biography,
            dateOfBirth: new Date(actor.dateOfBirth!)
        }
    }

    return (
        <div>
            <EditEntity<actorCreateDTO, actorReadDTO>
                entityName="Actor"
                apiURL={urlActors}
                historyURL='/actors'
                transformFormData={converActorToFormData}
                transformReadToCreate={transform}
            >
                {(entity, edit) =>
                    <ActorForm model={entity}
                        onSubmit={async entityToEdit => {
                            // when the form is posted
                            await edit(entityToEdit);
                        }} />}
            </EditEntity>
        </div>
    )
}
