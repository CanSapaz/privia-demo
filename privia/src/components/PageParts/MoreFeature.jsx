import React from "react";
import CornerTitle from "../CornerTitle";
import CombinedClipart from "../ShapeTools/CombinedClipart";



function MoreFeature() {

  const imgPath = process.env.REACT_APP_FEATURES_IMAGE_FILE_PATH

  return (
    <div className="more-feature">
      <div className="d-flex title">
        <CornerTitle
          miniTitle={"More Features"}
          titleone={" We're more than an analytic tool."}
          titletwo={"Explore our features, and satisfy your customers"}
        />
      </div>
      <div className="row">
        <div className="col-4 d-flex flex-column flex-wrap">
          <div className="mb-4">
            <div className="icon">
              <CombinedClipart
                exteriorPicture={"./img/featuresImg/base-blue.png"}
                interiorPicture={"./img/featuresImg/cloud-upload.png"}
              />
            </div>
            <div className="d-flex justify-content-left sub-title">
              <strong>Easy customization</strong>
            </div>
            <div className="description">
              <p className="description">
                No matter what kind of home you have to share, you can increase
                your earnings.
              </p>
            </div>
          </div>
          <div>
            <div className="icon">
              <CombinedClipart
                exteriorPicture={"./img/featuresImg/Base.png"}
                interiorPicture={"./img/featuresImg/cloud-upload.png"}
              />
            </div>
            <div className="d-flex justify-content-left sub-title">
              <strong>Easy customization</strong>
            </div>
            <div className="description">
              <p className="description">
                No matter what kind of home you have to share, you can increase
                your earnings.
              </p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="mb-4">
            <div className="icon">
              <CombinedClipart
                exteriorPicture={"./img/featuresImg/base-blue.png"}
                interiorPicture={`${imgPath}/cloud-upload.png`}
              />
            </div>
            <div className="d-flex justify-content-left sub-title">
              <strong>Easy customization</strong>
            </div>
            <div className="description">
              <p className="description">
                No matter what kind of home you have to share, you can increase
                your earnings.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <div className="icon">
              <CombinedClipart
                exteriorPicture={"./img/featuresImg/Base.png"}
                interiorPicture={`${imgPath}/security.png`}
              />
            </div>
            <div className="d-flex justify-content-left sub-title">
              <strong>Easy customization</strong>
            </div>
            <div className="description">
              <p className="description">
                No matter what kind of home you have to share, you can increase
                your earnings.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="mb-4">
            <div className="icon">
              <CombinedClipart
                exteriorPicture={"./img/featuresImg/base-blue.png"}
                interiorPicture={"./img/featuresImg/cloud-upload.png"}
              />
            </div>
            <div className="d-flex justify-content-left sub-title">
              <strong>Easy customization</strong>
            </div>
            <div className="description">
              <p className="description">
                No matter what kind of home you have to share, you can increase
                your earnings.
              </p>
            </div>
          </div>
          <div>
            <div className="icon">
              <CombinedClipart
                exteriorPicture={"./img/featuresImg/Base.png"}
                interiorPicture={"./img/featuresImg/cloud-upload.png"}
              />
            </div>
            <div className="d-flex justify-content-left sub-title">
              <strong>Easy customization</strong>
            </div>
            <div className="description">
              <p className="description">
                No matter what kind of home you have to share, you can increase
                your earnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreFeature;
