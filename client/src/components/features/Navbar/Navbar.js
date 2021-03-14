import React, { useState }from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavLink, NavItem } from 'reactstrap';
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
    <nav className="nav-menu d-flex">
      <Navbar className="navbar-desktop">
        <Nav navbar className="navbar navbar-links d-flex flex-column align-items-start">
            <div>
                <NavLink href="#home" className="link">
                    <FontAwesomeIcon className="icon" icon={faHome} />
                    <span>Start</span>
                </NavLink>
            </div>
            <div>
                <NavLink href="#about" className="link">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <span>O</span><span className="ml-1 ">mnie</span>
                </NavLink>
            </div>
            <div>
                <NavLink href="#technology" className="link">
                    <FontAwesomeIcon className="icon" icon={faServer} />
                    <span>Technologie</span>
                </NavLink>
            </div>
            <div>
                <NavLink href="#projects" className="link">
                    <FontAwesomeIcon className="icon" icon={faFolderOpen} />
                    <span>Projekty</span>
                </NavLink>
            </div>
            <div>
                <NavLink href="#contact" className="link">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <span>Kontakt</span>
                </NavLink>
            </div>
        </Nav>
      </Navbar>
      <div className="navbar-mobile text-uppercase text-center p-1">
        <Navbar color="faded" dark className="vw-100">
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar >
            <Nav navbar>
              <NavItem>
                <NavLink href="#home">Strona główna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">O mnie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#technology">Technologie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projekty</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Kontakt</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </nav>
  );
}

export default NavBar;