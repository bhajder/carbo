import styled, { css } from 'styled-components';

export const StyledNavigation = styled.nav`
    margin: 0 -15px;
    display: flex;
    flex-grow: 1;

    ${props => props.vertical && css`
        flex-direction: column;
    `}

    a {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;