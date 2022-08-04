import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavbarMenuItems from "./NavbarMenuItems";
import Logo from "../Logo";



function Navbar() {
  return (
    <nav className="navbar container ">
      <div className="login-logo">
        <Logo src={"./img/Privia_logo.png"} />
      </div>
      <div className="text-right w-75">
        <div className="navbar-items">
          <NavbarMenuItems />
        </div>
      </div>
      <div className="right-menu d-flex justify-content-end">
        <MoreVertIcon fontSize="large" />
        <div className="drop text-white">
          <NavbarMenuItems listOrder="flex-column" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
