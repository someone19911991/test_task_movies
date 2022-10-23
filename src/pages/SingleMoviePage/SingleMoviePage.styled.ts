import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";

const MovieContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
`;

const ImageContainer = styled.div`
    width: 40%;
    max-height: 500px;
    position: relative;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 5px -5px 5px silver, -5px 5px 5px silver;
    overflow: hidden;
    &:hover .tool-container {
        opacity: 1;
    }
`;

const UpdateToolsContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Toolbar = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    padding-right: 20px;
`;

const Favorite = styled(Toolbar)`
    justify-content: center;
`;

const LLoadImg = styled(LazyLoadImage)`
    height: 90%;
    width: 90%;
    min-height: 35vh;
`;

const MovieInfo = styled.div`
    font-size: 17px;
    font-weight: bold;
    width: 40%;
    & p {
        margin: 20px 0;
    }
`;

export {MovieInfo, MovieContainer, ImageContainer, UpdateToolsContainer, Toolbar, Favorite, LLoadImg, LazyLoadImage}