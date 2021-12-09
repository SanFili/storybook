import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input'
import './SearchField.css';

const SearchField = ({
    activeButton,
    activeInput,
    size,
    backgroundColor,
    labelButton,
    placeholder,
}) => {

    return (
        <div className={['search-field', `search-field__${size}`].join(' ')}>
            <Button
                classButton='search-field__button'
                size={size}
                active={activeButton}
                style={backgroundColor && { backgroundColor }}
                label={labelButton}
            />
            <Input
                size={size}
                active={activeInput}  
                type="text"
                style={backgroundColor && { backgroundColor }}
                placeholder={placeholder}
            />
        </div>
    )
};

SearchField.propTypes = {
    activeButton: PropTypes.bool,
    activeInput: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    labelButton: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    classInput: PropTypes.string,
    classButton: PropTypes.string,
}

export default SearchField