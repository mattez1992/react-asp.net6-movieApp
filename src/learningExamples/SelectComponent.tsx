import React from 'react'

export default function SelectComponent(props: selectProps) {
    const arr = Array(props.maxValue).fill(0);
    return (
        <div>
             <select name="example" id="example-select" onChange={(e) => props.onSelected(parseInt(e.currentTarget.value, 10))}>
             {arr.map((number,index) => <option value={index+1} key={index+1}>{props.selectContent(index+1)}</option>)}
            </select>
        </div>
    )
}

interface selectProps{
    maxValue:number;
    onSelected(value:number):void;
    // passing in content
    selectContent(value:number):React.ReactNode;
}
SelectComponent.defaultProps = {
    maxValue:5,
}