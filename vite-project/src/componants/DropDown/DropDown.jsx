import React from "react";
import "./DropDown.css";
class DropDown extends React.Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  show = () => {
    this.setState({ visible: true });
    console.log("show");
  };
  hide = () => {
    this.setState({ visible: false });
    console.log("hide");
  };
  render() {
    return (
      <div className="DropDown">
        <button type="button" onClick={this.toggle}>
          {!this.state.visible ? "Show" : "Hide"}
        </button>

        {this.state.visible && <div className="DropDown__menu">Menu</div>}
      </div>
    );
  }
}
export default DropDown;
