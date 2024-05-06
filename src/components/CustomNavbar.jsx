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
            <Container className="d-flex justify-content-between align-items-center mx-1 px-0">
                <Navbar.Brand className='fs-1 fw-bolder mx-2'>My Health</Navbar.Brand>
                <div className="d-flex align-items-center mx-2">
                    <Nav className="mx-5">
                        {tabs.map(tab => (
                            <Nav.Link key={tab.id} href={`#${tab.id}`} onClick={() => handleTabChange(tab.id)} className={`px-4 mx-4 fw-bold ${activeTab === tab.id ? 'active' : ''}`}>{tab.text}</Nav.Link>
                        ))}
                    </Nav>
                    <div className="toggle-switch-container mx-5">
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
