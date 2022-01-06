import React, { useState } from 'react'

export default function ConditionalsIfElse() {
    const [selectedRate, setSelectedRate] = useState(1);
    function handleSelectOnChange(e:React.ChangeEvent<HTMLSelectElement>){
        console.log(e.currentTarget.value)
        setSelectedRate(parseInt(e.currentTarget.value));      
    }
    function displayRate(){
        switch(selectedRate){
            case 1: return (<div>Worst site ever</div>);         
            case 2: return <div>Bad site</div>;
            case 3: return <div>Average site</div>;   
            case 4: return <div>Good site</div>;
            case 5:return <div>Best site</div>;  
        }
    }
    return (
        <>
            <h1>Conditionals If else Example</h1>
            <div>Rate this website</div>
            <select name="example" id="example-select" onChange={(e) => handleSelectOnChange(e)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <div>{displayRate()}</div>
        </>
    )
}
