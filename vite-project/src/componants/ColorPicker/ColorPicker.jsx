import React from "react";

class ColorPicker extends React.Component {
  state = {
    activOptionIndex: 0,
  };
  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Piker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className="ColorPiker__option"
              style={{
                backgroundColor: color,
                border: index,
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
