import React, {useContext, useEffect, useMemo, useState} from 'react';
import cl from './Categories.module.css'
import Title from "../Title/Title";
import {Context} from "../../../index";
import {categories} from "../../../service/consts";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";

const Categories = observer(() => {
    const {sort, product} = useContext(Context)

    const categoryOnClick = (category) => {
        product.setSelectedCategory(category)
    }

    return (
        <div className={cl.categories}>
            <Title style={{fontSize: 16, textTransform: "uppercase"}}>Categories</Title>
            <span
                className={cl.variant}
                onClick={() => categoryOnClick('')}
            >
                All
            </span>
            {categories.map((category) => {
                return (
                    <span
                        className={
                            product.selectedCategory === category
                                ? [cl.variant, cl.selected].join(' ')
                                : cl.variant
                        }
                        onClick={() => categoryOnClick(category)}
                        key={category}
                    >
                        {category}
                    </span>
                )
            })}
        </div>
    );
});

export default Categories;