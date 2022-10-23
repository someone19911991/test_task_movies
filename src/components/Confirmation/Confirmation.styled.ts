import styled from "styled-components";

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #fff;
`;

const Btn = styled.button`
    padding: 15px 30px;
    outline: 0;
    border: 0;
    border-radius: 10px;
    color: ${(props) => props.color};
    transition: all .2s ease-in-out;
    cursor: pointer;
    font-weight: bold;
    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-top: 30px;
`;

export {BtnContainer, Btn, ConfirmationContainer};