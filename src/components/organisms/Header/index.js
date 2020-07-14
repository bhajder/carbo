import React from 'react';
import { StyledHeader, StyledLogo } from './header.styled';

import Logo from 'assets/images/CARBO.png';
import Button from 'components/atoms/Button';
import Navigation from 'components/molecules/Navigation';

const Header = () => {

    const navLinks = [
        {
            page: '#',
            label: 'Home'
        },
        {
            page: '#',
            label: 'Atoms'
        },
        {
            page: '#',
            label: 'Molecules'
        },
        {
            page: '#',
            label: 'Organisms'
        },
        {
            page: '#',
            label: 'Templates'
        },
        {
            page: '#',
            label: 'Pages'
        }
    ];

    return (
        <StyledHeader>
            <StyledLogo src={Logo} alt="logo"/>
            <Navigation navLinks={navLinks} />
            <Button color="secondary">button</Button>
        </StyledHeader>
    )
}

export default Header;