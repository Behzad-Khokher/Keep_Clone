import React from "react";

function NoteCard(props) {
  return (
    <div class="card note" style={{ display: "inline-block" }}>
      <div class="card-header">{props.title}</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{props.body}</p>
        </blockquote>
      </div>
    </div>
  );
}

export default NoteCard;
