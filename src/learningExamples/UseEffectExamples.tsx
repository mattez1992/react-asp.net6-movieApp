import React, {useEffect, useState} from 'react'

export default function UseEffectExamples() {
    const [clicks, setClicks] = useState(0);
    useEffect(()=>{
        console.log("Component loaded")

        return () => {
            console.log("the component will be destroyed")
        }
    },[])
    useEffect(() => {
        document.title = `${clicks} times`
    },[clicks])
    return (
        <div>
            <h1>UseEffect Examples</h1>
            <div>
                <button className='btn-xl' onClick={() => setClicks(clicks+1)}>You have clicked {clicks} times</button>
            </div>
        </div>
    )
}
