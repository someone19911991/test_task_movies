import {TMovieFormValues} from "../components/MovieForm/MovieForm";

export interface Search{
    Title: string;
    Year: string;
    imdbID: string;
    Type: Type;
    Poster: string;
}
export interface IMovie extends Search{}

export interface IMovieResponse{
    error?: {
        data: {err: string}
    },
    data: any;
}

export enum Type{
    Movie = "movie",
    Series = 'series'
}

export interface IMovieSingle {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    imdbID: string;
    Type: Type;
    Poster: string;
    is_favorite: boolean;
    Error?: string;
}

export interface TCreateMovie extends TMovieFormValues{
    imdbid?: string;
    poster?: string;
}