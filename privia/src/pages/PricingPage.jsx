import React from "react";
import Button from "../components/Button";
import StatementCard from "../components/Cards/StatementCard";
import CornerTitle from "../components/CornerTitle";
import Navbar from "../components/Navbar/Navbar";
import PricingGeneralFeatures from "../components/PageParts/PricingGeneralFeatures";
import Title from "../components/Title";



function PricingPage() {
  return (
    <div className=" padding-bottom-10 pricing-page">
      <Navbar />
      <div className="container">
        <div className="padding-top-10 padding-bottom-10">
          <PricingGeneralFeatures />
        </div>
        <div className="d-flex pricing-page-title">
          <CornerTitle
            miniTitle={"Not sure what to choose? "}
            titleone={"Let us help you to decide "}
            titletwo={"the right plan for you"}
          />
        </div>
        <div className="d-flex justify-content-between flex-wrap statement-card-container">
          <StatementCard
            title={"Standart is for you if.."}
            description={`
            Quisque aliquam porta bibendum. Donec ornare massa ligula, 
            nec venenatis ipsum aliquam non.Ut varius enim nec tellus 
            interdum ultrices. Vivamus sodales finibus eros, sed varius 
            mauris varius a. Vestibulum nec ligula bibendum lorem ornare 
            tempus vel quis turpis. Cras risus tortor, vulputate tristique 
            ipsum non, auctor sollicitudin ipsum.`}
            hrColor={"#FFEDB6"}
          />

          <StatementCard
            title={"Essentials is for you if..."}
            description={`Curabitur sed leo elementum, elementum turpis ac, venenatis ex. Aliquam dictum sagittis interdum.
            Praesent ac vestibulum felis.Phasellus eu viverra ante. Morbi dui est, dictum non justo facilisis,
            convallis iaculis sapien. Maecenas non enim sit amet augue tincidunt ullamcorper.
            Sed varius pharetra odio at luctus.`}
            hrColor={"#D1E8FF"}
          />

          <StatementCard
            title={"Premium is for you if..."}
            description={`Aliquam ut justo fringilla, porta lectus ac, aliquam elit. 
            Sed posuere mi vel porta aliquam. Nullam in felis pretium,
             faucibus nunc quis, semper purus.Aliquam sit amet urna sed 
             nulla fermentum finibus. Nulla ac nulla placerat, sodales est nec, 
             pellentesque tortor. Etiam vitae lectus non mauris blandit elementum. 
             Nam ut metus euismod, consectetur nibh non, mattis erat.`}
            hrColor={"#5B45E0"}
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className="text-center">
            <span>Have any questions? Want some help getting started?</span>
            <div className="d-flex justify-content-center mt-5">
              <Title
                titleone={"Don’t be stranger, we always "}
                titletwo="love to hear from you"
              />
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Button
                text={"Contact Us"}
                className="btn"
                style={{
                  backgroundColor: "#5B45E0",
                  width: "170px",
                  height: "60px",
                  color: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
