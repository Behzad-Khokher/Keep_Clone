import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NoteBoard from "./components/NoteBoard";

function App() {
  return (
    <>
      <Header />

      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <NoteBoard />
        </div>
      </div>
    </>
  );
}

export default App;
