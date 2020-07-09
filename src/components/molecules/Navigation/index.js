import React from 'react';
import { StyledNavigation } from './navigation.styled';

import Link from 'components/atoms/Link';

const Navigation = ({ navLinks }) => {
    return (
        <StyledNavigation>
            {navLinks.map(navLink => (
                <Link page={navLink.page} label={navLink.label} />
            ))}
        </StyledNavigation>
    )
}

export default Navigation;