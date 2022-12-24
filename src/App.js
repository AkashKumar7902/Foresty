import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './containers/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Articles from './containers/Articles';
import Rewards from './containers/Rewards';
import Navbar from './components/Navbar';
import Plant from './containers/Plant';
import Water from './containers/Water';

const App = () => {
    return (
        <ChakraProvider>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route element={<Navbar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/plant" element={<Plant />} />
                    <Route path="/water" element={<Water />} />
                </Route>
            </Routes >
        </ChakraProvider>
    )
}

export default App