import React from 'react';
import { StyledButton } from './button.styled';
import PropTypes from 'prop-types';

const Button = ({ color, children }) => {
    return (
        <StyledButton color={color}>{children}</StyledButton>
    )
}

Button.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'secondaryAlt'
    ])
}

export default Button;