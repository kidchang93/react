import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  const name = "리액트";
  const name1 = undefined;
  const style = {
    // background-color 는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", // font-size -> fontSize
    fontWeight: "bold", // font-weight -> fontWeight
    padding: 16, // 단위를 생략하면 px로 지정됩니다.
  };
  return (
    <div style={style}>
      {/* {name == "리액트" ? <h1>리액트 입니다.</h1> : <h2>리액트가 아닙니다.</h2>} */}
      {/* {name === "리액트" ? <h1>리액트입니다.</h1> : null} */}
      {/* {name === "리액트" && <h1>리액트입니다.</h1>} */}
      {/* name || '값이 undefined' 입니다. ;<br></br> */}
      {/* {name1 || "리액트"}; */}
      {name}
      <div className="react">{name}</div>
      <input />
      <MyComponent />
    </div>
  );
}

export default App;
