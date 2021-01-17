import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import GitHub from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright';
import Nav from '../components/navbar'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  sidebyside: {  
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center',
  },
}));

export default function SignIn() {
    const classes = useStyles();
    const router = useRouter()
    const [session] = useSession();

    const handleSignin = (e) => {
        e.preventDefault();
        signIn();
        if (!session) {
            return(router.push('/SignIn'));
        } else if (session) {
            return (router.push('/about')); 
        }  
    }    

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }

    return (
        <>
            <div className={styles.nav}>
                        <Nav> </Nav> 
            </div>

            {!session &&
                <>
                    <Container component="main" maxWidth="xs">
                    
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Sign In to ShareFood
                        </Typography>
                        <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary"  />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{backgroundColor: "#0070f3"}}
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{backgroundColor: "#0070f3", marginTop: "0em"}}
                            className={classes.submit}
                            onClick={(e) => handleSignin(e)}
                        >
                        <div className='sidebyside'></div>
                            <GitHub></GitHub>
                            <Facebook></Facebook>
                            Sign In with another service
                        </Button>
                        
                        <Grid container>
                            <Grid item xs>
                            <Link href="/NotImplemented" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="/SignUp" variant="body2">
                                {"Don't have an account? Sign Up."}
                            </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                    </Container>
                </>
            }
            {session &&
                <>
                    <Container component="main" maxWidth="xs">
                        
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOpenOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Welcome to ShareFood, {session.user.name.split(' ', 1)}
                            </Typography>

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{backgroundColor: "#0070f3", marginTop: "0em"}}
                                className={classes.submit}
                                onClick={(e) => handleSignout(e)}
                            >
                                Sign Out with GitHub
                            </Button>
                        </div>
                        <div className="footer">
                            <Copyright />
                        </div>
                    </Container>
                </>
            }
        </>
    );
}