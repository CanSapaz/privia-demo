import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";



function DataAnalyticsCard({ style }) {
  return (
    <div className="data-analytics-card-component">
      <div className="card" style={style}>
        <div className="d-flex justify-content-start">
          <div className="header">
            <h6>
              <strong>Data Analytics</strong>
            </h6>
            <span>Mar 21 - Apr 01</span>
          </div>
        </div>
        <div className="graph-container">
          <img src="./img/analytics/Oval.png" alt="" width={"165px"} />
          <div className="blue-oval">
            <img src="./img/analytics/blue-oval.png" alt="" />
            <div className="white-oval">
              <img src="./img/analytics/oval-white.png" alt="" />
              <small>
                23.45%
                <div>Videos</div>
              </small>
            </div>
          </div>

          <div className="white-oval-2">
            <img src="./img/analytics/oval-white.png" alt="" />
            <small>
              23.45%
              <div>Videos</div>
            </small>
          </div>
        </div>
      </div>

      <div className="mini-card d-flex flex-column ">
        <div className="head">
          <h4>86.5%</h4>
        </div>
        <div className="content text-muted">
          <small>Engagement</small>
        </div>
        <div className="score">
          <div className=" d-flex justify-content-center align-items-center mt-3 text-success">
            <ArrowUpwardIcon fontSize={"smaller"} color={"success"} />
            <strong>26.83%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalyticsCard;
