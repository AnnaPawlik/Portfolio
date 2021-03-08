import React from 'react';
import Header from '../../features/Header/Header';
import About from '../../features/About/About';
import Technology from '../../features/Technology/Technology';

const Home = () => (
    <div className="text-center">
        <Header />
        <About />
        <Technology/>
    </div>
);

export default Home;