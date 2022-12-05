import { Card, CardContent, Typography, CardActions } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import ArchiveIcon from "../../Icons/ArchiveIcon";
import DeleteIcon from "../../Icons/DeleteIcon";

const MyCard = styled(Card)`
  width: 240px;
  margin: 10px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

function NoteCard(props) {
  // return (
  //   <div class="card note" style={{ display: "inline-block" }}>
  //     <div class="card-header">{props.title}</div>
  //     <div class="card-body">
  //       <blockquote class="blockquote mb-0">
  //         <p>{props.body}</p>
  //       </blockquote>
  //     </div>
  //   </div>
  // );
  return (
    <MyCard>
      <CardContent>
        <Typography>{props.title}</Typography>
        <Typography>{props.body}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveIcon style={{ marginLeft: "auto" }} />
        <DeleteIcon style={{ marginLeft: "auto" }} />
      </CardActions>
    </MyCard>
  );
}

export default NoteCard;
