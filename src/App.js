import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./pages/Sidebar/Sidebar";

const App = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "#F8F9FA", height: "100vh" }}>
      <Sidebar />
    </Box>
  );
};

export default App;
