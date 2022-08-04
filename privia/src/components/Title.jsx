import React from "react";



function Title({
  titleone,
  titletwo,
  width,
  subtitle,
  fontSize,
  lineHeight,
  className,
  mainTitleClass,
  subTitleClass,
}) {
  return (
    <div
      className={`title-component ${
        className ? className : "d-flex justify-content-center"
      }`}
      style={{
        fontSize: fontSize ? fontSize : "40px",
        lineHeight: lineHeight ? lineHeight : "50px",
      }}
    >
      <div>
        <div className={`main-title ${mainTitleClass}`}>{titleone}</div>
        <span className="main-title">{titletwo}</span>
        {subtitle && (
          <div className={`text-muted sub-title ${subTitleClass}`} style={{ fontSize: fontSize }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}

export default Title;
