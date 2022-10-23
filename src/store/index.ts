import {configureStore} from "@reduxjs/toolkit";
import {moviesApi} from "./movies.api";
import {usersApi} from "./users.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([moviesApi.middleware, usersApi.middleware])
});

setupListeners(store.dispatch);
