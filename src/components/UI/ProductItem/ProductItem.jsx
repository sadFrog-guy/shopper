import React from 'react';
import {Link} from "react-router-dom";
import {baseURL, SINGLE_PRODUCT} from "../../../service/consts";
import {Card, Col} from "react-bootstrap";
import cl from './ProductItem.module.css'
import Price from "../Price/Price";
import {observer} from "mobx-react-lite";

const ProductItem = observer(({product}) => {
    return (
        <Card style={{ width: '16rem' }}>
            <Link to={`/products/${product.id}`}>
                <div className={cl.image}>
                    <Card.Img variant="top" src={baseURL + product.picture}/>
                </div>
            </Link>
            <div className={cl.body}>
                <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                    <h1 className={cl.title}>{product.name}</h1>
                </Link>
                <span className={cl.description}>
                {product.description.length > 42
                    ? product.description.substring(0, 42) + '...'
                    : product.description
                }
            </span>
                <Price fs={24}>
                    ${product.price}.00
                </Price>
            </div>
        </Card>
    );
});

export default ProductItem;