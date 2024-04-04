import React from 'react';
import styles from "./navbar.module.css"
import memories from "../../images/memories.png";
import { Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = null;

  return (
      <nav className={styles.appBar}>
          <div className={styles.brandContainer}>
          <Typography component={Link} to="/"  className={styles.heading} variant='h2' sx={{ fontSize: '2rem', fontWeight: "500" }}>Memories</Typography>
        <img
          className={styles.image}
          src={memories}
          alt="memories"
          height="60"
        />
          </div>
          <Toolbar className={styles.toolbar}>
            {user ? (
                <div className={styles.profile}>
                    <Avatar className={styles.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt[0]}</Avatar>
                    <Typography className={styles.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant='contained' className={styles.logout} color='secondary'>Logout</Button>
                </div>
            ): (
                <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
            )}
          </Toolbar>
    </nav>
  );
}

export default Navbar;
