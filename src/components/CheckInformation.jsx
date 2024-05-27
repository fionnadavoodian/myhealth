import React from 'react';
import { Form } from 'react-bootstrap';

const CheckInformation = ({ formData, handleInputChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
    };

    return (
        <Form>
            <Form.Group controlId="checkInfo1">
                <Form.Label>Check Info 1</Form.Label>
                <Form.Control
                    type="text"
                    name="checkInfo1"
                    value={formData.checkInfo1 || ''}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="checkInfo2">
                <Form.Label>Check Info 2</Form.Label>
                <Form.Control
                    type="text"
                    name="checkInfo2"
                    value={formData.checkInfo2 || ''}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* Add more fields as needed */}
        </Form>
    );
};

export default CheckInformation;
