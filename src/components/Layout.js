/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const toggle = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }
  return (
    <>
      <Navbar toggle={toggle}>layout component</Navbar>
      <Sidebar isOpen={isOpenSidebar} toggle={toggle}/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
