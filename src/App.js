import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './containers/Home';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes >
        </ChakraProvider>
    )
}

export default App