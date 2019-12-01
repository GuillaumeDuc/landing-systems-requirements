import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Dropdown,
  DropdownMenuItemType
} from "office-ui-fabric-react/lib-commonjs/Dropdown";
import { DefaultButton } from "office-ui-fabric-react/lib-commonjs/Button";
import { setRelation } from "../actions/side";

class RequirementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "",
      selectedRelation: ""
    };
    this.getRequirement = this.getRequirement.bind(this);
    this._onChangeType = this._onChangeType.bind(this);
    this._onChangeRelation = this._onChangeRelation.bind(this);
    this.makeRelation = this.makeRelation.bind(this);
  }

  componentDidMount() {
    const table = this.props.csv;
    const relationReq = this.props.relation;
    const currentReq = this.getRequirementFromTableIndex(
      table,
      this.props.match.params.data
    );
    let nReq = {};
    relationReq.map(obj => {
      if (obj.x === currentReq.link) {
        nReq = { relation: obj.relation, link: obj.y };
      } else if (obj.y === currentReq.link) {
        nReq = { relation: obj.relation, link: obj.x };
      }
      return nReq;
    });

    const secondReq = this.getRequirementFromTableLink(table, nReq.link);

    if (nReq.relation) {
      this.setState({
        selectedType: { key: nReq.relation },
        selectedRelation: { key: secondReq.requirements }
      });
    }
  }

  getRequirement() {
    const indexData = this.props.match.params.data;
    const table = this.props.csv;
    let nRequirement = [];
    if (table) {
      table.map((obj, index) => {
        if (parseInt(indexData) === index) {
          nRequirement.push(
            Object.keys(obj).map(key => {
              return (
                <div className="ls-line">
                  <div className="ls-requirements">
                    <div className="ls-row-title">{key}</div>
                    <div className="ls-row">
                      {key === "link" ? (
                        <a
                          href={obj[key]}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {obj[key]}
                        </a>
                      ) : (
                        obj[key]
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          );
        }
        return nRequirement;
      });
    }
    return nRequirement;
  }

  getRequirementFromTableText(table, requirement) {
    let nRequirement = {};
    table.map((obj, index) => {
      if (requirement.text === obj.requirements) {
        return (nRequirement = obj);
      }
      return nRequirement;
    });
    return nRequirement;
  }

  getRequirementFromTableIndex(table, indexData) {
    let nRequirement = {};
    table.map((obj, index) => {
      if (parseInt(indexData) === index) {
        return (nRequirement = obj);
      }
      return nRequirement;
    });
    return nRequirement;
  }

  getRequirementFromTableLink(table, link) {
    let nRequirement = {};
    table.map((obj, index) => {
      if (link === obj.link) {
        return (nRequirement = obj);
      }
      return nRequirement;
    });
    return nRequirement;
  }

  makeRelation() {
    const table = this.props.csv;
    const relation = this.props.relation;
    const currentReq = this.getRequirementFromTableIndex(
      table,
      this.props.match.params.data
    );
    const relationReq = this.getRequirementFromTableText(
      table,
      this.state.selectedRelation
    );
    relation.push({
      x: relationReq.link,
      y: currentReq.link,
      relation: this.state.selectedType.text
    });
    this.props.setRelation(relation);
    this.props.history.push("/other");
  }

  getDropDownFromTable() {
    const table = this.props.csv;
    let nRequirement = [
      {
        key: "requirements",
        text: "Requirements",
        itemType: DropdownMenuItemType.Header
      }
    ];
    if (table) {
      table.map((obj, index) => {
        return nRequirement.push({
          key: obj.requirements,
          text: obj.requirements
        });
      });
    }
    return nRequirement;
  }

  _onChangeType = (event, item) => {
    this.setState({ selectedType: item });
  };

  _onChangeRelation = (event, item) => {
    this.setState({ selectedRelation: item });
  };

  render() {
    const dropDownTable = this.getDropDownFromTable();
    const requirement = this.getRequirement();
    const { selectedRelation, selectedType } = this.state;
    return (
      <div className="dashboard-central">
        <div className="ls-requirement-focus">{requirement}</div>
        <Dropdown
          label="Select type of relation"
          selectedKey={selectedType ? selectedType.key : undefined}
          onChange={this._onChangeType}
          placeholder="Select type of relation"
          options={[
            {
              key: "disjoins",
              text: "Disjoins"
            },
            { key: "belongs", text: "Belongs" },
            { key: "repeats", text: "Repeats" },
            { key: "contradicts", text: "Contradicts" },
            { key: "extends", text: "Extends" },
            { key: "excepts", text: "Excepts" },
            { key: "constraints", text: "Constraints" },
            { key: "characterizes", text: "characterizes" }
          ]}
          styles={{ dropdown: { width: 300 } }}
        />
        <div className="ls-requirement-focus">
          <Dropdown
            label="Select Requirement"
            selectedKey={selectedRelation ? selectedRelation.key : undefined}
            onChange={this._onChangeRelation}
            placeholder="Select relation"
            options={dropDownTable}
            styles={{ dropdown: { width: 300 } }}
          />
        </div>
        <DefaultButton
          text="Make relation"
          onClick={this.makeRelation}
          allowDisabledFocus
          disabled={false}
          checked={false}
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

const mapStateToProps = state => {
  return { csv: state.side.csv, relation: state.side.relation };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RequirementComponent));
