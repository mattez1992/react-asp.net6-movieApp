import React, { useState } from 'react'

export default function MapExample() {
    const arr = Array(100).fill(0);
    const [selectedRate, setSelectedRate] = useState(1);
    function handleSelectOnChange(e:React.ChangeEvent<HTMLSelectElement>){
        console.log(e.currentTarget.value)
        setSelectedRate(parseInt(e.currentTarget.value));      
    }
    return (
        <>
            <h1>Iteration Example</h1>
            <div>Rate this website</div>
            <select name="iteration-example" id="example-iteration" onChange={(e) => handleSelectOnChange(e)}>
            {arr.map((number,index) => <option value={index+1} key={index+1}>{index+1}</option>)}
            </select>
            <div>You have chosen {selectedRate}</div>
        </>
    )
}
