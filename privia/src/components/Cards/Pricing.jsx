import React from "react";
import Button from "../Button";
import SuccessLine from "../SuccessLine";
import DangerousIcon from '@mui/icons-material/Dangerous';




function Pricing({
  color,
  price,
  period,
  packageName,
  description,
  properties,
  textColor
}) {
  return (
    <div
      className="pricing-component d-flex flex-column"
      style={{ backgroundColor: color,color:textColor }}
    >
      <div className="head">
        <span>{price}</span> /{period}
      </div>
      <div className="description">
        <strong>{packageName}</strong>
        <p>{description}</p>
      </div>
      <hr />
      <div className="body">
        { properties && properties.map((p) => (
          <div className="mb-2">
            <SuccessLine text={p} />
          </div>
        ))}
        {!properties && <div><DangerousIcon /> Paket içeriği bulunamadı</div>   }
      </div>
      <div className="button ">
        <Button
          style={{
            borderRadius: "5px",
            height: "35px",
            fontWeight:"bold"
          }}
          text={"Start free trial"}
          className={"text-dark bg-white"}

        />
      </div>
    </div>
  );
}

export default Pricing;
