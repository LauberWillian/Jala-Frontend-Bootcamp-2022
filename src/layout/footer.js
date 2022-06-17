import React, { useState } from "react";
import Box from "@mui/material/Box";
import { BottomNavigation } from "@mui/material";

const Footer = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <BottomNavigation
        position="fixed"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Box>This is a footer</Box>
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
