import React from 'react';
import { useRouter } from 'next/router';
import { ClerkProvider } from '@clerk/nextjs';

import Header from '../components/Sidebar/Header';

const Layout = ({ children }) => {
  const router = useRouter();



  return (
    <ClerkProvider>
      <Header />
      <main>{children}</main>
    </ClerkProvider>
  );
};

export default Layout;
