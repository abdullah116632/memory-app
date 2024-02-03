import React, {useState, useEffect} from "react";
import { Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import {getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import styles from "./styles.module.css";

const App = () => {
  
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId])

  return (
    <Container maxWidth="lg"> 
      {/* <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography className={styles.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={styles.image} src={memories} alt="memoris" height="60" />
      </AppBar> */}
      <div className={styles.appBar}>
        <h2 className={styles.heading}>Memories</h2>
        <img className={styles.image} src={memories} alt="memoris" height="60" />
      </div>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
