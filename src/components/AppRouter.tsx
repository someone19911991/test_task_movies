import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)}
            <Route path="*" element={<Navigate to="/movies"/>}/>
        </Routes>
    );
};

export default AppRouter;