export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  DELETE_TODO = '[todos] DELETE_TODO',
  START_TODO = '[todos] START_TODO',
}

interface AddTodoAction {type: ActionTypes.ADD_TODO, payload: {title: string }}
interface DeleteTodoAction {type: ActionTypes.DELETE_TODO, payload: {id: string}}
interface StartTodoAction {type: ActionTypes.START_TODO, payload: {id:string}}

// eslint-disable-next-line
export function addTodo(title: string): AddTodoAction {
  return {type: ActionTypes.ADD_TODO,payload: {title: title}}
}
// eslint-disable-next-line
export function deleteTodo(id: string): DeleteTodoAction {
  return {type: ActionTypes.DELETE_TODO,payload: {id: id}}
}
// eslint-disable-next-line
export function startTodo(id: string): StartTodoAction {
  return {type: ActionTypes.START_TODO,payload: {id: id}}
}

type TodoAction = AddTodoAction | DeleteTodoAction | StartTodoAction

export default TodoAction