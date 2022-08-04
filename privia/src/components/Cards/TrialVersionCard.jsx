
import React from "react";
import Title from "../Title";



function TrialVersionCard() {
  return (
    <div className="trial-version-component d-flex justify-content-center align-items-center flow-wrap">
      <div className="row  align-items-center">
        <div className="col-6 text-left">
          <Title
            titleone={"Your next successful business starts now "}
            fontSize={"40px"}
            lineHeight="40px"
            mainTitleClass={"text-align-left"}
          />
          <p className="text-align-left mt-4">
          Join with more than 1.8 million people across 50,000 companies. 30-day free trial, cancel any time. No credit card required. 
          </p>
        </div>
        <div className="col-6 d-flex justify-content-around ">
            <button className="btn btn-primary" style={{backgroundColor:"#5B45E0"}}><strong>Start free trial</strong> </button>
            <button className="btn btn-primary" style={{backgroundColor:"#fff",color:"#5B45E0"}}><strong>View live demo</strong> </button>
        </div>
      </div>
    </div>
  );
}

export default TrialVersionCard;
