import React from 'react';
import { movieDTO } from './movies.model';
import css from "./MovieItemCSS.module.css";

export default function MovieItem(props: movieDTO) {
    const buildLink = () => `/movies/${props.id}`;
    return (
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.imgUrl} alt="movie-poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.title}</a>
            </p>
        </div>
    )
}
