import styled from "styled-components";

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 20px;
`;

const PageHeader = styled.header`
    padding: 20px;
`;

const ErrorMessage = styled.h3`
    text-align: center;
`;

const AddMovieButton = styled.button`
    display: block;
    margin-left: auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    background-color: teal;
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    &:disabled{
        opacity: 0.2;
        cursor: not-allowed;
    }
`;

export { MovieContainer, PageHeader, ErrorMessage, AddMovieButton };
