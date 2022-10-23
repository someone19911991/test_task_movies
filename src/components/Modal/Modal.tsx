import React, { FC, PropsWithChildren } from "react";
import {
    ModalContent,
    ModalContainer,
    ModalContentHeader,
} from "./Modal.styled";
import { Icon } from "../../UI/index";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";

interface IModal {
    open: boolean;
    setOpen: (arg: boolean) => void;
}

const Modal: FC<PropsWithChildren<IModal>> = ({ open, setOpen, children }) => {
    if (!open) return <></>;

    return (
        <ModalContainer onClick={() => setOpen(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalContentHeader>
                    <Icon
                        className="fa fa-times"
                        color="grey"
                        title="Edit movie"
                        onClick={() => setOpen(false)}
                    />
                </ModalContentHeader>
                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
