import React, {useEffect, useState, createContext} from 'react';
import AppRouter from "../AppRouter";
import {NavItem, MainContainer, PageHeader} from "./App.styled"

export type TGlobalContent = {
    searchValue: string
    setSearchValue:(context: string) => void
}
export const GlobalContext = createContext<TGlobalContent>({} as TGlobalContent);

const App = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <GlobalContext.Provider value={{searchValue, setSearchValue}}>
            <PageHeader>
                <NavItem to="/movies">Movies</NavItem>
            </PageHeader>
            <MainContainer>
                <AppRouter/>
            </MainContainer>
        </GlobalContext.Provider>
    );
};

export default App;