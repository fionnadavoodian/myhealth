import React from 'react';
import { Form } from 'react-bootstrap';
import HumanDark from '../images/human-dark.png';
import HumanLight from '../images/human-light.png';

const HealthInformation = ({ darkMode, formData, handleInputChange, errors }) => {
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
        <div key={name} className="form-group">
            <label className="form-label">{name.replace(/([A-Z])/g, ' $1').toUpperCase()}: </label>
            <div className="form-check-group">
                <div className="form-check form-check-inline">
                    <input
                        type="radio"
                        name={name}
                        value="yes"
                        checked={formData[name] === 'yes'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        type="radio"
                        name={name}
                        value="no"
                        checked={formData[name] === 'no'}
                        onChange={handleChange}
                        className="form-check-input"
                    />
                    <label className="form-check-label">No</label>
                </div>
            </div>
            {errors[name] && <small className="error-text">{errors[name]}</small>}
        </div>
    );

    return (
        <Form>
            <div className="form-box">
                <div className="health-box-radio">
                    {healthQuestions.map(renderRadioButtons)}
                </div>
                <div className="health-box-image">
                    {darkMode ? <img src={HumanDark} alt="Human Dark" /> : <img src={HumanLight} alt="Human Light" />}
                </div>
                <div className="wh-box">
                    <div className="form-group">
                        <label className="form-label" htmlFor="weight">Weight</label>
                        <div className="input-container">
                            <input
                                name="weight"
                                type="number"
                                id="weight"
                                className="form-control"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                            <span className="unit-label">kg</span>
                            {errors.weight && <small className="error-text">{errors.weight}</small>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="height">Height</label>
                        <div className="input-container">
                            <input
                                name="height"
                                type="number"
                                id="height"
                                className="form-control"
                                value={formData.height}
                                onChange={handleChange}
                            />
                            <span className="unit-label">cm</span>
                            {errors.height && <small className="error-text">{errors.height}</small>}
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default HealthInformation;
