import styled from "styled-components";

const FormContainer = styled.form`
    min-width: 300px;
    background-color: #fff;
    padding: 20px;
`;

const Title = styled.h3`
    text-align: center;
`;

const FormTitle = styled.h3`
    text-align: center;
`;

const Input = styled.input`
    padding: 5px;
    font-size: 15px;
    font-weight: 300;
    width: 100%;
    outline: 1px solid teal;
    border: 0;
    &:focus {
        outline: 2px solid teal;
    }
`;

const ErrorMessage = styled.div`
    height: 40px;
    line-height: 40px;
    color: darkred;
    font-size: 13px;
`;

const ResponseErrorMessage = styled(ErrorMessage)`
    text-align: center;
    font-size: 20px;
`;

const ResponseSuccessMessage = styled(ResponseErrorMessage)`
    color: green
`;

const Select = styled.select`
    width: 50%;
    display: block;
    min-width: 200px;
    padding: 5px;
    border: 0;
    outline: 1px solid teal;
    &:focus {
        outline: 2px solid teal;
    }
`;

const Label = styled.label`
    font-weight: 300;
    margin-bottom: 5px;
    display: inline-block;
`;

const StyledButton = styled.button`
    padding: 10px 25px;
    color: teal;
    border: 0;
    outline: 1px solid teal;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    &:hover {
        color: #fff;
        background-color: teal;
        cursor: pointer;
    }
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
        &:hover{
            background-color: #fff;
            color: teal;
        }
    }
`;

export {
    Input,
    Select,
    ErrorMessage,
    Label,
    StyledButton,
    FormContainer,
    Title,
    FormTitle,
    ResponseSuccessMessage,
    ResponseErrorMessage,
};
