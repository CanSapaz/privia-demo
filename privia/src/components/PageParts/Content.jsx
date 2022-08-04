import React from "react";
import Analytics from "./Analytics";
import Collaborate from "./Collaborate";
import Features from "./Features";
import MoreFeature from "./MoreFeature";
import PricingGeneralFeatures from "./PricingGeneralFeatures";



function Content() {
  return (
    <div className="content-component container">
      <div className="padding-bottom-10 ">
        <Features />
      </div>
      <hr />
      <div className="padding-bottom-10 padding-top-10">
        <Analytics />
      </div>
      <div className="padding-bottom-10 ">
        <MoreFeature />
      </div>
      <div>
        <Collaborate />
      </div> 
     <div className="padding-top-10 padding-bottom-10 pricing-general-features">
       <PricingGeneralFeatures />
     </div>
    </div>
  );
}

export default Content;
