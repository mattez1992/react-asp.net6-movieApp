import React from 'react'
import ActorForm from '../../forms/actor/ActorForm'

export default function EditActor() {
    return (
        <div>
            <h3>Edit Actor</h3>
            <ActorForm model={{ name: "Tom Holland", dateOfBirth: new Date("1996-06-01T00:00:00"), pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/250px-Tom_Holland_by_Gage_Skidmore.jpg" }}
                onSubmit={async value => {
                    // when the form is posted
                    await new Promise(r => setTimeout(r, 2000));
                    console.log(value)
                }} />
        </div>
    )
}
