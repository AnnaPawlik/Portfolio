import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../Navbar/Navbar.scss';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <nav className="nav-menu">
      <div className="navbar-desktop">
        <div className="navbar navbar-links">
            <div>
                <NavLink to='/' className="link">
                    <FontAwesomeIcon className="icon" icon={faHome} />
                    <span> Strona główna</span>
                </NavLink>
            </div>
            <div>
                <NavLink to='/omnie' className="link">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <span>O mnie</span>
                </NavLink>
            </div>
            <div>
                <NavLink to='/technologie' className="link">
                    <FontAwesomeIcon className="icon" icon={faServer} />
                    <span>Technologie</span>
                </NavLink>
            </div>
            <div>
                <NavLink to='/projekty' className="link">
                    <FontAwesomeIcon className="icon" icon={faFolderOpen} />
                    <span>Projekty</span>
                </NavLink>
            </div>
            <div>
                <NavLink to='/kontakt' className="link">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <span>Kontakt</span>
                </NavLink>
            </div>
        </div>
      </div>
      <div className="navbar-mobile">
        <Navbar color="faded" light>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to='/'>Strona główna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/omnie'>O mnie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/omnie'>Technologie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/projekty'>Projekty</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/kontakt'>Kontakt</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </nav>
  );
}

export default NavBar;