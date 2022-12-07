import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import NoteBoard from "../NoteBoard/NoteBoard";
import { useState } from "react";

function Main() {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col">
        <NoteBoard />
      </div>
    </div>
  );
}

export default Main;
