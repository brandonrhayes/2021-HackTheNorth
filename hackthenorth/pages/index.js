import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layout from '../styles/Layout.module.css'
import Link from 'next/link'
import Nav from '../components/navbar'

export default function Home() {
  return (
    <>
        <div className={styles.nav}>
            <Nav> </Nav> 
        </div>
        
        <div className={styles.container}>
        <Head>
            <title>ShareFood</title>
            <link rel="icon" href="/bake.png" />
        </Head>
        
        <main className={styles.main}>
            <h1 className={styles.title}>
            Welcome to ShareFood!
            </h1>
            <div className={layout.container}>
                <p className={styles.description}>
                We're an online community commited to helping individuals connect
                to find and share food.  We know that preparing meals during the school year
                can be challenging, and so do our partner familes.  Don't let stress and the 
                pandemic let you feel insecure about the food you're eating. Connect with a
                meal provider today to get quick access to nutritious meals for free!
                </p>
            </div>

            <div className={styles.grid}>
            <Link href="/posts/featured-posts">
                <a className={styles.card}>
                <h3>Featured Meals &rarr;</h3>
                <p>Checkout today's featured meals by our favourite contributors.</p>
                </a>
            </Link>

            <a href="/facebookLogin" className={styles.card}>
                <h3>SignIn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}
            >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
            >
                <h3>Deploy &rarr;</h3>
                <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
            </a>
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
