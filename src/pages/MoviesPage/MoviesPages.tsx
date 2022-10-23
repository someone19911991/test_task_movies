import React, { useState } from "react";
import Movie from "../../components/Movie/Movie";
import Searchbar from "../../components/Searchbar/Searchbar";
import { MovieContainer, PageHeader, ErrorMessage } from "./MoviesPage.styled";
import { Icon } from "../../UI";
import { AddMovieButton } from "./MoviesPage.styled";
import Modal from "../../components/Modal/Modal";
import MovieForm from "../../components/MovieForm/MovieForm";
import { useRequest } from "../../hooks/requests";
import UserForm from "../../components/UserForm/UserForm";

const MoviesPages = () => {
    const [username, setUsername] = useState<string>("");
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchBy, setSearchBy] = useState<string>("");
    const {
        globalSearchData,
        searchByData,
        globalSearchSkippingConditions,
        searchBySkippingConditions,
        showLoadingCondition,
        showErrorCondition,
        noMoviesCondition,
        globalSearchErrorCondition
    } = useRequest(searchQuery, searchBy);

    return (
        <div>
            <PageHeader>
                <Modal setOpen={setModalOpen} open={modalOpen}>
                    {!username ? (
                        <UserForm setUserName={setUsername} />
                    ) : (
                        <MovieForm openModal={setModalOpen} username={username}/>
                    )}
                </Modal>
                <AddMovieButton
                    onClick={() => setModalOpen(true)}
                    disabled={showLoadingCondition}
                    title="Add movie"
                >
                    <Icon className="fa fa-plus" color="#fff" />
                </AddMovieButton>
                <Searchbar
                    setSearchQuery={setSearchQuery}
                    setSearchBy={setSearchBy}
                    disabled={showLoadingCondition}
                />
            </PageHeader>
            <MovieContainer>
                {showLoadingCondition && <h3>Loading...</h3>}
                {showErrorCondition && (
                    <ErrorMessage>{searchByData?.Error}</ErrorMessage>
                )}
                {noMoviesCondition && (
                    <ErrorMessage>No movies found</ErrorMessage>
                )}
                {!globalSearchErrorCondition && searchBySkippingConditions &&
                    globalSearchData?.map((movie) => (
                        <Movie key={movie.imdbID} movie={movie} />
                    ))}
                {globalSearchErrorCondition && <ErrorMessage>No movies found</ErrorMessage>}
                {globalSearchSkippingConditions && searchByData?.imdbID && (
                    <Movie movie={searchByData} />
                )}
            </MovieContainer>
        </div>
    );
};

export default MoviesPages;
