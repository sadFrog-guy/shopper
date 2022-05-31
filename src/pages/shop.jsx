import React from 'react';
import NavBar from "../components/Blocks/NavBar/NavBar";
import Products from "../components/Blocks/Products/Products";
import ScrollTopButton from "../components/UI/ScrollTopButton/ScrollTopButton";
import Footer from "../components/Blocks/Footer/Footer";

const Shop = () => {
    return (
        <div>
            <NavBar/>
            <Products/>
            <ScrollTopButton/>
            <Footer/>
        </div>
    );
};

export default Shop;