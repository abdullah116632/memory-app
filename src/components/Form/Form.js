import React, { useState } from "react";
import styles from "./form.module.css";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostDAta] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={styles.paper}>
      <form
        autoComplete="off"
        noValidate
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostDAta({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostDAta({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostDAta({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostDAta({ ...postData, tags: e.target.value })}
        />
        <div className={styles["fileInput"]}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostDAta({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={styles.buttononSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
