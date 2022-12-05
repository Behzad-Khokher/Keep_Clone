import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 650px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 10px;
  border-color: #e0e0e0;
  margin: auto;
`;

function TakeNote({ addNote }) {
  const [openBox, setOpenBox] = useState(false);

  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const showBox = () => {
    setOpenBox(true);
  };

  const handleClickAway = () => {
    if (showBox) {
      if (note.title.length > 0 && note.body.length > 0) {
        addNote(note);
      }
      setNote({ title: "", body: "" });
      setOpenBox(false);
    }
  };

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
    console.log(note);
  };

  const openTextArea = (e) => {};

  // return (
  //   <div className="form">
  //     <div>
  //       <input
  //         value={note.title}
  //         className="w-100 border-0"
  //         type="text"
  //         placeholder="Title"
  //         onChange={handleChange}
  //         name="title"
  //         onClick={openTextArea}
  //       />
  //       <p>
  //         <textarea
  //           value={note.body}
  //           className="w-100 border-0"
  //           placeholder="Take a note..."
  //           onChange={handleChange}
  //           name="body"
  //         ></textarea>
  //       </p>
  //     </div>
  //     <button onClick={(e) => onSubmit(e, note)}>Add Note</button>
  //   </div>
  // );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container>
        {openBox && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 8 }}
            name="title"
            onChange={(e) => handleChange(e)}
            value={note.title}
          />
        )}
        <TextField
          InputProps={{ disableUnderline: true }}
          placeholder="Take a note..."
          multiline
          maxRows={50}
          variant="standard"
          onClick={showBox}
          name="body"
          onChange={(e) => handleChange(e)}
          value={note.body}
        />
      </Container>
    </ClickAwayListener>
  );
}

export default TakeNote;
