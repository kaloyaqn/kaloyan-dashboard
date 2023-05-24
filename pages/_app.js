import Head from "next/head"
import { ToastContainer } from "react-toastify"
import GlobalStyle from "../theme/globalStyles"
import Layout from "../constants/Layout"
import { useState, useEffect, createContext } from 'react'
import { useRouter } from "next/router"
import 'react-toastify/dist/ReactToastify.css';


export const UserContext = createContext({})

export default function MyApp({ Component, pageProps }) {
    const [loggedIn, setLoggedIn] = useState(true)
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const showLayout = router.pathname !== '/login';

    // useEffect(() => {
    //     if (showLayout) {
    //         fetch('api/user/isAuth')
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.loggedIn) {
    //                 setLoggedIn(true)
    //                 setLoading(false);
    //             } else {
    //                 setLoading(true)
    //                 setLoggedIn(false);
    //                 router.push('/login')
    //             }
    //         })
    //         .catch(error => {
    //             console.error("Error cheking login status:", error);
    //             setLoggedIn(false);
    //             setLoading(true);
    //             router.push('/login');
    //         })
    //     }
    // }, [])

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
      <ToastContainer/>
      <GlobalStyle />
        
      {showLayout && loggedIn ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}

    </>
  )
}

//proshuto krudo x2 14.19
//kaprichoza golqma 14.89
//peperoni klasiko golqma 16.39
//peperoni klasiko malka 12.29
//karbonara pica malka 14.49
//rizoto milaneze s pile 8.69
