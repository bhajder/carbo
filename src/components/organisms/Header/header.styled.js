import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 1200px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.white};
    padding: 40px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const StyledLogo = styled.img`
    width: 120px;
    margin-right: 100px;
`;