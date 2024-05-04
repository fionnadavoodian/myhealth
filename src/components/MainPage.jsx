// MainPage.jsx

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/MainPage.css';
import { ReactComponent as MainPageLight } from '../images/MainPage-Light.svg';
import { ReactComponent as MainPageDark } from '../images/MainPage-Dark.svg';

function MainPage({ darkMode }) {
    const buttonVariant = darkMode ? 'dark' : 'light';

    return (
        <div className={`main-page-wrapper mt-5 ${darkMode ? 'dark' : 'light'}`}>
            <Container className={`main-page-container ${darkMode ? 'dark' : 'light'}`}>
                {darkMode ? <MainPageDark style={{ transform: 'scale(0.75)' }} /> : <MainPageLight style={{ transform: 'scale(0.75)' }} />}

                <h2 className="main-page-heading">Your Personal Health Assistant</h2>
                <Button href="#" variant={buttonVariant} className="main-page-button px-5 fw-bold fs-5">Get Started</Button>
                <p className="main-page-sign-in mt-3">Already have an account? <a href="#">Sign in</a></p>
            </Container>
        </div>
    );
}

export default MainPage;
