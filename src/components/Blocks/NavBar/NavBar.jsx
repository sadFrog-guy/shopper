import cl from './NavBar.module.css'
import Logo from "../../UI/Logo/Logo";
import {BsFillBasket2Fill, BsFillHouseFill, BsShopWindow} from "react-icons/bs";
import NavList from "../../UI/NavList/NavList";
import NavItem from "../../UI/NavItem/NavItem";
import {BASKET, HOME, PRODUCTS} from "../../../service/consts";
import AdminMenu from "../../UI/AdminMenu/AdminMenu";

const NavBar = () => {

    return (
        <div className={cl.wrapper}>
            <Logo/>
            <NavList>
                <NavItem
                    link={HOME}
                    element={<BsFillHouseFill size={22} style={{marginRight: 10}}/>}
                />
                <NavItem
                    link={PRODUCTS}
                    element={<BsShopWindow size={22} style={{marginRight: 10}}/>}
                />
                <NavItem
                    link={BASKET}
                    element={<BsFillBasket2Fill size={22} style={{marginRight: 10}}/>}
                />
                <AdminMenu/>
            </NavList>
        </div>
    );
};

export default NavBar;