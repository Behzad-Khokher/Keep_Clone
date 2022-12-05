import { Grid } from "@mui/material";
import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import EmptyPage from "../EmptyPage/EmptyPage";
function NoteDisplay({ noteList }) {
  return (
    <div>
      {noteList.length == 0 && <EmptyPage />}
      <Grid container style={{ marginTop: 16 }}>
        {noteList.map((note, i) => (
          <Grid item>
            <NoteCard key={i} title={note.title} body={note.body} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default NoteDisplay;
