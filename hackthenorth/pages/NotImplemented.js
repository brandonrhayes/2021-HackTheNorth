import Error from 'next/error'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(1, 0, 1),
    },
  }));

export default function NotImplemented() {
    const router = useRouter()
    const classes = useStyles();

    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{Error.name}.  This page has not been implemented.</h1>
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{backgroundColor: "#0070f3"}}
                    className={classes.submit}onClick={() => router.back()}>Click here to go back
                </Button>
            </main>
    </div>
    
    )
    
}