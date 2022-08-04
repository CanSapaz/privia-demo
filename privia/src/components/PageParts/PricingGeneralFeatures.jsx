import React from "react";
import Pricing from "../Cards/Pricing";
import Title from "../Title";



function PricingGeneralFeatures() {
  return (
    <div>
      <div className="title">
        <Title
          titleone={"Choose the plan that’s right"}
          titletwo={"for your business"}
          subtitle={
            "30-day free trial, cancel any time. No credit card required."
          }
        />
        <div className="mt-4">
          Bill Monthly <span>as</span> Bill Annually
        </div>
      </div>
      <div className="prices-container d-flex justify-content-between flex-wrap mt-5">
        <Pricing
          color={"#FFEDB6"}
          period={"month"}
          price={"$23"}
          packageName={"Standart"}
          description={
            "All the basics for businesses that are just getting started."
          }
          properties={[
            "Single project use",
            "Basic dashboard",
            "All components included",
          ]}
        />

        <Pricing
          color={"#D1E8FF"}
          period={"month"}
          price={"$23"}
          packageName={"Standart"}
          description={
            "All the basics for businesses that are just getting started."
          }
          properties={[
            "Single project use",
            "Basic dashboard",
            "All components included",
          ]}
        />

        <Pricing
          color={"#5B45E0"}
          period={"month"}
          price={"$23"}
          packageName={"Standart"}
          description={
            "All the basics for businesses that are just getting started."
          }
          properties={[
            "Single project use",
            "Basic dashboard",
            "All components included",
          ]}
          textColor="#fff"
        />
      </div>
    </div>
  );
}

export default PricingGeneralFeatures;
