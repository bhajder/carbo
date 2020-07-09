import styled from 'styled-components';

export const StyledLink = styled.a`
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    padding: 0 15px;
    transition: color .2s ease;

    &:hover {
        color: ${props => props.theme.colors.secondary};
        transition: color .1s ease;
    }
`;