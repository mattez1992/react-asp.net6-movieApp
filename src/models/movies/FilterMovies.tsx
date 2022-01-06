import { Field, Form, Formik } from 'formik'
import React from 'react'
import Button from '../../utils/Button';
import { genreDTO } from '../genres/genres.model'

export default function FilterMovies() {
    const initialValues: filterMoviesForm = {
        title: "",
        genreId: 0,
        upcomingRelease: false,
        inTheaters: false
    }
    // dummy array of genres will fetch from a db later.
    const genres: genreDTO[] = [{ id: 1, name: "Action" }, { id: 2, name: "Comedy" }];
    return (
        <div>
            <h3>Movie Filter</h3>
            <Formik initialValues={initialValues}
                onSubmit={values => console.log(values)}>
                {(formikProps) => (
                    <Form>
                        <div className="row gx-3 align-items-center">
                            <div className="col-auto">
                                <input type="text" className="form-control" id="title" placeholder='Movie Name'
                                    {...formikProps.getFieldProps("title")}
                                />
                            </div>
                            <div className="col-auto">
                                <select className="form-select"
                                    {...formikProps.getFieldProps("genreId")}
                                >
                                    <option value="0">--Choose a genre--</option>
                                    {genres.map(genre => <option value={genre.id} key={genre.id}>{genre.name}</option>)}
                                </select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="upcomingReleases"
                                        name="upcomingRelses" type="checkbox" />
                                    <label htmlFor="upcomingRelease" className="form-check-label">Upcoming Releases</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="inTheaters"
                                        name="inTheaters" type="checkbox" />
                                    <label htmlFor="inTheaters" className="form-check-label">In Theaters</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Button className='btn btn-primary' onClick={() => formikProps.submitForm()}>Filter</Button>
                                <Button className='btn btn-danger ms-3' onClick={() => formikProps.setValues(initialValues)}>Reset</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
interface filterMoviesForm {
    title: string;
    genreId: number;
    upcomingRelease: boolean;
    inTheaters: boolean;

}