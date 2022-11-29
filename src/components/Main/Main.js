import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import NoteBoard from "../NoteBoard/NoteBoard";

function Main() {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <NoteBoard />
      </div>
    </div>
  );
}

export default Main;
