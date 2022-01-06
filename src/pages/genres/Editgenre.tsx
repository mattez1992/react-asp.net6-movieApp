import React from 'react'
import { useParams } from 'react-router-dom'
import GenreForm from './GenreForm';

export default function Editgenre() {
    const { id }: any = useParams();
    return (
        <div>
            <h3>Edit Genre</h3>
            <GenreForm model={{ name: "Action" }}
                onSubmit={async value => {
                    // when the form is posted
                    await new Promise(r => setTimeout(r, 2000));
                    console.log(value)
                    console.log(`the id is: ${id}`)
                }}
            />
        </div>
    )
}
