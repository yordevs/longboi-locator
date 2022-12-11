import '../styles/globals.css'
import { useEffect } from "react";
import { initFirebase } from "../firebase/clientApp.js";

initFirebase();

function MyApp({ Component, pageProps }) {

  return (<Component {...pageProps} />);
}

export default MyApp
