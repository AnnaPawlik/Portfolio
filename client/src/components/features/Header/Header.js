import React from 'react';
import '../Header/Header.scss';
import Navbar from '../../features/Navbar/Navbar';

class Header extends React.Component {
    render() {
        return(
            <div className="header container-fluid">
                <Navbar />
            </div>
        );
    }
};

export default Header;