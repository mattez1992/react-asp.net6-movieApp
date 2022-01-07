import { Form, Formik, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'
import { movieTheaterCreateDTO } from '../../models/movieTheater/movieTheater.model'
import Button from '../../utils/Button'
import TextField from '../formFields/TextField'
import * as Yup from "yup";
import MapField from '../formFields/MapField'
import { coordinateDTO } from '../../models/map/coordinateDTO.model'

export default function MovieTheaterForm(props: movieTheaterForm) {
    function transformCoordinates(): coordinateDTO[] | undefined {
        if (props.model.latitude && props.model.longitude) {
            const response: coordinateDTO = { lat: props.model.latitude, lng: props.model.longitude };
            return [response];
        }
        return undefined;
    }
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required("This field is required").firstLetterUppercase(),
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayTitle='Name' field='name' />
                    <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                        <MapField latField='latitude' lngField='longitude'
                            coordinates={transformCoordinates()}
                        />
                    </div>
                    <div className="mt-2 d-flex justify-content-between">
                        <Button disabled={formikProps.isSubmitting} type="submit">Submit</Button>
                        <Link className="btn btn-secondary" to="/movetheaters">Back</Link>
                    </div>

                </Form>
            )}
        </Formik>
    )
}
interface movieTheaterForm {
    model: movieTheaterCreateDTO;
    onSubmit(values: movieTheaterCreateDTO, actions: FormikHelpers<movieTheaterCreateDTO>): void;
}