import {TMovieFormValues} from "../components/MovieForm/MovieForm";

export interface IUser{
    name: string;
    id?: number;
}

export interface IUserResponse{
    data?: IUser;
    error?: {
        data: {
            err: string
        }
    }
}

export interface IMovieResponse{
    data?: TMovieFormValues;
    error?: {
        data: {
            err: string
        }
    }
}