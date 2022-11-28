import React, { useState } from "react";

function TakeNote({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setNote((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e, newNote) => {
    addNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <div className="form">
      <div>
        <input
          value={note.title}
          className="w-100 border-0"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <p>
          <textarea
            value={note.body}
            className="w-100 border-0"
            placeholder="Take a note..."
            onChange={handleChange}
            name="body"
          ></textarea>
        </p>
      </div>
      <button onClick={(e) => onSubmit(e, note)}>Add Note</button>
    </div>
  );
}

export default TakeNote;
