import React from 'react';
import { Form } from 'react-bootstrap';

const HealthInformation = ({ formData, handleInputChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
    };

    const healthQuestions = [
        'helicobacterPyloriInfection',
        'gastricAtrophic',
        'pepticUlcer',
        'gastricSurgery',
        'peniciousAnemia',
        'familyHistory',
        'lowFruitVegConsumption',
        'highSaltIntake',
        'tobaccoSmoking'
    ];

    const renderRadioButtons = (name) => (
        <div key={name}>
            <label className="form-label">{name.replace(/([A-Z])/g, ' $1').toUpperCase()}: </label>
            <div>
                <input
                    type="radio"
                    name={name}
                    value="yes"
                    checked={formData[name] === 'yes'}
                    onChange={handleChange}
                /> Yes
                <input
                    type="radio"
                    name={name}
                    value="no"
                    checked={formData[name] === 'no'}
                    onChange={handleChange}
                    className="ms-3"
                /> No
            </div>
        </div>
    );

    return (
        <Form>
            {healthQuestions.map(renderRadioButtons)}
            <div className="mt-3">
                <label className="form-label" htmlFor="weight">Weight</label>
                <input
                    name="weight"
                    type="number"
                    id="weight"
                    className="form-control"
                    value={formData.weight}
                    onChange={handleChange}
                /> kg
            </div>
            <div className="mt-3">
                <label className="form-label" htmlFor="height">Height</label>
                <input
                    name="height"
                    type="number"
                    id="height"
                    className="form-control"
                    value={formData.height}
                    onChange={handleChange}
                /> cm
            </div>
        </Form>
    );
};

export default HealthInformation;
