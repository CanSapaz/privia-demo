import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CornerTitle from "../CornerTitle";
import DataAnalyticsCard from "../ShapeTools/DataAnalyticsCard";



function Analytics() {
  return (
    <div className="analytics-component">
      <div className="row">
        <div className="col-6">
          <DataAnalyticsCard />
        </div>
        <div className="col-6 d-flex flex-column">
          <div className="d-flex">
            <CornerTitle
              miniTitle={"Analytics"}
              titleone={" Analyze your data"}
              titletwo={"with our analyze tools"}
            />
          </div>
          <div className="analytics-body">
            <p className="text-left">
              Self-service data analytics software that lets you create visually
              appealing data visualizations and insightful dashboards in
              minutes.
            </p>
            <div className="row">
              <div className="col-1">
                <ContentCopyIcon />
              </div>
              <div className="col-11">
                <strong>Powerful dashboard</strong>
                <p>
                Combine multiple reports into a single beautiful dashboard.
                </p>
              </div>
              <div className="col-1">
                <CachedIcon />
              </div>
              <div className="col-11">
                <strong>Powerful dashboard</strong>
                <p>
                Don’t worry about the data, always be synchronized
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
