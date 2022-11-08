import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Longboi Locator</title>
        <meta name="description" content="Looking for Longboi? Use this locator to find the latest recorded location of Yorks longest duck." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Longboi locator
          </h1>

          <p className={styles.description}>
            We were sick of spending all our time looking for Longboi, as we kept failing all our exams due to a lack of studying. So we made this Longboi locator so that anyone can find him with ease.
          </p>
	  <br />
	  <code className={styles.code}>&gt; This website and the locator was coded by us, the good folk at YorDevs!<br />&gt; <a href="https://yordevs.com">Check us out here!</a></code>
        </main>
      </body>
      <footer className={styles.footer}>
        <p>Don't contact us please, I don't know how to fix the issue, sorry.</p>
      </footer>
    </div>
  );
}
