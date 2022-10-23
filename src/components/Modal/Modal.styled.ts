import styled from "styled-components";

const ModalContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    width: 50%;
    max-width: 1000px;
    border-radius: 20px;
    padding: 20px;
    background-color: #fff;
`;

const ModalContentHeader = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    alignItems: center;
    border-radius: 20px 20px 0 0;
    padding: 10px;
`;

export {ModalContent, ModalContentHeader, ModalContainer};