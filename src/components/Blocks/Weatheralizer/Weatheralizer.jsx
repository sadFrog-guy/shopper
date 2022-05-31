import React from 'react';
import cl from './Weatheralizer.module.css'
import {Card, Carousel} from "react-bootstrap";
import cloth1 from '../../../static/cloth_1.jpg'
import cloth2 from '../../../static/cloth_2.jpg'
import cloth3 from '../../../static/cloth_3.jpg'

const Weatheralizer = () => {
    return (
        <div className={cl.wrapper}>
            <h3 className={cl.title}>Weatheralizer</h3>
        </div>
    );
};

export default Weatheralizer;