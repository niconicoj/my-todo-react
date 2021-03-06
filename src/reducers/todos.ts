import ITodo from "../models/Todo";
import TodoAction, { ActionTypes } from "../actions/todos"


export interface State {
  todos: ITodo[]
  _increment: number
}

export const initialState: State = {
  todos: [],
  _increment: 0
}

export function todoReducer(state: State = initialState, action: TodoAction) {
  switch (action.type){
    case ActionTypes.ADD_TODO:
      const newTodo: ITodo = {
        id: state._increment.toString(),
        status: 'planned',
        title: action.payload.title,
        elapsed: 0
      } 
      return {
        ...state,
        todos: [...state.todos, newTodo],
        _increment: state._increment + 1
      }
    case ActionTypes.DELETE_TODO: 
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    case ActionTypes.START_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if(todo.id !== action.payload.id){
            return todo
          }
          return {
            ...todo,
            active: Date.now()
          }
        })
      }
    case ActionTypes.STOP_TODO:
      //this is not enough, I need to also add elapsed time since active
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if(todo.id !== action.payload.id){
            return todo
          }
          return {
            ...todo,
            elapsed: action.payload.elapsed,
            active: undefined
          }
        })
      }
    default:
      return state
  }
}

