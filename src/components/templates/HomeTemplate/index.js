import React, { Fragment } from 'react';
import Header from 'components/organisms/Header';

import { StyledMain } from './homeTemplate.styled';

const HomeTemplate = props => {
    return (
        <Fragment>
            <Header />
            <StyledMain>
                {props.children}
            </StyledMain>
        </Fragment>
    )
}

export default HomeTemplate;