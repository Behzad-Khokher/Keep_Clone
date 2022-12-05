import { Typography, Box } from "@mui/material";
import React from "react";
import LightBulb from "../../Icons/LightBulb";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const Text = styled(Typography)`
  color: #686c71;
  font-size: 20px;
`;

function EmptyPage() {
  return (
    <Container>
      <LightBulb color={"#E6E6E6"} height={180} width={180} />
      <Text>Notes You Add Appear Here</Text>
    </Container>
  );
}

export default EmptyPage;
