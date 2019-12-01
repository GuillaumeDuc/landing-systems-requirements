import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { connect } from "react-redux";
import { setCSV } from "../actions/side";

class OpenCsv extends Component {
  constructor(props) {
    super(props);
    this.handleForce = this.handleForce.bind(this);
  }

  handleForce = data => this.props.setCSV(data);

  papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

  render() {
    return (
      <div className="container">
        <CSVReader
          cssClass="react-csv-input"
          label="Select Requirements"
          onFileLoaded={this.handleForce}
          parserOptions={this.papaparseOptions}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCSV: csv => {
      dispatch(setCSV(csv));
    }
  };
};

export default connect(null, mapDispatchToProps)(OpenCsv);
