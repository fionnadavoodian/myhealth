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
        }
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (section, name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value
            }
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [section]: {
                ...prevErrors[section],
                [name]: !value ? `The ${name} is required` : ''
            }
        }));
    };

    const handleNext = () => {
        if (isStepComplete()) {
            setStep(step + 1);
        } else {
            validateStep();
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const isStepComplete = () => {
        const currentStepData = formData[getCurrentStepKey()];
        return Object.values(currentStepData).every(value => value !== '');
    };

    const validateStep = () => {
        const currentStepKey = getCurrentStepKey();
        const currentStepData = formData[currentStepKey];
        const newErrors = {};

        Object.keys(currentStepData).forEach(key => {
            if (!currentStepData[key]) {
                newErrors[key] = `The ${key} is required`;
            }
        });

        setErrors(prevErrors => ({
            ...prevErrors,
            [currentStepKey]: newErrors
        }));
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
                        errors={errors.personalInfo || {}}
                    />
                );
            case 2:
                return (
                    <HealthInformation
                        formData={formData.healthInfo}
                        handleInputChange={(name, value) => handleInputChange('healthInfo', name, value)}
                        errors={errors.healthInfo || {}}
                    />
                );
            case 3:
                return (
                    <CheckInformation
                        formData={formData}
                    />
                );
            default:
                return null;
        }
    };

    const buttonVariant = darkMode ? 'dark' : 'light';

    return (
        <Container className={`signup-box ${darkMode ? 'dark' : 'light'}`}>
            <h2 className="signup-heading mb-3">Sign Up</h2>
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
                        className="mx-2 next-button"
                    >
                        Next
                    </Button>
                ) : (
                    <Button
                        variant={buttonVariant}
                        className="mx-2"
                        onClick={() => alert('Form Submitted!')}
                    >
                        Done
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default SignUp;
