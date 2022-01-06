import React from 'react'

export default function Conditionals() {
    const canSee =  true;
    return (
        <>
            <h1>Conditionals Example</h1>
            {canSee ? <div>You are seeing the secret</div> : <span>Nothing to see</span>}
        </>
    )
}
