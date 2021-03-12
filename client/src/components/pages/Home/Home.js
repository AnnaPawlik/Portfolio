import React from 'react';
import Header from '../../features/Header/Header';
import About from '../../features/About/About';
import Technology from '../../features/Technology/Technology';
import Projects from '../../features/Projects/Projects';
import Contact from '../../features/Contact/Contact';
import '../../../styles/global.scss';

const Home = () => (
    <div className="text-center" id="home">
        <Header />
        <About />
        <Technology />
        <Projects />
        <Contact />
    </div>
);

export default Home;