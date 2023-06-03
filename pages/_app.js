import Head from "next/head"
import { useState, useEffect, createContext } from 'react'
import { useRouter } from "next/router"

import Layout from "../constants/Layout"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { SessionProvider } from "next-auth/react"

import GlobalStyle from "../theme/globalStyles"


export const UserContext = createContext({})

export default function MyApp({ Component, pageProps: {session, ...pageProps} }) {
    const [loggedIn, setLoggedIn] = useState(true)
    const [loading, setLoading] = useState(true);
    const router = useRouter();
  

    const showLayout = router.pathname !== '/login';


  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
        
      {showLayout && loggedIn ? (
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      ) : (
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
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
