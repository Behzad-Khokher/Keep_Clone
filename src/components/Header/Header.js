import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Header() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
      <Typography variant="h5" color="GrayText">
        Keep
      </Typography>
    </Box>
  );
}

export default Header;
