import React from "react";
export const Controls = ({ onIncrement, onDecriment }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecriment}>
      Зменшити на 1
    </button>
  </div>
);
