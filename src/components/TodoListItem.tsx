import React from 'react'
import "./TodoListItem.css"
import { Todo } from './Types';

interface TodoListItemProps{
    todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo}) =>{
    return <li>
        <label className = {todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked = {todo.complete}/>
        {todo.text}
        </label></li>
};