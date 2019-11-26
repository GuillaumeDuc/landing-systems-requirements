import React, { Component } from "react";

import DashboardCentral from "../dashboard-central/dashboard-central";
import MovingPane from "./moving-pane";
import ChangeMode from "../components/change-mode";
import OpenCsv from "../components/open-csv";
import OpenRelation from "../components/open-relation";

class DashboardSide extends Component {
  render() {
    return (
      <div className="dashboard-side-panel">
        <div className="dashboard-side dashboard-left">
          <MovingPane content={<OpenCsv />} />
          <MovingPane content={<OpenRelation />} />
        </div>
        <DashboardCentral />
        <div className="dashboard-side dashboard-right">
          <MovingPane content={<ChangeMode />} hidden={true} />
        </div>
      </div>
    );
  }
}

export default DashboardSide;
