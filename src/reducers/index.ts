import * as fromTodos from './todos'
import { combineReducers } from 'redux'

export interface State {
  todos: fromTodos.State
}

export const initialState: State = {
  todos: fromTodos.initialState
}

export const rootReducer = combineReducers<State>({
  todos: fromTodos.todoReducer
})