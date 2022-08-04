import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "../Button";



function NavbarMenuItems({ listOrder }) {
  const [isMove, setIsMove] = useState(false);

  return (
    <div
      className={`navbar-menu-items d-flex ${
        listOrder ? listOrder : "justify-content-around"
      } align-items-center`}
    >
      <div className="items">
        <ul
          className={`d-flex ${
            listOrder ? listOrder : "justify-content-between"
          } align-items-center`}
        >
          <Link to={"/"}>
          <li className="item">About</li>
          </Link>
          <li
            className="products-item item"
            onMouseOver={() => setIsMove(true)}
            onMouseLeave={() => setIsMove(false)}
          >
            Products{" "}
            {isMove ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            <div className="product-inner-properties">
              <span>Analyze</span>
              <span>Defense</span>
              <span className="product-inner-properties-bottom">Protect</span>
            </div>
          </li>
          <Link to={"/pricing"}>
            <li className="item">Pricing</li>
          </Link>
          <Link to={"/resources"}>
            <li className="item">Resources</li>
          </Link>
          <Link to={"/customers"}>
            <li className="item">Customers</li>
          </Link>
        </ul>
      </div>
      <div
        className={`login-signup-button d-flex ${
          listOrder ? listOrder : "justify-content-center"
        } align-items-center`}
      >
        <div className="item">
          <Link to={"/login"}>
            <Button
              text={"Login"}
              className={"btn btn-link text-dark"}
              style={{ width: "auto", height: "35px" }}
            />
          </Link>
        </div>
        <div className="item">
          <Button
            text={"Start free trial"}
            className={"btn btn-light"}
            style={{ width: "auto", height: "35px", fontWeight: 'bold' }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarMenuItems;
