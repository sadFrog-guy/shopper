import React from 'react'
import cl from './FilterList.module.css'
import DraggableProgress from "../DraggableProgress/DraggableProgress";
import TypeFilter from "../TypeFilter/TypeFilter";
import BrandFilter from "../BrandFilter/BrandFilter";

const FilterList = () => {
    return (
        <div className={cl.wrapper}>
            <DraggableProgress int={9999}/>
            <TypeFilter/>
            <BrandFilter/>
        </div>
    );
};

export default FilterList;