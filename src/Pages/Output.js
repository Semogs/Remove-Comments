import React, { useContext } from "react";
import { TextContext } from "../Context/Context";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function removeMultiLine(textInput, opening) {
  while (textInput.indexOf(opening) !== -1) {
    const unCommentedText = textInput.split(opening);
    const beforeComment = unCommentedText.shift();
    const textWithComment = unCommentedText.join(opening);
    const afterComment = textWithComment.split("*/");
    afterComment.shift();
    textInput = beforeComment + afterComment.join("*/");
  }
  return textInput;
}

function getMultiLineOpening(textInput) {
  const beforeComment = textInput.split("/*").shift();
  const beforeCommentOpening = beforeComment.split("\n");
  return "\n" + beforeCommentOpening[beforeCommentOpening.length - 1] + "/*";
}

export default function Output() {
  let { textInput } = useContext(TextContext);

  while (textInput.indexOf("/*") !== -1) {
    const opening = getMultiLineOpening(textInput);
    textInput = removeMultiLine(textInput, opening);
  }

  const cleanText = textInput
    .split("\n")
    .filter(function (line) {
      return line.indexOf("//") === -1;
    })
    .join("\n");

  return (
    <Paper
      elevation={10}
      sx={{ padding: "1px 20px", pb: 2, width: 500, margin: "75px auto" }}
    >
      <Typography variant="body1" sx={{ mt: 2, ml: 2, whiteSpace: "pre-line" }}>
        {cleanText}
      </Typography>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Link to="/read-file" style={{ textDecoration: "none" }}>
          <Button variant="contained">Upload Page</Button>
        </Link>
      </Box>
    </Paper>
  );
}
