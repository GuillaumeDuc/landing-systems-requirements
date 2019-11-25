import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class DashboardCentral extends Component {
  constructor(props) {
    super(props);
    this.tableToDiv = this.tableToDiv.bind(this);
    this.toRequirement = this.toRequirement.bind(this);
  }

  toRequirement(index) {
    this.props.history.push("/requirement/" + index);
  }

  tableToDiv(table) {
    let nTable = [];
    if (table) {
      nTable = table.map((obj, index) => {
        const listDiv = (
          <div className="ls-line">
            {Object.keys(obj).map(key => {
              return (
                <div
                  className="ls-requirements"
                  onClick={() => this.toRequirement(index)}
                >
                  <div className="ls-row-title">{key}</div>
                  <div className="ls-row">{obj[key]}</div>
                </div>
              );
            })}
          </div>
        );
        return listDiv;
      });
    }
    return nTable;
  }

  render() {
    const table = this.tableToDiv(this.props.csv);
    return <div className="dashboard-central">{table}</div>;
  }
}

const mapStateToProps = state => {
  return { csv: state.side.csv };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashboardCentral));
