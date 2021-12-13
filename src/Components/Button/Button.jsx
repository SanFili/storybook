import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ active, size, backgroundColor, label, classButton }) => {
    const mode = active ? 'button--active' : 'button--disabled'
    return (
        <button
            disabled={!active}
            className={["button", mode, `button--${size}`, classButton].join(' ')}
            style={backgroundColor && { backgroundColor }}
            onClick={() => alert('click')}
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
}

export default Button