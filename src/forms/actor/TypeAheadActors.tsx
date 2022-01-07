import React, { useState } from 'react'
import { actorMovieDTO } from '../../models/actor/actor.model'
import { Typeahead } from "react-bootstrap-typeahead"
import { ReactElement } from 'react-markdown/lib/react-markdown';

export default function TypeAheadActors(props: typeAheadActorsProps) {
    const actors: actorMovieDTO[] = [
        { id: 1, name: "Tom Holland", movieCharacter: "spiderman", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/250px-Tom_Holland_by_Gage_Skidmore.jpg" },
        { id: 2, name: "Dwayne Johnsonn", movieCharacter: "the rock", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/220px-Dwayne_Johnson_2014_%28cropped%29.jpg" },
        { id: 3, name: "Vin Disel", movieCharacter: "Dom", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png/220px-Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png" }
    ]

    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);
    function handleDragStart(actor: actorMovieDTO) {
        setDraggedElement(actor);
    }
    function handleDragOver(actor: actorMovieDTO) {
        if (!draggedElement) {
            return;
        }

        if (actor.id !== draggedElement.id) {
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }
    return (
        <>
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actors => {
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1) {
                        props.onAdd([...props.actors, actors[0]])
                    }
                    console.log(actors)
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={["name"]}
                placeholder='Write the name of the actor'
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor =>
                    <>
                        <img src={actor.picture} alt="actor" style={{
                            height: "64px",
                            marginRight: "10px",
                        }} />
                        {actor.name}
                    </>
                }
            />

            <ul className="list-group">
                {props.actors.map(actor => <li key={actor.id}
                    className='list-group-item list-group-item-action'
                    draggable={true}
                    onDragStart={() => handleDragStart(actor)}
                    onDragOver={() => handleDragOver(actor)}
                >
                    {props.listUI(actor)}
                    <span className="badge badge-primary badge-pill pointer ms-1 text-dark" onClick={() => props.onRemove(actor)}>x</span>

                </li>)}
            </ul>
        </>
    )
}
interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}