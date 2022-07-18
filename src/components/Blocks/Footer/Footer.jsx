import React, {useContext} from 'react';
import Title from "../../UI/Title/Title";
import HoverLink from "../../UI/HoverLink/HoverLink";
import cl from './Footer.module.css'
import Column from "../../UI/Column/Column";
import Text from "../../UI/Text/Text";
import {baseURL, BASKET, HOME, PRODUCTS, SINGLE_PRODUCT} from "../../../service/consts";
import {AiFillPhone} from "react-icons/ai";
import {MdLocationPin} from "react-icons/md";
import {GrMail} from "react-icons/gr";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {toJS} from "mobx";
import {Link} from "react-router-dom";

const Footer = observer(() => {
    const {product} = useContext(Context)
    const lastProduct = toJS(product.getLast)

    return (
        <div className={cl.wrapper}>
            <Column>
                <Title style={{marginBottom: 30}}>Navigations</Title>
                <HoverLink path={HOME}>Home</HoverLink>
                <HoverLink path={PRODUCTS}>Shop</HoverLink>
                <HoverLink path={BASKET}>Basket</HoverLink>
            </Column>
            <Column>
                <Title style={{marginBottom: 30}}>Promo</Title>
                <div className={cl.recent_product}>
                    <Link to={SINGLE_PRODUCT(lastProduct.id)}>
                        <div className={cl.image_wrapper}>
                            <img src={baseURL + lastProduct.picture} alt="" className={cl.image}/>
                        </div>
                    </Link>
                    <Title>{lastProduct.name}</Title>
                    <Text>
                        {lastProduct.createdAt && lastProduct.createdAt.substring(0, 10)}
                    </Text>
                </div>
            </Column>
            <Column>
                <Title style={{marginBottom: 30}}>Contact Info</Title>
                <div className={cl.info}>
                    <MdLocationPin size={18} color="#7971ea"/>
                    <span className={cl.info_text}>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </div>
                <div className={cl.info}>
                    <AiFillPhone size={18} color="#7971ea"/>
                    <span className={cl.info_text}>+2 392 3929 210</span>
                </div>
                <div className={cl.info}>
                    <GrMail size={18} color="#7971ea"/>
                    <span className={cl.info_text}>emailaddress@domain.com</span>
                </div>
            </Column>
        </div>
    );
});

export default Footer;