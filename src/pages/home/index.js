import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={500}
    >
      <Typography variant="h3">Welcome to this page</Typography>
      <Button variant="contained" onClick={() => navigate("/input")}>
        Check your premium
      </Button>
    </Box>
  );
};

export default Home;
