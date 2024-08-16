import React from "react";
import { MenuLogoWithTitle } from "../index";
import { Box } from "@mui/material";

const MenuBar = () => {
  return (
    <Box
      component={"header"}
      sx={{
        position: "absolute",
        width: "100%",
        height: "6rem",
        padding: { lg: "0.5rem 4rem", sm: "0.5rem 1rem", xs: "0.8rem 0.7rem" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "1",
      }}
    >
      <MenuLogoWithTitle />
    </Box>
  );
};

export { MenuBar };
