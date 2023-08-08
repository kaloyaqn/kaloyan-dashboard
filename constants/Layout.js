import React from 'react';
import { useRouter } from 'next/router';
import { ClerkProvider } from '@clerk/nextjs';

import Header from '../components/Sidebar/Header';

import 'reactjs-popup/dist/index.css';


const Layout = ({ children }) => {
  const router = useRouter();
  const isSignUpPage = router.pathname.includes('/sign-up');
  const isSignInPage = router.pathname.includes('/sign-in');
  const showHeader = !isSignInPage && !isSignUpPage;



  return (
    <ClerkProvider>
      {showHeader && <Header/>}
      <main>{children}</main>
    </ClerkProvider>
  );
};

export default Layout;
