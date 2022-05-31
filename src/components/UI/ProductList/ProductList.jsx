import React, {useContext, useEffect, useMemo, useState} from 'react';
import cl from './ProductList.module.css'
import {Context} from "../../../index";
import {toJS} from "mobx";
import {fetchBrands, fetchProducts, fetchTypes} from "../../../service/productAPI";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";

const ProductList = observer(() => {
    const {product, sort} = useContext(Context)
    const products = toJS(product.products) || []

    useEffect(() => {
        setTimeout(() => {
            fetchProducts(null, null, null, null, product.page, product.limit).then(data => {
                product.setProducts(data.data.rows)
                product.setTotalCount(data.data.count)
            })
        }, 0)
    }, [])

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data.data))
        fetchBrands().then(data => product.setBrands(data.data))
    }, [])

    return (
        <div className={cl.product_wrapper}>
            {products.length !== 0
                ? products.map(product => {
                    return (
                        <ProductItem product={product} key={product.id}/>
                    )
                })
                : <Loader size={64}/>
            }
        </div>
    );
});

export default ProductList;