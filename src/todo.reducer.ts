import { createReducer, on } from '@ngrx/store';

import { addTodo, deleteTodo, toggleTodo, editTodo } from './todo.actions';

export interface Todo {
  text: string;
  done: boolean;
}

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, {text, done}) => [...state, {text, done}]),
  on(deleteTodo, (state, { index }) => state.filter((_, idx) => index !== idx)),
  on(editTodo, (state, {index, text}) => [
    ...state.slice(0, index),
    {text, done: state[index].done},
    ...state.slice(index + 1)
  ]),
  on(toggleTodo, (state, {index}) => [
    ...state.slice(0, index),
    {text: state[index].text, done: !state[index].done} as Todo,
    ...state.slice(index + 1)
  ])
);
