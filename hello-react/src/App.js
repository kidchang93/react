import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <MyComponent name={"React"} favoriteNumber={3}>
        리액트
      </MyComponent>
      <Counter />
    </div>
  );
};

export default App;
