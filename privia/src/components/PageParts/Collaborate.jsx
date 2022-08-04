import React from "react";
import CommentBox from "../Cards/CommentBox";
import CornerTitle from "../CornerTitle";
import SuccessLine from "../SuccessLine";
import Brands from "../Brands";



function Collaborate() {
  const imgPath = process.env.REACT_APP_COLLABORATE_IMAGE_FILE_PATH;
  const brandsImage = process.env.REACT_APP_BRANDS_IMAGE_FILE_PATH;

  return (
    <div className="collaborate-component">
      <div className="row">
        <div className="col-6">
          <div className="images">
            <img src={`${imgPath}/img1.png`} alt="" className="img1" />
            <img src={`${imgPath}/img2.png`} alt="" className="img2" />
            <img src={`${imgPath}/img3.png`} alt="" className="img3" />
            <img
              src="./img/collaborate/rectangle.png"
              alt=""
              className="rectangle"
            />
            <img src={`${imgPath}/line.png`} alt="" className="line" />
          </div>
        </div>
        <div className="col-6 ">
          <div className="d-flex">
            <CornerTitle
              miniTitle={"Collaborate"}
              titleone={"Collaborate with"}
              titletwo={"your team anytime, anywhere"}
            />
          </div>
          <p className="description">
            Self-service data analytics software that lets you create visually
            appealing data visualizations and insightful dashboards in minutes.
          </p>
          <div className="row collaborate-success-items">
            <div className="col-6 mb-2">
              <SuccessLine text={"Organize your data"} />
            </div>
            <div className="col-6">
              <SuccessLine text={"Always in sync"} />
            </div>
            <div className="col-6 mb-2">
              <SuccessLine text={"Work with any team"} />
            </div>
            <div className="col-6">
              <SuccessLine text={"Embedded analytics"} />
            </div>
            <div className="col-6">
              <SuccessLine text={"Business analytics"} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p>
            More than 1.8 million people across 50,000 companies choose Oval
          </p>
        </div>
        <div className="mt-5">
          <Brands
            brandsImage={[
              `${brandsImage}/slack.png`,
              `${brandsImage}/hubspot.png`,
              `${brandsImage}/square.png`,
              `${brandsImage}/servicetitan.png`,
              `${brandsImage}/cagniant.png`,
              `${brandsImage}/grubhub.png`,
            ]}
          />
        </div>
        <div className="d-flex justify-content-center flex-wrap padding-top-5">
          <CommentBox
            brandImage={`${imgPath}/shopify.png`}
            profileImage={`${imgPath}/comment-box-profile.png`}
            userTitle={"Product Designer"}
            username={"Harold Tyler"}
            comment={
              "I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality."
            }
          />
          <CommentBox
            brandImage={`${imgPath}/airbnb.png`}
            profileImage={`${imgPath}/comment-box-profile-image2.png`}
            userTitle={"Motion design / animator"}
            username={"Ryan Holmes"}
            comment={
              "My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more."
            }
          />
        </div>
        <div className="mt-3">
          <a href="">
            <strong>{"See all Testimonial >"} </strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Collaborate;
