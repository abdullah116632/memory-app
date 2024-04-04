import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@mui/material"
import styles from "./auth.module.css";
import Input from './input';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup)
    handleShowPassword(false)
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={styles.paper} elevation={3}>
        <Avatar className={styles.avatar}>
          <LockPersonIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                
                
                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={styles.button}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent={'center'}>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp ? "Already have an account? Sign In" : "Dont have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
