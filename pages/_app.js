import Layout from "../components/Layout.jsx";
import NavBar from "../components/navBar/NavBar.jsx";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <NavBar />
    </>
  );
}

export default MyApp
