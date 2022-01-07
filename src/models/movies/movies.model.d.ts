export interface movieDTO {
    id: number;
    title: string;
    imgUrl: string;
}
export interface movieCreateDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
}
export interface landinpageDTO {
    inTheaters?: movieDTO[];
    upComingMovies?: movieDTO[];
}