import React from "react";



function Button({ className, text,style}) {
  return (
    <a
      className={`${className} d-flex justify-content-center align-items-center button-component`}
      style={style}
    >
      {text}
    </a>
  );
}

export default Button;
