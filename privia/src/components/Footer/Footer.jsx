import React from "react";
import FooterBaseTemplate from "./FooterBaseTemplate";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



function Footer() {
  return (
    <footer className="footer-component d-flex justify-content-between flow-wrap container padding-top-5 padding-bottom-5">
      <div className="social-medias d-flex flex-column">
        <div className="media-icon d-flex flow-wrap">
          <TwitterIcon style={{ color: "#1A8CD8", marginRight: "10px" }} />
          <FacebookIcon style={{ color: "#3B5998", marginRight: "10px" }} />
          <LinkedInIcon style={{ color: "#0976B4" }} />
        </div>
        <span className="typography">© 2019 Oval</span>
      </div>
      <div className="product">
        <FooterBaseTemplate
          title={"Product"}
          subtitles={[
            "Landingpage",
            "Features",
            "Documentation",
            "Referral Program",
            "Pricing",
          ]}
        />
      </div>
      <div className="services">
        <FooterBaseTemplate
          title={"Services"}
          subtitles={[
            "Landingpage",
            "Features",
            "Documentation",
            "Referral Program",
            "Pricing",
          ]}
        />
      </div>
      <div className="services">
        <FooterBaseTemplate
          title={"Company"}
          subtitles={["About", "Terms", "Privacy", "Policy", "Careers"]}
        />
      </div>
      <div className="services">
        <FooterBaseTemplate
          title={"More"}
          subtitles={["Documentation", "License", "Changelog"]}
        />
      </div>
    </footer>
  );
}

export default Footer;
