import React, { useState, useEffect } from "react";
import styles from "./form.module.css";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";


const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostDAta] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id ===currentId) : null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostDAta(post)
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId, postData))
    }else{
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostDAta({
      creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    })
  };

  return (
    <Paper className={styles.paper}>
      <form
        autoComplete="off"
        noValidate
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? "Editing" : "creating"} a Memory</Typography>
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
          onChange={(e) => setPostDAta({ ...postData, tags: e.target.value.split(",") })}
        />
        <div className={styles["fileInput"]}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostDAta({ ...postData, selectedFile: base64 })
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
