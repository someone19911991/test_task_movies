import React, {FC, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    genres,
    movieTypes,
    validDateRegex,
    validRuntimeRegex,
    englishLettersOnlyRegex
} from "../../../src/constants";
import {fLUppercase} from "../../utils";
import { Input, Label, Select, FormTitle, StyledButton, FormContainer, ErrorMessage, ResponseSuccessMessage, ResponseErrorMessage} from "./MovieForm.styled";
import {useCreateMovieMutation, useUpdateMovieMutation} from "../../store/movies.api";
import {IMovieResponse} from "../../store/types";

export type TMovieFormValues = {
    title: string;
    year: number;
    runtime: string;
    genre: string;
    director: string;
    type: string;
    imdbid?: string;
    is_favorite?: string;
    poster?: string;
    name?: string
};

const schema = yup.object().shape({
    title: yup.string().min(3).trim().matches(englishLettersOnlyRegex, "English letters only accepted!"),
    year: yup.string().matches(validDateRegex, "Invalid date"),
    runtime: yup
        .string()
        .trim()
        .matches(
            validRuntimeRegex,
            "Invalid runtime specified - must be like: 115 min"
        ),
    director: yup.string().min(3).trim().matches(englishLettersOnlyRegex, "English letters only accepted!"),
    genre: yup.string().trim().required()
    .test("is-valid-genre", "${path} is not a valid genre", value => {
        return genres.find(genre => genre.value === value) ? true : false
    }),
    type: yup.string().trim().required()
        .test("is-valid-type", "${path} is not a valid type", value => {
            return movieTypes.find(movietype => movietype.value === value) ? true : false
        })
});



interface IMovieFormProps{
    title?: string;
    openModal?: (arg: boolean) => void,
    username: string;
    formData?: any
}

const MovieForm:FC<IMovieFormProps> = ({title, openModal, username, formData}) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<TMovieFormValues>({ resolver: yupResolver(schema) });
    const [createMovie] = useCreateMovieMutation();
    const [updateMovie] = useUpdateMovieMutation();
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

    useEffect(() => {
        if(formData){
            type FD = typeof formData;
            for(let i in formData){
                const b: FD = i;
                setValue(b, formData[i]);
            }
        }
    }, [formData, setValue])

    const submitHandler = async(data: TMovieFormValues) => {
        setBtnDisabled(true);
        data.year = new Date(data.year).getFullYear();
            data.name = fLUppercase(username);
            data.title = fLUppercase(data.title);
            data.director = fLUppercase(data.director);
            const result = formData ? await updateMovie(data) as IMovieResponse : await createMovie(data) as IMovieResponse;
            setBtnDisabled(false);
            if(result?.error){
                setErrorMsg(result?.error.data.err);
                setSuccessMsg('');
            }else{
                setSuccessMsg(`Movie successfully ${formData ? 'edited' : 'added'}`);
                setErrorMsg('');
            }
    };

    return (
        <FormContainer onSubmit={handleSubmit(submitHandler)}>
            <FormTitle>{title}</FormTitle>
            {errorMsg && <ResponseErrorMessage>{errorMsg}</ResponseErrorMessage>}
            {successMsg && <ResponseSuccessMessage>{successMsg}</ResponseSuccessMessage>}
            <div>
                <Label htmlFor={'title'}>Title</Label>
                <Input id={'title'} placeholder="Shutter Island" {...register('title')}/>
                <ErrorMessage>
                    {errors?.title && fLUppercase(errors?.title?.message || '')}
                </ErrorMessage>
            </div>
            <div>
                <Label htmlFor={'year'}>Year</Label>
                <Input id={'year'} placeholder="2020-11-12" type={formData?.year ? "text" : "date"} {...register('year')}/>
                <ErrorMessage>
                    {errors?.year && fLUppercase(errors?.year?.message || '')}
                </ErrorMessage>
            </div>
            <div>
                <Label htmlFor={'runtime'}>Runtime</Label>
                <Input id={'runtime'} placeholder="137 min" {...register('runtime')}/>
                <ErrorMessage>
                    {errors?.runtime && fLUppercase(errors?.runtime?.message || '')}
                </ErrorMessage>
            </div>
            <div>
                <Label htmlFor={'genre'}>Genre</Label>
                <Select id={'genre'} defaultValue={'thriller'} {...register('genre')}>
                    {genres.map(genre => <option key={genre.value} value={genre.value}>{genre.name}</option>)}
                </Select>
                <ErrorMessage>
                    {errors?.genre && fLUppercase(errors?.genre?.message || '')}
                </ErrorMessage>
            </div>
            <div>
                <Label htmlFor={'type'}>Type</Label>
                <Select id={'type'} defaultValue={'movie'} {...register('type')}>
                    {movieTypes.map(movieType => <option key={movieType.value} value={movieType.value}>{movieType.name}</option>)}
                </Select>
                <ErrorMessage>
                    {errors?.type && fLUppercase(errors?.type?.message || '')}
                </ErrorMessage>
            </div>
            <div>
                <Label htmlFor={'director'}>Director</Label>
                <Input id={'director'} placeholder="Martin Scorsese" {...register('director')}/>
                <ErrorMessage>
                    {errors?.director && fLUppercase(errors?.director?.message || '')}
                </ErrorMessage>
            </div>
            <div>
                <StyledButton disabled={btnDisabled}>Submit</StyledButton>
            </div>
        </FormContainer>
    );
};

export default MovieForm;
