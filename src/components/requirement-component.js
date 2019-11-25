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
                    <div className="ls-row">{obj[key]}</div>
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

  _onChange = (event, item) => {
    console.log(
      `Selection change: ${item.text} ${
        item.selected ? "selected" : "unselected"
      }`
    );
    this.setState({ selectedItem: item });
  };

  render() {
    const requirement = this.getRequirement();
    const { selectedItem } = this.state;
    return (
      <div className="dashboard-central">
        <div className="ls-requirement-focus">{requirement}</div>
        <div>DEPENDS OF :</div>
        <Dropdown
          label="Select relation"
          selectedKey={selectedItem ? selectedItem.key : undefined}
          onChange={this._onChange}
          placeholder="Select an option"
          options={[
            {
              key: "Requirements",
              text: "Fruits",
              itemType: DropdownMenuItemType.Header
            },
            { key: "apple", text: "Apple" },
            { key: "banana", text: "Banana" },
            { key: "orange", text: "Orange", disabled: true },
            { key: "grape", text: "Grape" },
            {
              key: "divider_1",
              text: "-",
              itemType: DropdownMenuItemType.Divider
            },
            {
              key: "vegetablesHeader",
              text: "Vegetables",
              itemType: DropdownMenuItemType.Header
            },
            { key: "broccoli", text: "Broccoli" },
            { key: "carrot", text: "Carrot" },
            { key: "lettuce", text: "Lettuce" }
          ]}
          styles={{ dropdown: { width: 300 } }}
        />
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
