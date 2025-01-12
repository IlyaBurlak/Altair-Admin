import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={css.container}>
            <img src="./logo.png" alt="logo" className={css.logo} />

            <div className={css.menu}>
                <NavLink
                    to="dashboard"
                    className={({ isActive }) => `${css.item} ${isActive ? css.active : ''}`}
                    title={"Dashboard"}
                >
                    <MdSpaceDashboard size={30} />
                </NavLink>

                <NavLink
                    to="calendar"
                    className={({ isActive }) => `${css.item} ${isActive ? css.active : ''}`}
                    title="Calendar"
                >
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink
                    to="board"
                    className={({ isActive }) => `${css.item} ${isActive ? css.active : ''}`}
                    title="Trello Board"
                >
                    <FaTasks size={30} />
                </NavLink>

                <NavLink
                    to="users"
                    className={({ isActive }) => `${css.item} ${isActive ? css.active : ''}`}
                    title="Users"
                >
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;
