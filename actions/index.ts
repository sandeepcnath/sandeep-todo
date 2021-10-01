import { Task } from '../types/types';

import { TODO_ONCHANGE, TODO_ADD, TODO_DELETE } from '../constants/actionTypes';

export const editTodo = (item: Task) => ({ type: TODO_ONCHANGE, item });

export const addTodo = (item: Task) => ({ type: TODO_ADD, item });

export const deleteTodo = (id: string) => ({ type: TODO_DELETE, id });
