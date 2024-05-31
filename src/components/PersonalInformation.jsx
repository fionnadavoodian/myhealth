import React from 'react';
import { Form } from 'react-bootstrap';

const PersonalInformation = ({ formData, handleInputChange, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
    };

    return (
        <Form>
            <div className="row ">
                <div className="col-md-6 col-12 ">
                    <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        <input
                            name="firstName"
                            type="text"
                            id="firstName"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            id="lastName"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="dob">Date of Birth</label>
                        <input
                            name="dob"
                            type="date"
                            id="dob"
                            className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="gender">Gender</label>
                        <select
                            name="gender"
                            id="gender"
                            className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default PersonalInformation;
