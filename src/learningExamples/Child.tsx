import React, { useContext } from 'react'
import ValueContext from './ValueContext'

export default function Child() {
    const value = useContext(ValueContext)
    return (
        <>
            <h3>Child omponent</h3>
            <h4>The value is: {value.toString()}</h4>
        </>
    )
}
