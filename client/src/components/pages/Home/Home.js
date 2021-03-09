import React from 'react';
import Header from '../../features/Header/Header';
import About from '../../features/About/About';
import Technology from '../../features/Technology/Technology';
import Contact from '../../features/Contact/Contact';
import '../../../global.scss';

const Home = () => (
    <div className="text-center">
        <Header />
        <About />
        <Technology />
        <Contact />
    </div>
);

export default Home;