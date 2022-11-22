import '../styles/globals.css'
import { useEffect } from "react";
import { initFirebase } from "../firebase/clientApp.js";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (window) {
      initFirebase();
    }
  }, []);


  return <Component {...pageProps} />
}

export default MyApp
