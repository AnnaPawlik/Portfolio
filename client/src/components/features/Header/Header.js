import React from 'react';
import '../Header/Header.scss';
import Navbar from '../../features/Navbar/Navbar';

class Header extends React.Component {
    render() {
        return(
            <div className="header container-fluid">
                <Navbar />
                <div className="header-title">
                    <p>Anna Pawlik</p>
                    <p className="subtitle">Junior Front-End Developer</p>
                    <div className="social-links">
                        <h1>social</h1>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;