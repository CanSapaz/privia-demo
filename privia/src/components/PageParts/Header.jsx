import React from "react";
import DataAnalyticsTable from "../ShapeTools/DataAnalyticsTable";
import Navbar from "../Navbar/Navbar";
import Title from "../Title";
import Button from "../Button";



function Header() {
  return (
    <div className="header-component">
      
          <Navbar />
       
      <div className="container">
       
        <div className="title-container">
          <Title
            titleone={"Powerful analytics tools "}
            titletwo={"for your business"}
            subtitle={
              "An awesome tools for your business, increase business revenue with enterprise-grade links built to acquire and engage customers"
            }
          />
        </div>

        <div className="d-flex justify-content-center mt-5 header-buttons">
          <Button
            className={"btn btn-primary text-white bg-primary"}
            text={"Start Free Trial"}
            style={{ width: "170px", height: "50px", margin: "0 20px 0 0" }}
          />
          <Button
            className={"btn btn-primary text-dark bg-white"}
            text={"View Live Demo"}
            style={{
              width: "170px",
              height: "50px",
              border: "none",
            }}
          />
        </div>
        <div className="data-analystic-container">
          <DataAnalyticsTable />
        </div>
      </div>
    </div>
  );
}

export default Header;
