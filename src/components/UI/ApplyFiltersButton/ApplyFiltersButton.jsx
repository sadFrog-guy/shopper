import React, {useContext, useEffect, useState} from 'react';
import MyButton from "../MyButton/MyButton";
import cl from './ApplyFiltersButton.module.css'
import {Context} from "../../../index";
import {fetchProducts} from "../../../service/productAPI";

const ApplyFiltersButton = () => {
    const {product} = useContext(Context)

    const applyFilters = () => {
        fetchProducts(
            product.selectedType,
            product.selectedBrand,
            product.selectedPrice || 9999,
            product.selectedCategory,
            product.page,
            product.limit
        ).then(data => {
            product.setProducts(data.data.rows)
            product.setTotalCount(data.data.count)
            product.setPage(1)
        })
    }

    return (
        <div className={cl.button_wrapper}>
            <MyButton
                style={{width: '100%'}}
                onClick={applyFilters}
            >
                apply filters
            </MyButton>
        </div>
    );
};

export default ApplyFiltersButton;