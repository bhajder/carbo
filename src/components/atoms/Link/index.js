import React from 'react';
import { StyledLink } from './link.styled';

import PropTypes from "prop-types";

const Link = ({ page, label }) => {
    return (
        <StyledLink href={page}>{label}</StyledLink>
    )
}

Link.propTypes = {
    'label': PropTypes.string
}

export default Link;