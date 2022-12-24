import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import SolutionComponent from '../components/SolutionComponent';
import component2Home from '../components/component2Home';
import plantATree from '../components/plantATree';

const Home = () => {
    return (
        <>
            <Navbar />
            <SolutionComponent />
            <component2Home />
            <plantATree />
            <Routes>
                <Route path="/plant" element={<Home />} />
                <Route path="/water" element={<Home />} />
            </Routes>
        </>
    )
}

export default Home