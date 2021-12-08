import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ active, size, backgroundColor, placeholder }) => {
    const mode = active ? 'input--active' : 'input--disabled'

    return (
        <input
            className={['input', mode, `input--${size}`].join(' ')}
            type="text"
            style={backgroundColor && { backgroundColor }}
            placeholder={placeholder}
            disabled={!active}
        />
    )
};

Input.propTypes = {
    active: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    placeholder: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
}

Input.defaultProps = {
    active: true,
    size: 'medium',
    placeholder: 'Введите запрос',
}

export default Input