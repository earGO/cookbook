import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TodoCard from "../src/components/TodoCard/TodoCard";

const propTodo =
    { id: 'cde4056e7af123cf341d937',
    todo: 'this is a prepStep for a recipe Chicken Handifrom today',
    active: true };


storiesOf('Todocard', module)
    .add('simple', () => <TodoCard oneTodo={propTodo}/>);