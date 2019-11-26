import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { connect } from "react-redux";
import { setRelation } from "../actions/side";

class OpenRelation extends Component {
  constructor(props) {
    super(props);
    this.handleForce = this.handleForce.bind(this);
  }

  handleForce = data => this.props.setRelation(data);

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
          label="Select Relation"
          onFileLoaded={this.handleForce}
          parserOptions={this.papaparseOptions}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRelation: relation => {
      dispatch(setRelation(relation));
    }
  };
};

export default connect(null, mapDispatchToProps)(OpenRelation);
