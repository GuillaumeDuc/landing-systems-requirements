import React, { Component } from "react";
import { Icon } from "office-ui-fabric-react/lib-commonjs/Icon";

class MovingPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: props.hidden ? true : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const hidden = this.state.hidden;
    this.setState({ hidden: !hidden });
  }

  render() {
    const panel = (
      <div
        className={`moving-pane-content${this.state.hidden ? "-hidden" : ""}`}
      >
        {this.props.content ? this.props.content : ""}
      </div>
    );

    const icon = (
      <div
        className={`moving-pane-picture${this.state.hidden ? "-hidden" : ""}`}
      >
        <Icon
          iconName="ChevronLeftSmall"
          className="arrow"
          onClick={this.handleClick}
        />
      </div>
    );

    const movingPane = <div className={"moving-pane"}>{[panel, icon]}</div>;

    return movingPane;
  }
}

export default MovingPane;
