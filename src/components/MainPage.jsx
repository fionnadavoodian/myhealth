// MainPage.jsx

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/MainPage.css';
import { ReactComponent as MainPageLight } from '../images/MainPage-Light.svg';
import { ReactComponent as MainPageDark } from '../images/MainPage-Dark.svg';

function MainPage({ darkMode }) {
    const buttonVariant = darkMode ? 'dark' : 'light';

    return (

        <Container className={`main-page-container ${darkMode ? 'dark' : 'light'}`}>
            <div className="main-page-image">
                {darkMode ? <MainPageDark className="image-svg" /> : <MainPageLight className="image-svg" />}
            </div>
            <h2 className="main-page-heading">Your Personal Health Assistant</h2>
            <Button href="#" variant={buttonVariant} className="main-page-button px-5 fw-bold fs-5">Get Started</Button>
            <p className="main-page-sign-in mt-2 pb-3"> Already have an account? <a href="#">Sign in</a></p>
        </Container>

    );
}

export default MainPage;
