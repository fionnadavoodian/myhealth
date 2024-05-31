import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import '../styles/CustomNavbar.css';

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
            className={`custom-navbar ${darkMode ? 'dark' : 'light'}`}
            expand="lg"
            fixed='top'
            variant={darkMode ? 'dark' : 'light'}
        >
            <Container className="navbar-container">
                <Navbar.Brand className='fw-bolder navbar-brand'>My Health</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <div className="navbar-item-container">
                        <Nav >
                            {tabs.map(tab => (
                                <Nav.Link
                                    key={tab.id}
                                    href={`#${tab.id}`}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`px-4 mx-4 fw-bold ${activeTab === tab.id ? 'active' : ''}`}
                                >
                                    {tab.text}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <div className="toggle-switch-container">
                            <input
                                type="checkbox"
                                className="toggle-switch-checkbox"
                                id="toggle-switch"
                                checked={darkMode}
                                onChange={handleDarkModeToggle}
                            />
                            <label className="toggle-switch-label" htmlFor="toggle-switch">
                                <div className="toggle-switch-ball"></div>
                            </label>
                            <div className="theme-icon">{darkMode ? <BsMoon /> : <BsSun />}</div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
