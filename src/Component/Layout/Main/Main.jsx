import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Rakib from '../../Pages/Home/Rakib';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;