import React, { Fragment } from 'react';

import Molecule from '../../molecules/Molecule';

import { OrganismWrapper } from './organism.styled.js';


const Organism = () => {
    return (
        <Fragment>
            <OrganismWrapper>
                <Molecule />
                <Molecule />
                <Molecule />
                <Molecule />
                <Molecule />
                <Molecule />
                <Molecule />
                <Molecule />
                <Molecule />
            </OrganismWrapper>
        </Fragment>
    );
}

export default Organism;