import ITodo from "../models/Todo";
import TodoAction, { ActionTypes } from "../actions/todos"


export interface State {
  todos: ITodo[]
}

export const initialState: State = {
  todos: [{
    id: '1234',
    status: 'inProgress',
    title: 'todo in state',
    elapsed: 0
  }]
}

export function todoReducer(state: State = initialState, action: TodoAction) {
  switch (action.type){
    case ActionTypes.ADD_TODO:
      const newTodo: ITodo = {
        id: state.todos.length.toString(),
        status: 'planned',
        title: action.payload.title,
        elapsed: 0
      } 
      return {
        ...state,
        todos: [...state.todos, newTodo]
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
    default:
      return state
  }
}

