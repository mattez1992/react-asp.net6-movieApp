import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { actorCreateDTO } from '../../models/actor/actor.model'
import Button from '../../utils/Button'
import TextField from '../formFields/TextField'
import * as Yup from "yup";
import DateField from '../formFields/DateField'
import ImageField from '../formFields/ImageField'
import MarkdownField from '../formFields/MarkdownField'

export default function ActorForm(props: actorFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required("This field is required").firstLetterUppercase(),
                dateOfBirth: Yup.date().nullable().required("This field is required")
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayTitle='Name' field='name' />
                    <DateField displayName='Date of birth' field="dateOfBirth" />
                    <ImageField displayName='Image'
                        field='picture'
                        imageURL={props.model.pictureURL}
                    />
                    <MarkdownField displayName='Biography' field="biography" />
                    <div className="mt-2 d-flex justify-content-between">
                        <Button disabled={formikProps.isSubmitting} type="submit">Submit</Button>
                        <Link to="/actors" className='btn btn-secondary'>Cancel</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
interface actorFormProps {
    model: actorCreateDTO;
    onSubmit(values: actorCreateDTO, action: FormikHelpers<actorCreateDTO>): void;
}