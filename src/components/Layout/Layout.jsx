import moment from "moment/moment";
import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const { pathname } = useLocation()


  return (
    <div className={css.container}>
      <Sidebar />


      {pathname === "/" && <Navigate to="/dashboard" />}


      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-grey"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-white"></div>
        </div>

        <div className={css.header}>

          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>

          <div className={css.profile}>
            <img src="./profile.png" alt="person image" />
            <div className={css.details}>
              <span>Ilya Burlak</span>
              <span>IlyaBurlak@gmail.com</span>
            </div>
          </div>


        </div>


        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
