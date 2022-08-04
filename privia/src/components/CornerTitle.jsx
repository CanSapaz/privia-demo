import React from "react";
import MiniTitle from "./MiniTitle";
import Title from "./Title";



function CornerTitle({ miniTitle, titleone, titletwo }) {
  return (
    <div style={{textAlign:"left"}}>
      <MiniTitle title={miniTitle} />
      <Title titleone={titleone} titletwo={titletwo} lineHeight={"40px"} fontSize={"30px"} />
    </div>
  );
}

export default CornerTitle;