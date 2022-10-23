import React, {FC} from 'react';
import {IMovie} from "../../types/movie";
import {MovieTitle, MovieContainer, LLoadImg} from './Movie.styled'
import ImgNotAvailable from "../../assets/images/n_a.jpeg";
import {useNavigate} from "react-router-dom";

interface IMovieProps{
    movie: IMovie
}

const Movie:FC<IMovieProps> = ({movie}) => {
    const navigate = useNavigate();
    const movieTitle = (title: string): string => title.length > 25 ? (title.slice(0, 25) + '...') : title;

    return (
        <MovieContainer onClick={() => navigate(`/movies/${movie.imdbID}`)}>
            <MovieTitle>{movieTitle(movie.Title)}</MovieTitle>
            <LLoadImg src={movie.Poster === 'N/A' ? ImgNotAvailable : movie.Poster} alt={movie.Title} effect="blur"/>
        </MovieContainer>
    );
};

export default Movie;