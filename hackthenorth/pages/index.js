import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layout from '../styles/Layout.module.css'
import Link from 'next/link'
import Nav from '../components/navbar'
import { useSession } from 'next-auth/client'

export default function Home() {
    const [session, loading] = useSession();

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
                {loading && <div className={styles.title}>Loading...</div>}
                {session && 
                    <> 
                        <h1 className={styles.title}>
                            Welcome to ShareFood, {session.user.name.split(' ', 1) ?? session.user.email}.
                        </h1>
                    </>
                    }
                {!session &&
                    <>
                        <h1 className={styles.title}>
                            Welcome to ShareFood!
                        </h1>
                        <Link href="/SignIn">
                            <a><em>It looks like you might be new here. Sign in here.</em></a>
                        </Link>
                    </>
                }
                
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

                    <a href="/about" className={styles.card}>
                        <h3>About Us &rarr;</h3>
                        <p>Learn about ShareFood and our mission.</p>
                    </a>

                    <a
                        href="/ourTeam"
                        className={styles.card}
                    >
                        <h3>Our Team &rarr;</h3>
                        <p>Learn more about our team of developers.</p>
                    </a>

                    <a
                        href="https://github.com/brandonrhayes/2021-HackTheNorth"
                        className={styles.card}
                    >
                        <h3>Our Github &rarr;</h3>
                        <p>
                            Checkout the code that makes our mission possible.
                        </p>
                    </a>
                </div>

                <div className={layout.container}>
                    <img src='bake512.png'></img>
                    <h1 className={styles.title}> <em> Let's share food. </em></h1>
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
