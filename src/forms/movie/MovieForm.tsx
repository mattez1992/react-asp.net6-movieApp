import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { movieCreateDTO } from '../../models/movies/movies.model'
import * as Yup from "yup";
import Button from '../../utils/Button';
import { Link } from 'react-router-dom';
import TextField from '../formFields/TextField';
import DateField from '../formFields/DateField';
import ImageField from '../formFields/ImageField';
import CheckboxField from '../formFields/CheckboxField';

export default function MovieForm(props: movieFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
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
}