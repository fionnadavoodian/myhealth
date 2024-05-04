import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/CustomNavbar.css';
import { BsSun, BsMoon } from 'react-icons/bs';

const tabs = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About Us' },
    { id: 'contact', text: 'Contact Us' }
];

function CustomNavbar({ darkMode, handleThemeChange }) {
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
            <Navbar.Brand className='justify-content-start fs-1 pt-5 ps-5 fw-bolder' >My Health</Navbar.Brand>
            <Container className='justify-content-end me-3'>
                <Nav className="me-5">
                    {tabs.map(tab => (
                        <Nav.Link key={tab.id} href={`#${tab.id}`} className=" px-4">{tab.text}</Nav.Link>
                    ))}
                </Nav>
                <div className="toggle-switch-container">
                    <input type="checkbox" className="toggle-switch-checkbox" id="toggle-switch" checked={darkMode} onChange={handleDarkModeToggle} />
                    <label className="toggle-switch-label" htmlFor="toggle-switch">
                        <div className="toggle-switch-ball"></div>
                    </label>
                    <div className="theme-icon">{darkMode ? <BsSun /> : <BsMoon />}</div>
                </div>

            </Container>
        </Navbar>
    );
}

export default CustomNavbar;