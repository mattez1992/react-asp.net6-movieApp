import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '../formFields/TextField';
import Button from '../../utils/Button';
import * as Yup from "yup";
import { genreCreationDTO } from '../../models/genres/genres.model';

export default function GenreForm(props: genreFormProps) {
    return (
        <>
            <Formik initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required("This field is required stupid").firstLetterUppercase(),
                })}>

                {(formikProps) => (
                    <Form>
                        <TextField field="name" displayTitle="Name" />
                        <div className="mt-2 d-flex justify-content-between">
                            <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                            <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface genreFormProps {
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}