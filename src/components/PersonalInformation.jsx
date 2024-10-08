import React from 'react';
import { Form } from 'react-bootstrap';

const PersonalInformation = ({ formData, handleInputChange, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
    };

    return (
        <Form>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            id="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <small className="error-text">{errors.firstName}</small>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            id="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <small className="error-text">{errors.lastName}</small>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="dob">Date of Birth</label>
                        <input
                            name="dob"
                            type="date"
                            id="dob"
                            className="form-control"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        {errors.dob && <small className="error-text">{errors.dob}</small>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="gender">Gender</label>
                        <select
                            name="gender"
                            id="gender"
                            className="form-control"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <small className="error-text">{errors.gender}</small>}
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <small className="error-text">{errors.email}</small>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <small className="error-text">{errors.password}</small>}
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default PersonalInformation;
