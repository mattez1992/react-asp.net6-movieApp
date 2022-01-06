export interface movieDTO{
    id:number;
    title:string;
    imgUrl:string;
}

export interface landinpageDTO{
    inTheaters?: movieDTO[];
    upComingMovies?:movieDTO[];
}