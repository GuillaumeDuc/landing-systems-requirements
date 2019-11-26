import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Dropdown,
  DropdownMenuItemType
} from "office-ui-fabric-react/lib-commonjs/Dropdown";

class RequirementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: ""
    };
    this.getRequirement = this.getRequirement.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  getRequirement() {
    const indexData = this.props.match.params.data;
    const table = this.props.csv;
    console.log(table);
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
        return nRequirement.push({ key: index, text: obj.requirements });
      });
    }
    return nRequirement;
  }

  _onChange = (event, item) => {
    console.log(
      `Selection change: ${item.text} ${
        item.selected ? "selected" : "unselected"
      }`
    );
    this.setState({ selectedItem: item });
  };

  render() {
    const dropDownTable = this.getDropDownFromTable();
    const requirement = this.getRequirement();
    const { selectedItem } = this.state;
    return (
      <div className="dashboard-central">
        <div className="ls-requirement-focus">{requirement}</div>
        <Dropdown
          label="Select type of relation"
          selectedKey={selectedItem ? selectedItem.key : undefined}
          onChange={this._onChange}
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
            label="Select relation"
            selectedKey={selectedItem ? selectedItem.key : undefined}
            onChange={this._onChange}
            placeholder="Select relation"
            options={dropDownTable}
            styles={{ dropdown: { width: 300 } }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { csv: state.side.csv };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RequirementComponent));
