import React, {FC, useState} from "react";
import * as yup from "yup";
import { englishLettersOnlyRegex } from "../../constants";
import {
    ErrorMessage,
    ResponseErrorMessage,
    Input,
    Label,
    StyledButton,
    FormContainer,
    FormTitle,
} from "../MovieForm/MovieForm.styled";
import { fLUppercase } from "../../utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateUserMutation } from "../../store/users.api";
import {IUser, IUserResponse} from "../../store/types";

const schema = yup.object().shape({
    name: yup
        .string()
        .min(3)
        .trim()
        .matches(englishLettersOnlyRegex, "English letters only accepted!"),
});

interface IUserFormProps {
    setUserName: (uName: string) => void
}

interface IUserForm {
    name: string
}

const UserForm: FC<IUserFormProps> = ({ setUserName }) => {
    const [error, setError] = useState<string>("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserForm>({ resolver: yupResolver(schema) });
    const [createUser, {isLoading}] = useCreateUserMutation();

    const submitHandler = async (data: IUser) => {
        const user = await createUser(data) as IUserResponse;
        if(user?.error?.data?.err){
            setError(user.error.data.err)
        }else{
            if(user?.data?.name){
                setUserName(user.data.name)
            }
        }
    };

    return (
        <>
            <FormTitle>Enter your username</FormTitle>
            {error && <ResponseErrorMessage style={{"textAlign": "center"}}>{error}</ResponseErrorMessage>}
            <FormContainer onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <Label htmlFor={"username"}>Username</Label>
                    <Input
                        id={"username"}
                        placeholder="John Doe"
                        {...register("name")}
                    />
                    <ErrorMessage>
                        {errors?.name &&
                            fLUppercase(errors?.name?.message || "")}
                    </ErrorMessage>
                </div>
                <div>
                    <StyledButton disabled={isLoading}>Submit</StyledButton>
                </div>
            </FormContainer>
        </>
    );
};

export default UserForm;
