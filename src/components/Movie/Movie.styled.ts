import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LLoadImg = styled(LazyLoadImage)`
    width: 90%;
    object-fit: cover;
    margin: 0 auto;
    display: block;
    min-height: 35vh;
`


const MovieContainer = styled.div`
    width: 320px;
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 2px -2px 3px #ccc, -2px 2px 10px #ccc;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    &:hover{
        box-shadow: 5px -5px 15px #ccc, -5px 5px 15px #ccc;
        cursor: pointer;
    }
`

const MovieImg = styled.img`
    width: 90%;
    object-fit: cover;
    margin: 0 auto;
    display: block;
`
const MovieTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

export {MovieTitle, MovieContainer, MovieImg, LLoadImg}