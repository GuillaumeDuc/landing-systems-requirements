import React, { Component } from "react";
import { connect } from "react-redux";

import DashboardCentral from "../dashboard-central/dashboard-central";
import MovingPane from "./moving-pane";
import ChangeMode from "../components/change-mode";
import OpenCsv from "../components/open-csv";
import OpenRelation from "../components/open-relation";
import ExportCsv from "../components/export-csv";

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
          <MovingPane
            content={<ExportCsv name="Requirements" table={this.props.csv} />}
          />
          <MovingPane
            content={<ExportCsv name="Relations" table={this.props.relation} />}
          />
          <MovingPane content={<ChangeMode />} hidden={true} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { csv: state.side.csv, relation: state.side.relation };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSide);
