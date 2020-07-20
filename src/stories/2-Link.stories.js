import React from 'react';
import Link from 'components/atoms/Link';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: "Atoms/Link",
    component: Link,
    decorators: [withKnobs]
};

export const Label = () => {
  return (
    <Link label={text("Label", "Example")} />
  )
}
