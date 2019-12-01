import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Relation extends Component {
  constructor(props) {
    super(props);
    this.tableToDiv = this.tableToDiv.bind(this);
  }

  getPicture(elem) {
    return "";
  }

  tableToDiv(table) {
    let nTable = [];
    if (table) {
      nTable = table.map((obj, index) => {
        const listDiv = (
          <div className="ls-relation">
            <div className="ls-line">
              {Object.keys(obj).map(key => {
                let divElement;
                if (key === "x" || key === "y") {
                  /*divElement = (
                  <iframe
                    id="iframeId"
                    src={obj[key]}
                    style={{ display: "none" }}
                  ></iframe>
                );*/
                  divElement = (
                    <a
                      href={obj[key]}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {obj[key]}
                    </a>
                  );
                } else {
                  divElement = obj[key];
                }
                return (
                  <div className="ls-requirements">
                    <div className="ls-row-title">{key}</div>
                    <div className="ls-row">{divElement}</div>
                  </div>
                );
              })}
            </div>
            {this.getPicture(obj.relation)}
          </div>
        );
        return listDiv;
      });
    }
    return nTable;
  }

  render() {
    const table = this.tableToDiv(this.props.relation);
    return <div className="dashboard-relation">{table}</div>;
  }
}

const mapStateToProps = state => {
  return { relation: state.side.relation };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Relation));
