import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ActorForm from '../../forms/actor/ActorForm'
import { actorCreateDTO } from '../../models/actor/actor.model';
import { converActorToFormData } from '../../utils/formDataConverters';
import DisplayErrors from '../../utils/DisplayErrors';
import { urlActors } from '../../utils/endpoints';

export default function CreateActor() {
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();

    async function create(actor: actorCreateDTO) {
        try {
            const formData = converActorToFormData(actor);
            await axios({
                method: "post",
                url: urlActors,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            history.push("/actors");
        } catch (error) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <div>
            <h3>Create Actor</h3>
            <DisplayErrors errors={errors} />
            <ActorForm model={{ name: "", dateOfBirth: undefined }}
                onSubmit={async newActor => {
                    await create(newActor)
                }}
            />
        </div>
    )
}
