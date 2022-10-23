import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovieSingle, Search, IMovieResponse } from "../types/movie";
import { TMovieFormValues } from "../components/MovieForm/MovieForm";

const baseUrl = "http://localhost:5000/api";
// const baseUrl = "https://movies-test-task-garik.herokuapp.com/api/";
const apiKey = "ed429eb7";
let mainQueryString = `?apiKey=${apiKey}&plot=full`;

export const moviesApi = createApi({
    reducerPath: "movies",
    tagTypes: ["Movie"],
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (build) => ({
        searchMovie: build.query<Search[], string>({
            query: (queryString) => ({
                url: "/movies",
                params: {
                    s: queryString,
                    apiKey,
                    plot: "full",
                },
            }),
            transformResponse: (response: Search[]) => {
                return response;
            },
            providesTags: ["Movie"],
        }),
        searchMovieBy: build.query<IMovieSingle, string>({
            query: (queryString) => ({
                url: `/movies${mainQueryString}&${queryString}`,
            }),
            providesTags: ["Movie"],
        }),
        createMovie: build.mutation<TMovieFormValues, TMovieFormValues>({
            query: (movie) => ({
                url: "/movies",
                method: "POST",
                body: movie,
            }),
            invalidatesTags: ["Movie"],
        }),
        updateMovie: build.mutation<TMovieFormValues, TMovieFormValues>({
            query: (movie) => ({
                url: `/movies/${movie.imdbid}`,
                method: "PUT",
                body: movie,
            }),
            invalidatesTags: ["Movie"],
        }),
        deleteMovie: build.mutation<IMovieResponse, string>({
            query: (imdbid) => ({
                url: `/movies/${imdbid}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Movie"],
        }),
        addToFavorites: build.mutation<
            {imdbid: string},
            { is_favorite: boolean; imdbid: string }
        >({
            query: (body) => ({
                url: `/movies/favorite/${body.imdbid}`,
                method: "put",
                body,
            }),
            invalidatesTags: ["Movie"],
        }),
    }),
});

export const {
    useSearchMovieQuery,
    useSearchMovieByQuery,
    useCreateMovieMutation,
    useUpdateMovieMutation,
    useDeleteMovieMutation,
    useAddToFavoritesMutation
} = moviesApi;
