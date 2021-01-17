import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layout from '../styles/Layout.module.css'
import Nav from '../components/navbar'

export default function Home() {

    return (
        <>
            <div className={styles.nav}>
                <Nav> </Nav> 
            </div>

            <div className={styles.container}>
            <Head>
                <title>ShareFood's Team</title>
                <link rel="icon" href="/bake.png" />
            </Head>

            <main className={styles.main}>
                
                <h1 className={styles.title}>
                    ShareFood's Team
                </h1>  
                
                <div className={layout.container}>
                    <p className={styles.description}>
                    Our Team.
                    </p>
                </div>

            </main>

            <footer className={styles.footer}>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
                <p>{' '}</p>
                
                - Website icon made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

            </footer>
            </div>
        </>
    )
}
