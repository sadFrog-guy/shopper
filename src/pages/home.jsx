import React, {useContext, useEffect} from 'react';
import NavBar from "../components/Blocks/NavBar/NavBar";
import About from "../components/Blocks/About/About";
import Advantages from "../components/Blocks/Advantages/Advantages";
import Weatheralizer from "../components/Blocks/Weatheralizer/Weatheralizer";
import Footer from "../components/Blocks/Footer/Footer";
import {observer} from "mobx-react-lite";
import ScrollTopButton from "../components/UI/ScrollTopButton/ScrollTopButton";

const Home = observer(() => {
    return (
        <div>
            <NavBar/>
            <About/>
            <Advantages/>
            <Footer/>
            <ScrollTopButton/>
        </div>
    );
});

export default Home;