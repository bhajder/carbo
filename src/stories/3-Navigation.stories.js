import React from 'react';
import Navigation from 'components/molecules/Navigation';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';

export default {
    title: "Molecules/Navigation",
    component: Navigation,
    decorators: [withKnobs]
};

export const Nav = () => {
    const verticalValue = boolean("is vertical", false);
    const navLinksValue = object('nav Links', [
        {
            label: 'Another',
            href: '/'
        },
        {
            label: 'One',
            href: '/'
        },
        {
            label: 'Bites',
            href: '/'
        },
        {
            label: 'The dust',
            href: '/'
        }
    ]);
    return (
        <Navigation navLinks={navLinksValue} vertical={verticalValue} />
    )
}
