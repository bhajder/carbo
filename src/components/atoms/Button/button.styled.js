import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    outline: none;
    border: none;
    min-width: 120px;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 40px;
    height: 50px;
    border-radius: 30px;
    background-color: #36413E;
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.white};
    box-sizing: border-box;
    margin: 5px;
    transition: background-color .2s ease;

    &:hover {
        cursor: pointer;
        transition: background-color .2s ease, color .2s ease;
    }

    ${props => 
        props.color === 'primary' &&
            css`
                background-color: ${props.theme.colors.primary};
                &:hover {
                    background-color: #111122;
                }
            `}
            
    ${props => 
        props.color === 'secondary' &&
            css`
                background-color: ${props.theme.colors.secondary};
                &:hover {
                    background-color: ${props.theme.colors.secondaryAlt};
                }
            `}

    ${props => 
        props.color === 'secondaryAlt' &&
            css`
                background-color: ${props.theme.colors.secondaryAlt};
                &:hover {
                    background-color: ${props.theme.colors.secondary};
                }
            `}
`;
