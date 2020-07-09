import React from 'react';
import { StyledTitle } from './title.styled.js';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
    return (
        <StyledTitle>{text}</StyledTitle>
    )
}

Title.propTypes = {
    text: PropTypes.string,
}

export default Title;