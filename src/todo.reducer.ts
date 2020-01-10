import { createReducer, on } from '@ngrx/store';

import { addTodo, deleteTodo, toggleTodo, editTodo } from './todo.actions';

export class Todo {
  constructor(
    public text: string = '',
    public done: boolean = false) { }
}

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, {text, done}) => [...state, new Todo(text, done)]),
  on(deleteTodo, (state, { index }) => state.filter((_, idx) => index !== idx)),
  on(editTodo, (state, {index, text}) => [
    ...state.slice(0, index - 1),
    {text, done: state[index].done} as Todo,
    ...state.slice(index + 1)
  ]),
  on(toggleTodo, (state, {index}) => [
    ...state.slice(0, index - 1),
    {text: state[index].text, done: !state[index].done} as Todo,
    ...state.slice(index + 1)
  ])
);
