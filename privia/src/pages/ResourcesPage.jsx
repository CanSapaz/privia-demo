import React from "react";
import Title from "../components/Title";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/Navbar/Navbar";
import DescriptionIcon from "@mui/icons-material/Description";
import Article from "../components/Article";
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import ConstructionIcon from '@mui/icons-material/Construction';
import TrialVersionCard from "../components/Cards/TrialVersionCard";
import MiniCard from "../components/Cards/MiniCard";



function ResourcesPage() {
  const imgPath = process.env.REACT_APP_RESOURCES_IMAGE_FILE_PATH;

  return (
    <div className="resources-page">
      <Navbar />
      <div className="resources-title padding-top-10 mb-5">
        <Title
          titleone={"Resources to help you grow"}
          titletwo={"as a creative entrepreneur."}
        />
      </div>
      <div className="d-flex justify-content-center padding-bottom-5">
        <div className="search-container">
          <input type="text" placeholder="Search articles…" />
          <span className="icon">
            <SearchIcon fontSize="large" />
          </span>
        </div>
      </div>

      <div className="content padding-top-5">
        <div className="cards">
          <div className="items d-flex justify-content-around flex-wrap">
            <MiniCard
              title={"Articles"}
              content={
                "Our best tips for launching and growing your creative business online."
              }
              buttonText={"Learn More"}
              icon={<DescriptionIcon />}
            />
            <MiniCard
              title={"Guides"}
              content={
                "Our best tips for launching and growing your creative business online."
              }
              buttonText={"Learn More"}
              icon={<DriveFileMoveIcon />}
            />
            <MiniCard
              title={"Tools"}
              content={
                "Our best tips for launching and growing your creative business online."
              }
              buttonText={"Learn More"}
              icon={<ConstructionIcon />}
            />
          </div>
        </div>

        <div className="articles padding-top-10">
          <div className="title padding-bottom-5">
            <Title
              titleone={"Most insighful articles"}
              titletwo={"for start off"}
            />
          </div>
          <div className="d-flex justify-content-center mt-5 padding-bottom-5">
            <div>
              <Article
                title={"Brand Secrets for Standing Out in a Crowded World"}
                content={`Aliquam ut justo fringilla, porta lectus ac, aliquam elit.
               Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…`}
                date={"14 April 2022"}
                fieldName={"Entrepreneurship"}
                src={`${imgPath}/article1.png`}
              />

              <Article
                title={"Brand Secrets for Standing Out in a Crowded World"}
                content={`Aliquam ut justo fringilla, porta lectus ac, aliquam elit.
               Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…`}
                date={"14 April 2022"}
                fieldName={"Entrepreneurship"}
                src={`${imgPath}/article2.png`}
              />

              <Article
                title={"Brand Secrets for Standing Out in a Crowded World"}
                content={`Aliquam ut justo fringilla, porta lectus ac, aliquam elit.
               Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…`}
                date={"14 April 2022"}
                fieldName={"Entrepreneurship"}
                src={`${imgPath}/article3.png`}
              />

              <Article
                title={"Brand Secrets for Standing Out in a Crowded World"}
                content={`Aliquam ut justo fringilla, porta lectus ac, aliquam elit.
               Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…`}
                date={"14 April 2022"}
                fieldName={"Entrepreneurship"}
                src={`${imgPath}/article4.png`}
              />

              <Article
                title={"Brand Secrets for Standing Out in a Crowded World"}
                content={`Aliquam ut justo fringilla, porta lectus ac, aliquam elit.
               Sed posuere mi vel porta aliquam. Nullam in felis pretium, faucibus nunc quis, semper purus.  Aliquam sit…`}
                date={"14 April 2022"}
                fieldName={"Entrepreneurship"}
                src={`${imgPath}/article5.png`}
              />

              <a href="#">
                <strong>{"See more Articles >"}</strong>
              </a>
            </div>
          </div>
          <div>
            <TrialVersionCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
