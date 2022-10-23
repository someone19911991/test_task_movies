import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import { IMessageType } from "../../pages/SingleMoviePage/SingleMoviePage";
import {
    BtnContainer,
    Btn,
    ConfirmationContainer,
} from "./Confirmation.styled";
import {
    ResponseErrorMessage,
    ResponseSuccessMessage,
} from "../MovieForm/MovieForm.styled";

interface IConfirmationProps {
    onConfirm(): Promise<void>;
    onCancel: () => void;
    responseMsg: IMessageType;
    setResponseMsg: (arg: IMessageType) => void
}

const Confirmation: FC<IConfirmationProps> = ({
    onConfirm,
    onCancel,
    responseMsg,
  setResponseMsg
}) => {
    const [btnsDisabled, setBtnsDisabled] = useState<boolean>(false);
    const handleCancel = () => {
        onCancel();
        setResponseMsg({} as IMessageType);
    }

    const handleConfirm = () => {
        onConfirm().then(() => setBtnsDisabled(true))
    }

    return (
        <ConfirmationContainer>
            <p>Are you sure you want to delete this movie?</p>
            {responseMsg.msg && responseMsg.type === "success" ? (
                <ResponseSuccessMessage>
                    {responseMsg.msg}
                </ResponseSuccessMessage>
            ) : (
                <ResponseErrorMessage>{responseMsg.msg}</ResponseErrorMessage>
            )}
            <BtnContainer>
                <Btn disabled={btnsDisabled} onClick={handleConfirm} color={"red"}>
                    DELETE
                </Btn>
                <Btn disabled={btnsDisabled} onClick={handleCancel} color={"green"}>
                    CANCEL
                </Btn>
            </BtnContainer>
        </ConfirmationContainer>
    );
};

export default Confirmation;
