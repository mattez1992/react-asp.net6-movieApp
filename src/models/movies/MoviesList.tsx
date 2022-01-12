import React from 'react'
import MovieItem from './MovieItem'
import { movieDTO } from './movies.model'
import css from "./MoviesListCSS.module.css";
import DisplayGenericList from '../../utils/DisplayGenericList';
export default function MoviesList(props: moviesListProps) {

    return (<DisplayGenericList list={props.movies}>
        <div className={css.div}>
            {props.movies?.map(movie =>
                <MovieItem {...movie} key={movie.id} />
            )}
        </div>
    </DisplayGenericList>)


}

interface moviesListProps {
    movies?: movieDTO[];
}
