import {
    useSearchMovieByQuery,
    useSearchMovieQuery,
} from "../store/movies.api";
import { IMovie, IMovieSingle } from "../types/movie";

type TUseRequestReturn = {
    globalSearchData: IMovie[] | undefined;
    searchByData: IMovieSingle | undefined;
    globalSearchSkippingConditions?: boolean;
    searchBySkippingConditions?: boolean;
    showLoadingCondition: boolean;
    showErrorCondition: boolean;
    noMoviesCondition: boolean;
    globalSearchErrorCondition: boolean;
};

const useRequest = (
    searchQuery: string,
    searchBy: string
): TUseRequestReturn => {
    const globalSearchSkippingConditions =
        searchQuery.trim().length < 3 || ["t", "i"].includes(searchBy);
    const searchBySkippingConditions =
        searchQuery.trim().length < 3 || !["t", "i"].includes(searchBy);
    const {
        data: globalSearchData,
        isLoading: globalSearchLoading,
    } = useSearchMovieQuery(searchQuery, {
        skip: globalSearchSkippingConditions,
    });
    const { data: searchByData, isLoading: searchByLoading } =
        useSearchMovieByQuery(searchQuery, {
            skip: searchBySkippingConditions,
        });

    const showLoadingCondition =
        (globalSearchLoading && searchBySkippingConditions) ||
        (searchByLoading && globalSearchSkippingConditions);

    const showErrorCondition =
        globalSearchSkippingConditions && !!searchByData?.Error;

    const noMoviesCondition =
        !searchByLoading &&
        !globalSearchLoading &&
        !globalSearchSkippingConditions &&
        searchBySkippingConditions &&
        !globalSearchData;

    const globalSearchErrorCondition =
        !!globalSearchData && ("Error" in globalSearchData);

    return {
        globalSearchData,
        searchByData,
        globalSearchSkippingConditions,
        searchBySkippingConditions,
        showLoadingCondition,
        showErrorCondition,
        noMoviesCondition,
        globalSearchErrorCondition,
    };
};

export { useRequest };
