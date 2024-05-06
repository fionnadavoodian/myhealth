
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-wrapper">
            <Container className="about-us-container">
                <h2 className="about-us-heading">About Us</h2>
                <p className="about-us-text ">
                    Welcome to <span className="brand-name">MyHealth</span>, your trusted partner in assessing gastric health cancer risk. Our mission is to provide accurate and reliable insights into gastric health through innovative research and technology.
                </p>
                <p className="about-us-text">
                    At <span className="brand-name">MyHealth</span>, we leverage the pioneering research of Iranian scientists and employ fuzzy logic algorithms to analyze gastric health data with precision and efficiency.
                </p>
                <p className="about-us-text">
                    Our vision extends beyond gastric health. We are committed to broadening our project scope by integrating blood and urea tests. By utilizing image recognition APIs, we aim to analyze uploaded patient data and provide comprehensive insights and recommendations.
                </p>
                <p className="about-us-text">
                    Join us on our journey as we strive to revolutionize healthcare by leveraging cutting-edge technology and scientific research to empower individuals with actionable health insights.
                </p>
            </Container>
        </div>
    );
}

export default AboutUs;
