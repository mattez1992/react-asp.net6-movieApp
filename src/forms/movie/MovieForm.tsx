import { Form, Formik, FormikHelpers } from 'formik'
import React, { useState } from 'react'
import { movieCreateDTO } from '../../models/movies/movies.model'
import * as Yup from "yup";
import Button from '../../utils/Button';
import { Link } from 'react-router-dom';
import TextField from '../formFields/TextField';
import DateField from '../formFields/DateField';
import ImageField from '../formFields/ImageField';
import CheckboxField from '../formFields/CheckboxField';
import MultipleSelectorField, { multipleSelectorModel } from '../formFields/MultipleSelectorField';
import { genreDTO } from '../../models/genres/genres.model';
import { movieTheaterDTO } from '../../models/movieTheater/movieTheater.model';
import TypeAheadActors from '../actor/TypeAheadActors';
import { actorMovieDTO } from '../../models/actor/actor.model';

export default function MovieForm(props: movieFormProps) {
    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedTheaters, setSelectedTheaters] = useState(mapToModel(props.selectedTheaters));
    const [nonSelectedTheaters, setNonSelectedTheaters] = useState(mapToModel(props.nonSelectedTheaters));

    const [selectedActors, setSelectedActors] = useState(props.selectedActors);

    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
        return items.map(item => {
            return { key: item.id, value: item.name }
        })
    }
    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.genresId = selectedGenres.map(item => item.key);
                values.movieTheatersId = selectedTheaters.map(item => item.key);
                values.actors = selectedActors;
                props.onSubmit(values, actions)
            }}
            validationSchema={Yup.object({
                title: Yup.string().required("This field is required").firstLetterUppercase(),
            })}
        >

            {(formikProps) => (
                <Form>
                    <TextField displayTitle='Title' field="title" />
                    <CheckboxField displayName='In Theaters' field='inTheaters' />
                    <TextField displayTitle='Trailer' field='trailer' />
                    <DateField displayName='Relealease Date' field='releaseDate' />
                    <ImageField displayName='Poster' field='poster' />
                    <MultipleSelectorField
                        displayName='Genres'
                        selected={selectedGenres}
                        nonSelected={nonSelectedGenres}
                        onChange={(selected, nonSelected) => { setSelectedGenres(selected); setNonSelectedGenres(nonSelected) }}
                    />
                    <MultipleSelectorField
                        displayName='Theaters'
                        selected={selectedTheaters}
                        nonSelected={nonSelectedTheaters}
                        onChange={(selected, nonSelected) => { setSelectedTheaters(selected); setNonSelectedTheaters(nonSelected) }}
                    />
                    <TypeAheadActors displayName='Actors' actors={selectedActors} onAdd={actors => {
                        setSelectedActors(actors)
                    }}
                        onRemove={actor => {
                            const actors = selectedActors.filter(x => x !== actor);
                            setSelectedActors(actors);
                        }}
                        listUI={(actor: actorMovieDTO) =>
                            <>
                                {actor.name} / <input placeholder='Character' type="text" value={actor.movieCharacter}
                                    onChange={e => {
                                        const index = selectedActors.findIndex(x => x.id === actor.id);
                                        const actors = [...selectedActors];
                                        actors[index].movieCharacter = e.currentTarget.value;
                                        setSelectedActors(actors)
                                    }}
                                />
                            </>
                        }
                    />
                    <div className="mt-2 d-flex justify-content-between">
                        <Button disabled={formikProps.isSubmitting} type="submit">Submit</Button>
                        <Link to="/actors" className='btn btn-secondary'>Cancel</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
interface movieFormProps {
    model: movieCreateDTO;
    onSubmit(values: movieCreateDTO, actions: FormikHelpers<movieCreateDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];

    selectedTheaters: movieTheaterDTO[];
    nonSelectedTheaters: movieTheaterDTO[];

    selectedActors: actorMovieDTO[];
}   