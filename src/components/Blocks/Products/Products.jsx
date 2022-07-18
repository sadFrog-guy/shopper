import React from 'react';
import cl from './Products.module.css'
import Title from "../../UI/Title/Title";
import Categories from "../../UI/Categories/Categories";
import FilterList from "../../UI/FilterList/FilterList";
import ProductList from "../../UI/ProductList/ProductList";
import {observer} from "mobx-react-lite";
import SortButton from "../../UI/SortButton/SortButton";
import ApplyFiltersButton from "../../UI/ApplyFiltersButton/ApplyFiltersButton";
import Pages from "../../UI/Pages/Pages";

const Products = observer(() => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.filter_wrapper}>
                <Categories/>
                <FilterList/>
                <ApplyFiltersButton/>
            </div>
            <div className={cl.products_wrapper}>
                <div className={cl.sort}>
                    <Title style={{margin: 0}}>Shop All</Title>
                    <SortButton/>
                </div>
                <ProductList/>
                <Pages/>
            </div>
        </div>
    );
});

export default Products;