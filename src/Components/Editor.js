import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

const WysiwygEditor = () => {
  const classes = useStyles();
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        WYSIWYG Text Editor
      </Typography>
      <ReactQuill value={editorHtml} onChange={handleChange} />
    </Paper>
  );
};

export default WysiwygEditor;