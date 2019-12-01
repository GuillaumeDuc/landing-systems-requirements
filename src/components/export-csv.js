import React, { Component } from "react";
import { CSVLink } from "react-csv";

class ExportCsv extends Component {
  render() {
    return (
      <div className="container">
        <div className="csv-dl-link">
          <CSVLink data={this.props.table} separator={";"}>
            Download {this.props.name} CSV
          </CSVLink>
        </div>
      </div>
    );
  }
}

export default ExportCsv;
