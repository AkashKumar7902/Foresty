import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import SolutionComponent from '../components/SolutionComponent';
import Component2Home from '../components/Component2Home';
import PlantATree from '../components/PlantATree';
import WaterATree from '../components/WaterATree';
import Rewards from '../components/Rewards';
import Articles from './Articles';

const Home = () => {
    return (
        <>
            <Navbar />
            <SolutionComponent />
            <Component2Home />
            <PlantATree />
            <WaterATree />
            <Rewards />
            <Routes>
                <Route path="/plant" element={<Home />} />
                <Route path="/water" element={<Home />} />
                <Route path="/Articles" element={<Articles />} />
            </Routes>
        </>
    )
}

export default Home