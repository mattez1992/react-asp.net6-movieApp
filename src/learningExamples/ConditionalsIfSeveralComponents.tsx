import React, { useState } from 'react'
import SelectComponent from './SelectComponent';
import ProjectContent from './ProjectContent';

export default function ConditionalsIfSeveralComponents() {
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
            default: return <div>Best site</div>;
        }
    }
    return (
        <>
            <h1>Several Components Conditionals If else Example</h1>
            <div>Rate this website</div>
           <SelectComponent maxValue={100} onSelected={setSelectedRate}
           selectContent={(value) => `Select ${value}`}/>
            <div>{displayRate()}</div>

            <ProjectContent>
                <p>This paragraph and button are prameters for Project content</p>
                <button className="btn btn-primary">Button</button>
            </ProjectContent>
        </>
    )
}
