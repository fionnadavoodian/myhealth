import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import HumanDark from '../images/human-dark.png';
import HumanLight from '../images/human-light.png';

const HealthInformation = ({ darkMode, formData, handleInputChange, errors }) => {
    const [bmi, setBmi] = useState(null);
    const [bmiMessage, setBmiMessage] = useState('');

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
        'lowFruitVegetableConsumption',
        'highSaltIntake',
        'tobaccoSmoking'
    ];

    const renderRadioButtons = (name) => {
        const options = name === 'tobaccoSmoking'
            ? ['low', 'moderate', 'high']
            : ['yes', 'no'];

        return (
            <div key={name} className="form-group">
                <label className="form-label">{name.replace(/([A-Z])/g, ' $1').toUpperCase()}: </label>
                <div className="form-check-group">
                    {options.map(option => (
                        <div key={option} className="form-check form-check-inline">
                            <input
                                type="radio"
                                name={name}
                                value={option}
                                checked={formData[name] === option}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">{option.charAt(0).toUpperCase() + option.slice(1)}</label>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    useEffect(() => {
        if (formData.weight && formData.height) {
            const heightInMeters = formData.height / 100;
            const calculatedBmi = (formData.weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(calculatedBmi);
            determineBmiCategory(calculatedBmi);
        } else {
            setBmi(null);
            setBmiMessage('');
        }
    }, [formData.weight, formData.height]);

    const determineBmiCategory = (bmi) => {
        let category = '';

        if (bmi < 18.5) {
            category = 'underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'overweight';
        } else if (bmi >= 30) {
            category = 'obese';
        }

        setBmiMessage(<>Your BMI is <strong>{bmi}</strong> and you are <strong>{category}</strong>.</>);
    };

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
                                className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
                                value={formData.weight}
                                onChange={handleChange}
                            />
                            <span className="unit-label">kg</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="height">Height</label>
                        <div className="input-container">
                            <input
                                name="height"
                                type="number"
                                id="height"
                                className={`form-control ${errors.height ? 'is-invalid' : ''}`}
                                value={formData.height}
                                onChange={handleChange}
                            />
                            <span className="unit-label">cm</span>
                        </div>
                    </div>
                    {bmi && (
                        <div className="bmi-box">
                            <p className="bmi-text">{bmiMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </Form>
    );
};

export default HealthInformation;
