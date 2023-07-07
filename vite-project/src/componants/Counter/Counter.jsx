import React from "react";
import { Controls } from "./Controls/Controls";

class Counter extends React.Component {
  state = {
    value: this.props.startValue,
  };
  handelIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
  handelDictiment = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onIncrement={this.handelIncrement}
          onDecriment={this.handelDictiment}
        />
      </div>
    );
  }
}
export default Counter;
