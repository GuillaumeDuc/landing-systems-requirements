import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardCentral extends Component {
  tableToDiv(table) {
    return <div>{table[1]}</div>;
  }

  render() {
    return (
      <div className="dashboard-central">
        <div className="dashboard-oveverflow">Dashboard central</div>
        {this.tableToDiv(this.tableToDiv(this.props.csv))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { csv: state.side.csv };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCentral);
