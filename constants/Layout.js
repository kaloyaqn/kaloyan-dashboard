import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Header from '../components/Sidebar/Header'
import Drawer from '../components/Sidebar/Drawer'

const Layout = ({children}) => {
  return (
    <ProSidebarProvider>
    <Header />
    <main>
      {/* <Drawer /> */}
        {children}
    </main>
    </ProSidebarProvider>
  )
}

export default Layout