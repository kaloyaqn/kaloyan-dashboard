import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import Header from '../components/Sidebar/Header'

const Layout = ({children}) => {
  return (
    <ProSidebarProvider>
    <Header />
    <main>
        {children}
    </main>
    </ProSidebarProvider>
  )
}

export default Layout