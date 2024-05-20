import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "리액트";
  const name1 = undefined;
  const style = {
    // backgroud-color 는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
  };
  return (
    <div>
      {/* {name == "리액트" ? <h1>리액트 입니다.</h1> : <h2>리액트가 아닙니다.</h2>} */}
      {/* {name === "리액트" ? <h1>리액트입니다.</h1> : null} */}
      {/* {name === "리액트" && <h1>리액트입니다.</h1>} */}
      name || '값이 undefined' 입니다. ;<br></br>
      {name1 || "리액트"};
    </div>
  );
}

export default App;
