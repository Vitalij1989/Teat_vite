import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DropDown from "./componants/DropDown/DropDown";
import ColorPicker from "./componants/ColorPicker/ColorPicker";

const ColorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#ACAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ColorPicker options={ColorPickerOptions} />
      {/* <Counter startValue={10} /> */}
      {/* <Form /> */}
      {/* <DropDown /> */}
      {/* <p>Hello world</p> */}
    </>
  );
}

export default App;

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p>Hello world</p> */
}
