import React, {useContext, useEffect, useState} from 'react';
import cl from "./AdminMenu.module.css"
import {FaUserAlt} from "react-icons/fa";
import MyModal from "../MyModal/MyModal";
import Title from "../Title/Title";
import MyInput from "../MyInput/MyInput";
import MyTextarea from "../MyTextarea/MyTextarea";
import MySelect2 from "../MySelect2/MySelect2";
import {Context} from "../../../index";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import AdminModal from "../AdminModal/AdminModal";

const AdminMenu = observer(() => {
    const [active, setActive] = useState(false)

    return (
        <>
            <span
                className={cl.admin}
                onClick={() => {
                    setActive(true)
                }}
            >
                    <FaUserAlt size={22}/>
            </span>
            {active &&
                <AdminModal
                    setActive={setActive}
                />
            }
        </>
    );
});

export default AdminMenu;