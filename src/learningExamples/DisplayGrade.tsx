import React from 'react'
import { displayPartsToString } from 'typescript'

export default function DisplayGrade(props: displayGradeProps) {
    function display(grade:number){
        if(grade > 90){
            return(
                <div>
                    <h3>Excelent Job!</h3>
                </div>
            )
        }
        else if(grade < 90 && grade > 60)
        {
            return(
                <div>
                    <h3>Good Job!</h3>
                </div>
            )
        }
        else if(grade >= 0  && grade <= 60){
            return(
                <div>
                    <h3>Better luck next time!</h3>
                </div>
            )
        }
        else{
            throw "this is imposible!";
        }
    }
    return (
        <>
            {display(props.grade)}
        </>
    )
}
interface displayGradeProps{
    grade:number;
}
