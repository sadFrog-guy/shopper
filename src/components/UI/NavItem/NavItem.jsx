import React from 'react';
import {Link, useLocation} from "react-router-dom";
import cl from './NavItem.module.css'

const NavItem = ({link, element}) => {
    const location = useLocation();

    return (
        <Link to={link}>
            <span
                className={cl.changeColor}
                style={location.pathname === link ? {color: '#7971ea'} : {}}
            >
                {element}
            </span>
        </Link>
    );
};

export default NavItem;