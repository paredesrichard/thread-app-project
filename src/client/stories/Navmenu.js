import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navmenu from '../components/Navmenu/Navmenu';

storiesOf('Navmenu', module).add('Default', () => <Navmenu />);
