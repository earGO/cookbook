import React from 'react';
import {storiesOf} from '@storybook/react';
import TodoList from "../src/components/TodoList/TodoList";

const mockProps = {
    todosObject: {
        todos:[
            {
                _id: '5cde4056e7af123cf341d937',
                todo: 'this is a prepStep for a recipe Chicken Handifrom today',
                active: true
            },
            {
                _id: '5cde4056e7af123cf341d936',
                todo:'this is a prepStep for a recipe Beef Dumpling Stewfrom today',
                active:true
            }
        ],
        dayID: '5cde4056e7af123cf341d92f'
    },
    todosPending:false,
};

storiesOf('Todolist', module)
    .add('Todolist with props', () => (
            <TodoList todosObject={mockProps.todosObject} todosPending={mockProps.todosPending}/>
    ))
    .add('Todolist with no props', () => (
            <TodoList />
        ));
