import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Articles from './containers/Articles';
import Rewards from './containers/Rewards';
import Plant from './containers/Plant';
import Water from './containers/Water';
import Contact from './containers/Contact';
import HeaderFooter from './components/HeaderFooter';
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {
    return (
        <ChakraProvider>
            <Routes>
                <GoogleOAuthProvider>
                    <Route path="login" element={<Login />} />
                </GoogleOAuthProvider>
                <Route element={<HeaderFooter />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/plant" element={<Plant />} />
                    <Route path="/water" element={<Water />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes >
        </ChakraProvider>
    )
}

export default App