import { TODO_ONCHANGE, TODO_ADD, TODO_DELETE } from '../constants/actionTypes';
import { Task } from '../types/types';

export const initialState = {
  tasks: [
    {
      id: '',
      title: '',
      status: '',
      description: '',
    },
  ],
};

const todoReducer = (
  state = initialState,
  action: { type: string; item: Task; id: string }
) => {
  const { type, item, id } = action;

  switch (type) {
    case TODO_ONCHANGE: {
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id === item.id) {
            return item;
          }
          return todo;
        }),
      };
    }

    case TODO_ADD: {
      return Object.assign({}, state, {
        item: initialState.tasks,
        tasks: [...state.tasks, item],
      });
    }

    case TODO_DELETE: {
      const { tasks, ...restState } = state;
      console.log(state, id);
      const updated = [...tasks].filter((_item: any) => _item.id !== id);
      return Object.assign({}, restState, {
        tasks: updated,
      });
    }

    default: {
      return state;
    }
  }
};

export default todoReducer;
