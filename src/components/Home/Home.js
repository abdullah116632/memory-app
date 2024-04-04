import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { Grow, Container, Grid } from '@mui/material';
import { getPosts } from '../../actions/posts';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import styles from "./home.module.css"



const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch, currentId]);

  return (
    <Grow in>
        <Container>
          <Grid
            container
            className={styles.mainContainer}
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
  );
}

export default Home;
