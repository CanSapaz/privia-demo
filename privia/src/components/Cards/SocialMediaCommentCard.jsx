import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import Masonry from "react-masonry-css";



function SocialMediaCommentCard({ commentsList,perlinecard }) {

    const breakpointColumnsObj = {
        default: perlinecard ? perlinecard : 2,
        1000: 1,
      };

  return (
    <Masonry
       breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {commentsList &&
        commentsList.map((c) => (
          <div className="d-flex flex-column social-media-comment-card">
            <div className="d-flex justify-content-between align-items-center w-100 mb-4">
              <div className="d-flex justify-content-left ">
                <div className="profile-image">
                  <img
                    src={c.profileImg}
                    alt=""
                    width={"48px"}
                    height={"48px"}
                  />
                </div>
                <div className="d-flex flex-column username-name">
                  <span>
                    <strong>{c.name}</strong>
                  </span>
                  <span className="text-muted username">{`@${c.username}`}</span>
                </div>
              </div>
              <div className="social-media-logo">
                <TwitterIcon style={{ color: "#0D99FF" }} />
              </div>
            </div>
            <div className="text-align-left mb-4">{c.comment}</div>
            <div className="text-align-left text-muted">
              <small>{c.date}</small>
            </div>
          </div>
        ))}
    </Masonry>
  );
}

export default SocialMediaCommentCard;
