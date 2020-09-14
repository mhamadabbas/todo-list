import * as Redux from 'redux';
import { Action } from '../enums/action';

export interface AddTodo extends Redux.Action {
  type: Action.ADD_TODO;
  content: string;
}

export type AppAction = AddTodo;
