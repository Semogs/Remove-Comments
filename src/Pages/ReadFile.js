import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TextContext } from "../Context/Context";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function ReadFile() {
  const { setTextInput } = useContext(TextContext);
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setTextInput(e.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <Paper
      elevation={10}
      sx={{
        padding: "1px 20px",
        pb: 2,
        width: 500,
        margin: "75px auto",
      }}
    >
      <TextField
        type="file"
        fullWidth
        onChange={handleFileChange}
        sx={{ mt: 2 }}
      />
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Link to="/output" style={{ textDecoration: "none" }}>
          <Button variant="contained">Output Page</Button>
        </Link>
      </Box>
    </Paper>
  );
}
