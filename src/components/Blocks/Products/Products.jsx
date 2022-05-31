import React, {useContext, useEffect} from 'react';
import cl from './Products.module.css'
import Title from "../../UI/Title/Title";
import MySelect from "../../UI/MySelect/MySelect";
import Categories from "../../UI/Categories/Categories";
import FilterList from "../../UI/FilterList/FilterList";
import ProductList from "../../UI/ProductList/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {toJS} from "mobx";
import SortButton from "../../UI/SortButton/SortButton";
import MyButton from "../../UI/MyButton/MyButton";
import ApplyFiltersButton from "../../UI/ApplyFiltersButton/ApplyFiltersButton";
import Pages from "../../UI/Pages/Pages";

const Products = observer(() => {
    const {sort, product} = useContext(Context)

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