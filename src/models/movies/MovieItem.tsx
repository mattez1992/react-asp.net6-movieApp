import React, { useContext } from 'react';
import { movieDTO } from './movies.model';
import css from "./MovieItemCSS.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { urlMovies } from '../../utils/endpoints';
import Button from '../../utils/Button';
import customConfirm from '../../utils/customConfirm';
import AlertContext from '../../utils/AlertContext';
import Authorized from '../../auth/Authorized';

export default function MovieItem(props: movieDTO) {
    const buildLink = () => `/movie/${props.id}`;
    const customAlert = useContext(AlertContext);
    function deleteMovie() {
        axios.delete(`${urlMovies}/${props.id}`)
            .then(() => {
                customAlert();
            });
    }
    return (
        <div className={css.div}>
            <Link to={buildLink()}>
                <img src={props.poster} alt="movie-poster" />
            </Link>
            <p>
                <Link to={buildLink()}>{props.title}</Link>
            </p>
            <Authorized role='admin' authorized={<>
                <div>
                    <Link className="btn btn-info me-1"
                        to={`/movies/edit/${props.id}`}
                    >Edit</Link>
                    <Button
                        onClick={() => customConfirm(() => deleteMovie())}
                        className="btn btn-danger"
                    >Delete</Button>
                </div>
            </>} />
        </div>
    )
}
