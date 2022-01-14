import { actorMovieDTO, movieActorDto } from "../actor/actor.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheater/movieTheater.model";

export interface movieDTO {
    id: number;
    title: string;
    imgUrl: string;
    actors?: actorMovieDTO[];
}
export interface movieCreateDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    summary?: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    movieTheatersIds?: number[];
    actors?: actorMovieDTO[];
}
export interface landinpageDTO {
    inTheaters?: movieDTO[];
    upComingMovies?: movieDTO[];
}

export interface movieReadDto {
    id: number;
    title: string;
    summary?: string;
    trailerUrl?: string;
    inTheaters?: boolean;
    releaseDate?: Date;
    poster?: string;
    genres: genreDTO[];
    movieTheaters: movieTheaterDTO[];
    movieActors: movieActorDto[];
}