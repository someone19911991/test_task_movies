import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser, IUserResponse} from "./types";


const baseUrl = 'http://localhost:5000/api';


export const usersApi = createApi({
    reducerPath: 'users',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: build => ({
        getUser: build.query<IUser, string>({
            query: (username) => ({
                url: `/movies/${username}`,
            }),
            providesTags: ['User']
        }),
        createUser: build.mutation<IUserResponse, IUser>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            })
        })
    })
});

export const {useGetUserQuery, useCreateUserMutation} = usersApi;