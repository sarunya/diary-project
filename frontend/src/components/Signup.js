import { Component } from 'react';
import {Avatar, Button, CssBaseline, TextField} from '@material-ui/core';
import {FormControlLabel, Checkbox, Link, Paper} from '@material-ui/core';
import {Box, Grid, Typography, makeStyles} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import Copyright from './Copyright';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.styles = this.createStyles();
  }

  createStyles() {
    return makeStyles((theme) => ({
      root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
  }

  render() {
    return (
      <Grid container component='main' className={this.styles.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={this.styles.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={this.styles.paper}>
            <Avatar className={this.styles.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
          </Typography>
            <form className={this.styles.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={this.styles.submit}
              >
                Sign In
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {`Don't have an account? Sign Up`}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }
}
export default SignUp;