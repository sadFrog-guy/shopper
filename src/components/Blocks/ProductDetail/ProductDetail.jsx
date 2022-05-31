import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Context} from "../../../index";
import {toJS} from "mobx";
import {fetchOneBrand, fetchOneProduct, fetchOneType} from "../../../service/productAPI";
import cl from './ProductDetail.module.css'
import {observer} from "mobx-react-lite";
import {baseURL, sizes} from "../../../service/consts";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import MyRadio from "../../UI/MyRadio/MyRadio";
import Counter from "../../UI/Counter/Counter";
import MyButton from "../../UI/MyButton/MyButton";
import ImageWrapper from "../../UI/ImageWrapper/ImageWrapper";
import Price from "../../UI/Price/Price";
import {css} from "@emotion/react";

const ProductDetail = observer(() => {
    const {productId} = useParams()

    const [dataIsCollected, setCollectedData] = useState(false)

    const {product, basket} = useContext(Context)
    const singleProduct = toJS(product.product)
    const productType = toJS(product.selectedType)
    const productBrand = toJS(product.selectedBrand)

    useEffect(() => {
        fetchOneProduct(productId).then(data => {
            product.setProduct(data.data)
        })

        if(singleProduct.length !== 0) {
            fetchOneType(singleProduct.typeId).then(data => {
                product.setSelectedType(data.data)
            })
            fetchOneBrand(singleProduct.brandId).then(data => {
                product.setSelectedBrand(data.data)
            })
        }
    }, [])

    useEffect(() => {
        if(singleProduct.length !== 0) {
            selectProductId(singleProduct.id)
        }
    }, [singleProduct])

    useEffect(() => {
        if(basket.selectedProductId && basket.selectedAmount && basket.selectedSize) {
            setCollectedData(true)
        }
    }, [basket.selectedProductId, basket.selectedAmount, basket.selectedSize])

    const selectProductId = (pid) => {
        basket.setSelectedProductId(pid)
    }

    const selectAmount = (amount) => {
        basket.setSelectedAmount(amount)
    }

    const selectSize = (e) => {
        basket.setSelectedSize(e.target.value)
    }

    const buttonOnClick = () => {
        basket.setProductsInBasket({
            productId: basket.selectedProductId,
            amount: basket.selectedAmount,
            size: basket.selectedSize,
        })
    }

    return (
        <div className={cl.wrapper}>
            <ImageWrapper>
                <img className={cl.image} src={baseURL + singleProduct.picture} alt=""/>
            </ImageWrapper>
            <div className={cl.infoBlock}>
                <Title style={{fontSize: 30, marginBottom: 5}}>
                    {singleProduct.name}
                    <span className={cl.type}>{productType.type}</span>
                </Title>
                <div className={cl.otherInfo}>
                    <span className={cl.infoSpan}>
                        Brand: {productBrand.brand}
                    </span>
                    <span className={cl.infoSpan}>
                        Color:
                        <div
                            className={cl.color}
                            style={{backgroundColor: singleProduct.color}}
                        />
                    </span>
                </div>
                <Text>
                    <span className={cl.description}>
                        {singleProduct.description}
                    </span>
                </Text>
                <Price mt={8}>
                    ${singleProduct.price}.00
                </Price>
                <div className={cl.radios}>
                    {sizes.map(size => {
                        return (
                            <MyRadio
                                color="#7971ea"
                                name="size"
                                value={size}
                                label={size}
                                style={{marginRight: '10px'}}
                                key={size}
                                onChange={(e) => selectSize(e)}
                            />
                        )
                    })}
                </div>
                <div className={cl.counterAndButton}>
                    <Counter setter={selectAmount}/>
                    <MyButton
                        style={{marginLeft: 10, marginBottom: 0}}
                        disabled={!dataIsCollected}
                        onClick={buttonOnClick}
                    >
                        add to cart
                    </MyButton>
                </div>
            </div>
        </div>
    );
});

export default ProductDetail;