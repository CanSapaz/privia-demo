import React from "react";
import Brands from "../components/Brands";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TrialVersionCard from "../components/Cards/TrialVersionCard";
import CommentBox from "../components/Cards/CommentBox";
import SocialMediaCommentCard from "../components/Cards/SocialMediaCommentCard";



function CustomersPage() {
  const imgPath = process.env.REACT_APP_COLLABORATE_IMAGE_FILE_PATH;
  const brandsImage = process.env.REACT_APP_BRANDS_IMAGE_FILE_PATH;
  const profileImage =
    process.env.REACT_APP_SOCIALMEDIA_PROFILE_IMAGE_FILE_PATH;

  const commentsList = [
    {
      profileImg: `${profileImage}/img1.png`,
      name: "Lucas Bowen",
      username: "lc_bowen",
      comment:
        "@Oval I love using Buffer because of your TEAM! Oval is the gold standard for all in one annalytic software. Cheers guys! #ovalove",
      date: "5:54 PM - Oct 10, 2018",
    },
    {
      profileImg: `${profileImage}/img2.png`,
      name: "Lucas Bowen",
      username: "lc_bowen",
      comment: "New @Oval for web is 🔥 #ovalove",
      date: "5:54 PM - Oct 10, 2018",
    },
    {
      profileImg: `${profileImage}/img3.png`,
      name: "Lucas Bowen",
      username: "lc_bowen",
      comment: `Have never seen as open and as transparent a company as @Oval, loved browsing 
      your website and reading your blogs. Definitely a torch bearer in employee satisfaction,
       loved your company dashboard. learnt a lot today ! ⭐️⭐️⭐️⭐️⭐️`,
      date: "5:54 PM - Oct 10, 2018",
    },
    {
      profileImg: `${profileImage}/img4.png`,
      name: "Lucas Bowen",
      username: "lc_bowen",
      comment:
        "@Oval I love using Buffer because of your TEAM! Oval is the gold standard for all in one annalytic software. Cheers guys! #ovalove",
      date: "5:54 PM - Oct 10, 2018",
    },
    {
      profileImg: `${profileImage}/img5.png`,
      name: "Lucas Bowen",
      username: "lc_bowen",
      comment:
        "I've had @Oval pro for about 24 hours now and I honestly don't know how I functioned without it before. ❤️",
      date: "5:54 PM - Oct 10, 2018",
    },
    {
      profileImg: `${profileImage}/img6.png`,
      name: "Lucas Bowen",
      username: "lc_bowen",
      comment: `@Oval hands down is the best application I have used that has made my life 1000x easier.
        It helps me keep things in order, it allows me to have everything prepped, and allows for 
        seamless posting between all social medias. It keeps me so organized and saves so much time...`,
      date: "5:54 PM - Oct 10, 2018",
    },
    {
      profileImg: `${profileImage}/img7.png`,
      name: "Lucas Bowen",
      username: "lc_bowen",
      comment:
        "You've heard me sing your praises before but I'll gladly do it again. @Oval is my most indispensable marketing service. Thanks for all that you do!",
      date: "5:54 PM - Oct 10, 2018",
    },
  ];

  return (
    <div className="customers-page">
      <Navbar />
      <div className="header padding-bottom-10 padding-top-10">
        <Title
          titleone={"Hear what 95,000+ brands and"}
          titletwo={"businesses love about using Oval"}
        />
      </div>
      <div className="sub-div">
        <div className="comment d-flex justify-content-around padding-top-5">
          <div className="d-flex align-items-center direction-button">
            <button className="btn btn-link">
              <KeyboardArrowLeftIcon fontSize="large" />
            </button>
          </div>
          <CommentBox
            brandImage={`${imgPath}/shopify.png`}
            profileImage={`${imgPath}/comment-box-profile.png`}
            userTitle={"Product Designer"}
            username={"Harold Tyler"}
            comment={
              "I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality."
            }
            cardWith={"90%"}
          />
          <div className="d-flex align-items-center direction-button">
            <button className="btn btn-link">
              <ChevronRightIcon fontSize="large" />
            </button>
          </div>
        </div>
        <div className=" padding-top-5">
          <Brands
            brandsImage={[
              `${brandsImage}/slack.png`,
              `${brandsImage}/hubspot.png`,
              `${brandsImage}/shopify.png`,

              `${brandsImage}/grubhub.png`,
            ]}
          />
        </div>
        <div className="padding-bottom-5 padding-top-10">
          <hr />
        </div>
        <div className="social-comments d-flex justify-content-center flex-column container">
          <strong className="oval-over">#ovalover</strong>
          <Title titleone={"Hear more from people like you"} />
          <div className="padding-top-5 ">
            <SocialMediaCommentCard commentsList={commentsList} />
          </div>
          <div className="see-more-button d-flex justify-content-center mt-5">
            <button className="">
              <strong>See more #ovalover</strong>
            </button>
          </div>
        </div>
        <div className="padding-top-10">
        <TrialVersionCard/>
        </div>
      </div>
    </div>
  );
}

export default CustomersPage;
