import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { Map } from "../components/map/Map.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Longboi Locator</title>
        <meta name="description" content="Looking for Longboi? Use this locator to find the latest recorded location of Yorks longest duck." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Longboi locator
        </h1>

        <p className={styles.description}>
          We were sick of spending all our time looking for Longboi, as we were failing all our exams due to a lack of studying. So we made this Longboi locator so that anyone can find him at ease.
          <code className={styles.code}>This website and the locator was coded by us, the good folk at YorDevs!<a href="https://yordevs.com">Check us out here!</a></code>
        </p>

        <Map>
          {({ Marker, Popup }) => (
            // TODO: proper icon 
            <Marker position={[53.946, -1.042]} icon={L.icon({ iconUrl: "https://iconarchive.com/download/i110135/thesquid.ink/free-flat-sample/rubber-duck.ico", iconSize: [40, 40] })}>
              <Popup>
                Longboi
              </Popup>
            </Marker>
          )}
        </Map>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}