import React, { useState } from "react";

import TakeNote from "./TakeNote/TakeNote";
import NoteDisplay from "./NoteDisplay/NoteDisplay";

function Noteboard() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    console.log(newNote);
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  return (
    <div>
      Noteboard
      <TakeNote addNote={addNote} />
      <NoteDisplay noteList={notes} />
    </div>
  );
}

export default Noteboard;
