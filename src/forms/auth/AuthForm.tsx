import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { userCredentials } from '../../models/auth/auth.models'
import * as Yup from "yup"
import TextField from '../formFields/TextField'
import Button from '../../utils/Button'
import { Link } from 'react-router-dom'

export default function AuthForm(props: authFormProps) {
    return (
        <>
            <Formik
                initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    email: Yup.string().required("This field is required")
                        .email("You have to insert a valid email"),
                    password: Yup.string().required("This field is required")
                })}>

                {formikProps => (
                    <Form>
                        <TextField displayTitle='Email' field='email' />
                        <TextField displayTitle='Password' field='password' type='password' />
                        <div className="mt-2 d-flex justify-content-between">
                            <Button disabled={formikProps.isSubmitting} type="submit">Submit</Button>
                            <Link to="/s" className='btn btn-secondary'>Cancel</Link>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    )
}
interface authFormProps {
    model: userCredentials;
    onSubmit(values: userCredentials, actions: FormikHelpers<userCredentials>): void;
}
