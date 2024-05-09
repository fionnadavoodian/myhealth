import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/CustomNavbar.css';
import { BsSun, BsMoon } from 'react-icons/bs';

const tabs = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About Us' },
    { id: 'contact', text: 'Contact Us' }
];

function CustomNavbar({ darkMode, handleThemeChange, handleTabChange, activeTab }) {
    const handleDarkModeToggle = () => {
        handleThemeChange();
    };

    return (
        <Navbar
            className={`custom-navbar ${darkMode ? 'dark' : 'light'} `}
            expand="lg"
            fixed='top'
            variant={darkMode ? 'dark' : 'light'}
        >
            <Container className="mx-1 px-0">
                <Navbar.Brand className=' fw-bolder '>My Health</Navbar.Brand>
                <div className=" mx-2  navbar-item-container">
                    <Nav className="mx-5 ">
                        {tabs.map(tab => (
                            <Nav.Link key={tab.id} href={`#${tab.id}`} onClick={() => handleTabChange(tab.id)} className={`px-4 mx-4 fw-bold   ${activeTab === tab.id ? 'active' : ''}`}>{tab.text}</Nav.Link>
                        ))}
                    </Nav>
                    <div className="toggle-switch-container ">
                        <input type="checkbox" className="toggle-switch-checkbox" id="toggle-switch" checked={darkMode} onChange={handleDarkModeToggle} />
                        <label className="toggle-switch-label" htmlFor="toggle-switch">
                            <div className="toggle-switch-ball"></div>
                        </label>
                        <div className="theme-icon">{darkMode ? <BsMoon /> : <BsSun />}</div>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
