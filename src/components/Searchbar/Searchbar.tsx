import React, {FC, useEffect, useState, useContext} from "react";
import {
    SearchbarContainer,
    SearchButton,
    SearchInput,
    SearchbarSelect,
} from "./Searchbar.styled";
import {GlobalContext} from "../App/App";

interface ISearchbarProps {
    setSearchQuery: (arg: string) => void;
    setSearchBy: (arg: string) => void;
    disabled: boolean;
}


const Searchbar: FC<ISearchbarProps> = ({ setSearchQuery, setSearchBy, disabled }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [searchByValue, setSearchByValue] = useState<string>("");
    const {searchValue, setSearchValue} = useContext(GlobalContext);

    const handleSetSearch = () => {
        let textToSet = "";
        if (searchByValue === "i" || searchByValue === "t") {
            textToSet = `${searchByValue}=${inputValue}`;
        } else {
            textToSet = inputValue;
        }

        setSearchBy(searchByValue);
        setSearchQuery(textToSet);
        setSearchValue(textToSet);
    };

    useEffect(() => {
        const contextSearchValue = searchValue;
        if(contextSearchValue){
            if(searchValue.startsWith('t=') || searchValue.startsWith('i=')){
                setSearchBy(searchValue.slice(0, 1))
            }
            setSearchQuery(searchValue);
        }
    }, []);

    return (
        <SearchbarContainer>
            <SearchInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                onKeyDown={e => e.key === 'Enter' && handleSetSearch()}
            />
            <SearchbarSelect
                defaultValue=""
                onChange={(e) => setSearchByValue(e.target.value)}
            >
                <option value="" disabled>
                    Search by
                </option>
                <option value="s">Global Search</option>
                <option value="t">Search by Title</option>
                <option value="i">Search by ID</option>
            </SearchbarSelect>
            <SearchButton disabled={disabled} onClick={handleSetSearch}>Search</SearchButton>
        </SearchbarContainer>
    );
};

export default Searchbar;
