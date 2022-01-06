import React from 'react'
import css from "./CSSExamples.module.css";

export default function CSSExamples() {
    const square = {
        backgroundColor:"green",
        height:"50px",
        width:"50px",
        marginLeft:"1rem"
    }
    return (
        <>
            <h1 className="red">CSS Examples</h1>
            <h2 style={{color:"blue", fontSize:"30px"}}>Subtext</h2>
            <div style={square}></div>
            <br />
            <div style={square}></div>
            <br />
            <h2 className={css["primary-color"]}>This is styled from a module</h2>
        </>
    )
}
