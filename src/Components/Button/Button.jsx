import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ active, size, backgroundColor, label, classButton, ...props }) => {
    const mode = active ? 'button--active' : 'button--disabled'
    return (
        <button
            disabled={!active}
            className={["button", mode, `button--${size}`, classButton].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
            >
            { label }
        </button>
    )
};

Button.propTypes = {
    active: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    classButton: PropTypes.string,
}

export default Button