import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import SolutionComponent from '../components/SolutionComponent';

const Home = () => {
    return (
        <>
            <Navbar />
            <SolutionComponent />
            <Routes></Routes>
        </>
    )
}

export default Home