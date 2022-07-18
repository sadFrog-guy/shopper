import React, {useState} from 'react';
import cl from "./AdminMenu.module.css"
import {FaUserAlt} from "react-icons/fa";
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