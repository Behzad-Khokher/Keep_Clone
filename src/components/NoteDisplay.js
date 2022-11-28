import React from "react";
import NoteCard from "./NoteCard";
function NoteDisplay({ noteList }) {
  return (
    <div>
      <h1>My notes</h1>
      {noteList.map((note, i) => (
        <NoteCard key={i} title={note.title} body={note.body} />
      ))}
    </div>
  );
}

export default NoteDisplay;
