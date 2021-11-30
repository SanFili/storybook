import React from 'react';
import PropTypes from 'prop-types';
import './SearchField.css';

const SearchField = ({ active, size, backgroundColor, label, placeholder, ...props }) => {
    const mode = active ? 'search__btn--active' : 'search__btn--disabled'
    return (
        <div className={`search__field--${size}`}>
            <input
                className="search__input"
                type="text"
                placeholder={placeholder}
            />
            <button
                className={["search__btn", mode, `search__btn--${size}`].join(' ')}
                style={backgroundColor && { backgroundColor }}
                { ...props }
            >
                { label }
            </button>
          </div>
    )
};

SearchField.propTypes = {
    active: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
}

SearchField.defaultProps = {
    active: false,
    size: 'medium',
    backgroundColor: '#2f71e5',
    label: 'Искать',
    placeholder: 'Введите запрос',
    onClick: undefined,
}

export default SearchField