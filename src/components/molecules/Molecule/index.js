import React from 'react';

import Atom from '../../atoms/Atom';

import { MoleculeWrapper } from './molecule.styled.js';


const Molecule = () => {
    return (
        <MoleculeWrapper>
            <Atom />
            <Atom />
            <Atom />
            <Atom />
        </MoleculeWrapper>
    );
}

export default Molecule;