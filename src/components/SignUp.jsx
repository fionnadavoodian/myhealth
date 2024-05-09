import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import PersonalInformation from './PersonalInformation'; // Import PersonalInformation component

const SignUp = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const isStepComplete = () => {
        // Implement logic to check if the step is complete
        return true; // Placeholder, replace with actual logic
    };

    return (
        <Container className="signup-container">
            <h2 className="signup-heading">Sign Up</h2>
            {step === 1 && (
                <PersonalInformation handleNext={handleNext} />
            )}
            {/* Add other steps as needed */}
            <div className="signup-buttons">
                {step > 1 && (
                    <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
                )}
                {step < 3 && (
                    <Button variant="primary" onClick={handleNext} disabled={!isStepComplete()}>
                        Next
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default SignUp;
