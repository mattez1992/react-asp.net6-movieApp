import React from 'react'

export default function ProjectContent(props: projectContentProps) {
    return (
        <>
            <h1>Project Content Example</h1>
            <h2>Top Part</h2>
            {props.children}
            <h2>Bottom Part</h2>
        </>
    )
}
interface projectContentProps{
    children: React.ReactNode,
}
