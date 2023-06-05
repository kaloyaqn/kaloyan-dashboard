import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Header from '../components/Sidebar/Header'
import Drawer from '../components/Sidebar/Drawer'
import { ClerkProvider } from '@clerk/nextjs'


const Layout = ({children}) => {
  return (
    <ClerkProvider>
      <Header />
          <main>
            {/* <Drawer /> */}
              {children}
          </main>
    </ClerkProvider>
  )
}

export default Layout

