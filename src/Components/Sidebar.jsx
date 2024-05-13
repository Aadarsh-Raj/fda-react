import React from "react";
import { Link } from "react-router-dom";
import "./Style/sidebar.css";
import HamburgerIcon from "./HamburgerIcon";
import { MyFunctions } from "../Store/store";
const Sidebar = () => {
  const myCtx = MyFunctions();
  return (
    <>
      <aside className="sidebar">
        <HamburgerIcon
          right={"0.6rem"}
          top={"0.6rem"}
          onClick={myCtx.toggleSidebar}
        />
        <nav className="navbar">
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/crypto"}>Crypto Currency</Link>
          </p>
          <p>
            <Link to={"/population"}>Population Graph</Link>
          </p>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
