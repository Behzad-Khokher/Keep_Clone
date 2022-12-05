import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import NoteBoard from "../NoteBoard/NoteBoard";

function Main() {
  return (
    <Sidebar>
      <NoteBoard />
    </Sidebar>
  );
}

export default Main;
