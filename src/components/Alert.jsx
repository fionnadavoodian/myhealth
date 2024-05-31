import React from 'react';
import PropTypes from 'prop-types';
import { Alert as MuiAlert, Snackbar } from '@mui/material';

const Alert = ({ message, onClose, open }) => {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
            <MuiAlert onClose={onClose} severity="error" sx={{ width: '100%' }}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default Alert;
