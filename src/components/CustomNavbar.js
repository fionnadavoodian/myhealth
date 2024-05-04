import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsHouse, BsInfoCircle, BsChatDots } from 'react-icons/bs';
import darkModeBackgroundImage from '../images/navbar-dark.svg';
import lightModeBackgroundImage from '../images/navbar-light.svg';

const darkModeTextColor = '#FFFFFF';
const lightModeTextColor = '#5469D4';

const tabs = [
    { id: 'home', icon: <BsHouse />, text: 'Home' },
    { id: 'about', icon: <BsInfoCircle />, text: 'About Us' },
    { id: 'contact', icon: <BsChatDots />, text: 'Contact Us' }
];

function CustomNavbar() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Navbar
            bg={darkMode ? 'dark' : 'light'}
            expand="lg" className="bg-body-tertiary"
            style={{
                backgroundImage: `url(${darkMode ? darkModeBackgroundImage : lightModeBackgroundImage})`,
                backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
                backgroundSize: 'cover', // Cover the entire area of the navbar
                backgroundPosition: 'center bottom -50px', // Position the background image at the bottom center with an offset of 200px
                color: darkMode ? darkModeTextColor : lightModeTextColor,

            }}
        >
            <Container>
                <Navbar.Brand>My Health</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {tabs.map(tab => (
                            <NavItem key={tab.id} href={`#${tab.id}`} icon={tab.icon} text={tab.text} />
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={handleDarkModeToggle}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const NavItem = ({ href, icon, text }) => (
    <Nav.Link href={href}>
        {icon}
        {text}
    </Nav.Link>
);

export default CustomNavbar;
