import React from 'react';
import Button from 'components/atoms/Button';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withKnobs]
};

const label = 'Colors';
const options = {
  Primary: 'primary',
  Secondary: 'secondary',
  SecondaryAlt: 'secondaryAlt'
}
const defaultValue = options.Primary;
const groupId = 'GRP_BTN';

export const Text = () => {

  const colorValue = select(label, options, defaultValue, groupId);
  return (
    <Button color={colorValue}>Hello Button</Button>
  )
}
