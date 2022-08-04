import React from "react";



function MiniTitle({ title,hrWidth }) {
  return (
    <div className="d-flex align-items-center">
      <hr
        style={{
          border: `1px solid "#8E8C95"`,
          width: hrWidth ? hrWidth : "15%",
        }}
      />
      <span style={{ marginLeft: "2rem", color: "#8E8C95" }}>{title}</span>
    </div>
  );
}

export default MiniTitle;
