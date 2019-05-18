import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoCard from '../src/components/TodoCard/TodoCard';

storiesOf('TodoCard', module)
    .add('simple', () =>
        <TodoCard />
    );