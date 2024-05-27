import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/SignUp.css';
import PersonalInformation from './PersonalInformation';
import HealthInformation from './HealthInformation';
import CheckInformation from './CheckInformation';

const SignUp = ({ darkMode }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        personalInfo: {
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            email: '',
            password: ''
        },
        healthInfo: {
            helicobacterPyloriInfection: '',
            gastricAtrophic: '',
            pepticUlcer: '',
            gastricSurgery: '',
            peniciousAnemia: '',
            familyHistory: '',
            lowFruitVegConsumption: '',
            highSaltIntake: '',
            tobaccoSmoking: '',
            weight: '',
            height: ''
        },
        checkInfo: {
            // Add check information fields here
        }
    });

    const handleInputChange = (section, name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value
            }
        }));
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const isStepComplete = () => {
        const currentStepData = formData[getCurrentStepKey()];
        return Object.values(currentStepData).every(value => value !== '');
    };

    const getCurrentStepKey = () => {
        switch (step) {
            case 1:
                return 'personalInfo';
            case 2:
                return 'healthInfo';
            case 3:
                return 'checkInfo';
            default:
                return 'personalInfo';
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <PersonalInformation
                        formData={formData.personalInfo}
                        handleInputChange={(name, value) => handleInputChange('personalInfo', name, value)}
                    />
                );
            case 2:
                return (
                    <HealthInformation
                        formData={formData.healthInfo}
                        handleInputChange={(name, value) => handleInputChange('healthInfo', name, value)}
                    />
                );
            case 3:
                return (
                    <CheckInformation
                        formData={formData.checkInfo}
                        handleInputChange={(name, value) => handleInputChange('checkInfo', name, value)}
                    />
                );
            default:
                return null;
        }
    };

    const buttonVariant = darkMode ? 'dark' : 'light';

    return (
        <Container className={`signup-container ${darkMode ? 'dark' : 'light'}`}>
            <div className="signup-box">
                <h2 className="signup-heading">Sign Up</h2>
                <div className="stepper">
                    <div className={`step ${step >= 1 ? 'active' : ''}`}>
                        <span>1</span>
                        <p>Personal Information</p>
                    </div>
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>
                        <span>2</span>
                        <p>Medical Information</p>
                    </div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>
                        <span>3</span>
                        <p>Check Information</p>
                    </div>
                </div>
                {renderStepContent()}
            </div>
            <div className="signup-buttons">
                {step > 1 && (
                    <Button variant={buttonVariant} onClick={handlePrevious} className="mx-2">
                        Previous
                    </Button>
                )}
                {step < 3 ? (
                    <Button
                        variant={buttonVariant}
                        onClick={handleNext}
                        disabled={!isStepComplete()}
                        className="mx-2"
                    >
                        Next
                    </Button>
                ) : (
                    <Button
                        variant={buttonVariant}
                        className="mx-2"
                    // Add onClick handler for form submission if needed
                    >
                        Done
                    </Button>
                )}
            </div>

        </Container>
    );
};

export default SignUp;
