import Head from "next/head";
import styles from "../styles/Home.module.css";
import layout from "../styles/Layout.module.css";
import Nav from "../components/navbar";

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
          <div className={styles.sidebyside}>
            <img
              src="/bake512.png"
              alt="ShareFood's Logo"
              width="200"
              height="200"
            ></img>
            <h1 className={styles.title}>ShareFood</h1>
          </div>

          <div className={layout.container}>
            <p className={styles.description}>
              We're an online community committed to helping individuals connect
              to find and share food. We know that preparing meals during the
              school year can be challenging, and so do our partner families.
              Don't let stress and the pandemic let you feel insecure about the
              food you're eating. Connect with a meal provider today to get
              quick access to nutritious meals for free!
            </p>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
          <p> </p>- Website icon made by{" "}
          <a
            href="https://www.flaticon.com/authors/ultimatearm"
            title="ultimatearm"
          >
            ultimatearm
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </footer>
      </div>
    </>
  );
}
