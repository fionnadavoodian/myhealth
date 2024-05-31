import React from 'react';
import { Form } from 'react-bootstrap';

const CheckInformation = ({ formData }) => {
    const {
        personalInfo: { firstName, lastName, dob, gender, email, password },
        healthInfo
    } = formData;

    return (
        <div className="check-info-container">
            <div className="check-info-section">
                <h3>Personal Information</h3>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Date of Birth:</strong> {dob}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Password:</strong> {password}</p>
            </div>
            <div className="check-info-section">
                <h3>Health Information</h3>
                {Object.entries(healthInfo).map(([key, value]) => (
                    <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value}</p>
                ))}
            </div>
        </div>
    );
};

export default CheckInformation;
