export interface actorCreateDTO {
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}
export interface actorDTO {
    id: number;
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}
export interface actorMovieDTO {
    id: number;
    name: string;
    movieCharacter: string;
    picture: string;
}