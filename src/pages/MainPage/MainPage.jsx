import React from 'react';
import './MainPage.css'
import MenuMain from "../../components/MenuMain";
import SpecCarousel from "../../components/SpecCarousel";

function MainPage(props) {
    return (
        <>
            <header>
                <MenuMain/>
            </header>
            <h1>Продажа автомобилей</h1>
            <SpecCarousel/>
        </>
    );
}

export default MainPage;