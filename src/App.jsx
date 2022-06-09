import React, { useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // [stateの変数名, stateを更新する関数名] = useState(初期値);
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか?</ColorfullMessage>
      <ColorfullMessage color="pink">元気です!</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
