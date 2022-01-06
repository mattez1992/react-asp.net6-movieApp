import React from 'react'
import ActorForm from '../../forms/actor/ActorForm'

export default function CreateActor() {
    return (
        <div>
            <h3>Create Actor</h3>
            <ActorForm model={{ name: "", dateOfBirth: undefined }}
                onSubmit={async value => {
                    // when the form is posted
                    await new Promise(r => setTimeout(r, 2000));
                    console.log(value)
                }}
            />
        </div>
    )
}
