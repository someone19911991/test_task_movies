import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useSearchMovieByQuery,
    useDeleteMovieMutation,
    useAddToFavoritesMutation
} from "../../store/movies.api";
import "react-lazy-load-image-component/src/effects/blur.css";
import NotAvailableImg from "../../../src/assets/images/n_a.jpeg";
import { ToolbarIcon } from "../../UI";
import {
    MovieInfo,
    MovieContainer,
    ImageContainer,
    UpdateToolsContainer,
    Toolbar,
    Favorite,
    LLoadImg,
} from "./SingleMoviePage.styled";
import Modal from "../../components/Modal/Modal";
import MovieForm from "../../components/MovieForm/MovieForm";
import UserForm from "../../components/UserForm/UserForm";
import { getNecessaryValuesFromMovie } from "../../utils";
import { formDataKeys } from "../../constants";
import Confirmation from "../../components/Confirmation/Confirmation";
import { IMovieResponse } from "../../store/types";

export interface IMessageType {
    type: string;
    msg: string;
}

const SingleMoviePage = () => {
    const { id } = useParams();
    const { data } = useSearchMovieByQuery(`i=${id}`);
    const [addToFavorites] = useAddToFavoritesMutation();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [deleteMovie] = useDeleteMovieMutation();
    const formData = getNecessaryValuesFromMovie(formDataKeys, data);
    const navigate = useNavigate();
    const [modalName, setModalName] = useState<string>("");
    const [responseMsg, setResponseMsg] = useState<IMessageType>(
        {} as IMessageType
    );
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleDeleteMovie = async () => {
        if (data?.imdbID) {
            const res = (await deleteMovie(data?.imdbID)) as IMovieResponse;
            if (res?.error) {
                setResponseMsg({ type: "error", msg: res.error.data.err });
            } else {
                setResponseMsg({
                    type: "success",
                    msg: "Movie successfully deleted!",
                });
                timeoutRef.current = setTimeout(() => navigate("/movies"), 2000);
            }
        }
    };

    const handleAddToFavorites = async() => {
        if(!username){
            setModalOpen(true);
        }else{
            if(data?.imdbID){
                await addToFavorites({imdbid: data?.imdbID, is_favorite: !data?.is_favorite});
                setIsFavorite(prev => !prev)
            }
        }
    }

    useEffect(() => {
        if(data?.imdbID){
            setIsFavorite(true);
        }
        return () => {
            if(timeoutRef.current){
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);


    return (
        <MovieContainer>
            {modalOpen && !username && (
                <Modal open={modalOpen} setOpen={setModalOpen}>
                    <UserForm setUserName={setUsername} />
                </Modal>
            )}

            {modalName === "delete" && username && (
                <Modal open={modalOpen} setOpen={setModalOpen}>
                    <Confirmation
                        responseMsg={responseMsg}
                        setResponseMsg={setResponseMsg}
                        onConfirm={handleDeleteMovie}
                        onCancel={() => setModalOpen(false)}
                    />
                </Modal>
            )}

            {modalName === "edit" && username && (
                <Modal open={modalOpen} setOpen={setModalOpen}>
                    <MovieForm
                        formData={formData}
                        username={username}
                        openModal={setModalOpen}
                        title="Edit modal"
                    />
                </Modal>
            )}

            <ImageContainer>
                <UpdateToolsContainer className="tool-container">
                    <Toolbar>
                        <ToolbarIcon
                            onClick={() => {
                                setModalOpen(true);
                                setModalName("delete");
                            }}
                            className="fa fa-trash"
                            color="red"
                            title="Delete movie"
                        />
                        <ToolbarIcon
                            onClick={() => {
                                setModalOpen(true);
                                setModalName("edit");
                            }}
                            className="fa fa-edit"
                            color="green"
                            title="Edit movie"
                        />
                        <ToolbarIcon
                            onClick={handleAddToFavorites}
                            className="fa fa-star"
                            color={isFavorite ? "orange" : "darkgrey"}
                            title={
                                isFavorite
                                    ? "Remove from favorites"
                                    : "Add to favorites"
                            }
                        />
                    </Toolbar>
                    <Favorite>
                        {isFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"}
                    </Favorite>
                </UpdateToolsContainer>
                <LLoadImg
                    src={
                        data?.Poster === "N/A" ? NotAvailableImg : data?.Poster
                    }
                />
            </ImageContainer>
            <MovieInfo>
                <h1>{data?.Title}</h1>
                <p>{data?.Plot}</p>
                <p>Director: {data?.Director}</p>
                <p>Writers: {data?.Writer}</p>
                <p>Actors: {data?.Actors}</p>
                <p>Runtime: {data?.Runtime}</p>
                <p>Genre: {data?.Genre}</p>
            </MovieInfo>
        </MovieContainer>
    );
};

export default SingleMoviePage;
