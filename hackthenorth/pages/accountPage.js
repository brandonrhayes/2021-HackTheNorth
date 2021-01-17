import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layout from '../styles/Layout.module.css'
import Link from 'next/link'
import Nav from '../components/navbar'
import Header from '../components/Header'
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

            <Header />

            <main className={styles.main}>
                {loading && <div className={styles.title}>Loading...</div>}
                {session && 
                    <> 
                        <h1 className={styles.title}>
                            {session.user.name.split(' ', 1) ?? session.user.email}'s Settings
                            <br></br>
                            <img src={session.user.image} alt="Your profile picture." className={styles.avatar} />
                        </h1>
                    </>
                    }
                {!session &&
                    <>
                        <h1 className={styles.title}>
                            Welcome to ShareFood!
                        </h1>
                    </>
                }
                
                <div className={layout.container}>
                    <p className={styles.description}>
                        This is your profile page.
                    </p>
                </div>

                <div className={styles.grid}>
                <Link href="/NotImplemented">
                    <a className={styles.card}>
                    <h3>Favourite Meals &rarr;</h3>
                    <p>Your favourite meals.</p>
                    </a>
                </Link>

                <a href="/NotImplemented" className={styles.card}>
                    <h3>Order History &rarr;</h3>
                    <p>Your previous orders.</p>
                </a>

                <a
                    href="/NotImplemented"
                    className={styles.card}
                >
                    <h3>Friends &rarr;</h3>
                    <p>View your friend list.</p>
                </a>

                <a
                    href="/NotImplemented"
                    className={styles.card}
                >
                    <h3>Settings &rarr;</h3>
                    <p>
                    Account settings.
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