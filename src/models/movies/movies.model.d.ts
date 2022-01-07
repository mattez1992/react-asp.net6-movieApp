import { actorMovieDTO } from "../actor/actor.model";

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
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresId?: number[];
    movieTheatersId?: number[];
    actors?: actorMovieDTO[];
}
export interface landinpageDTO {
    inTheaters?: movieDTO[];
    upComingMovies?: movieDTO[];
}