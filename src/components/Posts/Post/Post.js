import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from "./post.module.css";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <Card className={styles.card}>
        <CardMedia className={styles.media} image={post.selectedFile} title={post.title} />
        <div className={styles.overlay}>
            <Typography variant='h6'>{post.creator}</Typography>
            <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={styles.overlay2}>
            <Button style={{color: "white"}} size="small" onClick={() => {}}>
                <MoreHorizIcon fontSize='default' />
            </Button>
        </div>
        <div className={styles.details}>
            <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => `#${tag}`) }</Typography>
        </div>
        <CardContent>
        <Typography className={styles.title} variant="h6" gutterBottom>{post.message}</Typography>
        </CardContent>
        <CardActions className={styles.CardActions}>
            <Button size="small" color="primary" onClick={() => {}}>
                <ThumbUpAltIcon fontSize='small'/>
                Like {post.likeCount}
            </Button>
            <Button size="small" color="primary" onClick={() => {}}>
                <DeleteIcon fontSize='small'/>
                Delete
            </Button>
        </CardActions>
    </Card>
  );
}

export default Post;
