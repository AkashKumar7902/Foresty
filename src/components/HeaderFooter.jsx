import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginBtn from './LoginBtn'

const HeaderFooter = () => {
    return (
      <>
        <GoogleOAuthProvider
          clientId={`${process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}`}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </GoogleOAuthProvider>
      </>
    );
}

export default HeaderFooter