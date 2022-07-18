import React from 'react';
import NavBar from "../components/Blocks/NavBar/NavBar";
import Footer from "../components/Blocks/Footer/Footer";
import ScrollTopButton from "../components/UI/ScrollTopButton/ScrollTopButton";
import Table from "../components/Blocks/Table/Table";

const Basket = () => {
    return (
        <div>
            <NavBar/>
            <Table/>
            <ScrollTopButton/>
            <Footer/>
        </div>
    );
};

export default Basket;