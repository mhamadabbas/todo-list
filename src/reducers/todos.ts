import { Todo } from '../types/todo';
import { AppAction } from '../actions';
import { Action } from '../enums/action';

const todolist = (state: Todo[] = [], action: AppAction) => {
  switch (action?.type) {
    case Action.ADD_TODO :
      return [...state, new Todo(action.content)];
    default:
      return state;
  }
};

export default todolist;
