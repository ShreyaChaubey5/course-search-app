import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#fff",
        paddingY: 1,
        borderBottom: "1px solid #eee"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <Stack direction="row" alignItems="center" spacing={3} style={{color:"black"}}>
          {/* <img src="" alt="Logo" style={{ height: 40 }} />Logo */}Logo
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              borderBottom: "3px solid",
              borderImageSlice: 1,
              borderWidth: "3px",
             
              borderImageSource: "linear-gradient(to right, #ec4899, #8b5cf6)",
              pb: 0.5,
              cursor: "pointer"
            }}
          >
            Courses
          </Typography>
        </Stack>

        {/* Right Side */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            sx={{ color: "#333", fontWeight: 500 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #ec4899, #8b5cf6)",
              color: "#fff",
              fontWeight: 600,
              px: 3,
              '&:hover': {
                background: "linear-gradient(to right, #db2777, #7c3aed)"
              }
            }}
          >
            Register For Free
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;