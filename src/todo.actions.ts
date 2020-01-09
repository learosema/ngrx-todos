import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('ADD_TODO', props<{text: string, done: boolean}>());
export const toggleTodo = createAction('CHECK_TODO', props<{index: number}>());
export const editTodo = createAction('EDIT_TODO', props<{index: number, text: string}>());
export const deleteTodo = createAction('DELETE_TODO', props<{index: number}>());
