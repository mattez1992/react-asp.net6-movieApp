import React, {useState} from 'react'

export default function Events() {
    const [canSee, setCanSee] = useState(true);
    const [text, setText] = useState("");

    function handleCheckboxChanged(){
       setCanSee(!canSee);
    }
    function handleKeyUp(e:React.KeyboardEvent<HTMLInputElement>){
        console.log(e.currentTarget.value)
        setText(e.currentTarget.value);
    }
    return (
        <>
            <h1>Events Example</h1>
            <div>
            <input type="checkbox" onChange={handleCheckboxChanged} />
            </div>
            
            
            {canSee ? <div>You are seeing the secret</div> : <div>Nothing to see</div>}
            <div>
                <input type="text" name="text" id="event-text" onKeyUp={(e) => handleKeyUp(e)} />
            </div>
            <div>{text}</div>
        </>
    )
}
