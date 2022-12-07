import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <div className="mt-5">
        <Main />
      </div>
    </>
  );
}

export default App;
