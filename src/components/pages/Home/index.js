import React, { Fragment } from 'react';


import Atom from '../../atoms/Atom';
import Molecule from '../../molecules/Molecule';
import Organism from '../../organisms/Organism';

const Home = () => (
	<Fragment>
		Hello from Carbo!
		<Atom />
		<Molecule />
		<Organism />
	</Fragment>
);

export default Home;