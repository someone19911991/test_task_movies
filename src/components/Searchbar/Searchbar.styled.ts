import styled from "styled-components";

const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    font-size: 17px;
    border: 0;
    outline: 1px solid silver;
    padding-left: 10px;
`;

const SearchButton = styled.button`
    height: 44px;
    margin-top: -2px;
    font-size: 17px;
    outline: 0;
    border: 0;
    padding: 0 20px;
    cursor: pointer;
    &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }
`;

const SearchbarContainer = styled.div`
    margin: 20px 0;
    display: flex;
`;

const SearchbarSelect = styled.select`
    height: 42px;
    margin-top: -1px;
    font-size: 17px;
    border: 1px solid silver;
    padding: 0 15px;
    outline: 0;
`

export {SearchbarContainer, SearchButton, SearchInput, SearchbarSelect};